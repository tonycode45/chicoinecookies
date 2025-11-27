"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
    targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft() {
        const difference = +targetDate - +new Date()
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }

        return timeLeft
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer)
    })

    return (
        <div className="flex gap-4 justify-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground text-3xl md:text-5xl font-bold font-mono p-4 rounded-lg min-w-[80px] md:min-w-[100px] text-center shadow-lg">
                        {value.toString().padStart(2, "0")}
                    </div>
                    <span className="text-xs md:text-sm uppercase mt-2 font-medium tracking-wider text-muted-foreground">
                        {unit}
                    </span>
                </div>
            ))}
        </div>
    )
}
