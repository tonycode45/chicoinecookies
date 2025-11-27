"use client"

import { useState } from "react"
import { Calendar as CalendarIcon, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const cardDesigns = [
    { id: "bday", name: "Happy Birthday", color: "bg-pink-100" },
    { id: "thx", name: "Thank You", color: "bg-blue-100" },
    { id: "congrats", name: "Congrats", color: "bg-yellow-100" },
    { id: "love", name: "With Love", color: "bg-red-100" },
]

export function GiftOptions() {
    const [selectedCard, setSelectedCard] = useState(cardDesigns[0].id)

    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Gift className="w-5 h-5" /> Make it a Gift
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">1. Choose a Card Design</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {cardDesigns.map((card) => (
                                <button
                                    key={card.id}
                                    onClick={() => setSelectedCard(card.id)}
                                    className={cn(
                                        "aspect-[4/3] rounded-lg border-2 transition-all flex items-center justify-center text-sm font-medium",
                                        card.color,
                                        selectedCard === card.id ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-primary/50"
                                    )}
                                >
                                    {card.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">2. Add a Message</label>
                        <Textarea placeholder="Write your sweet note here..." maxLength={200} />
                        <p className="text-xs text-muted-foreground text-right">0/200</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">3. Schedule Delivery</label>
                        <div className="relative">
                            <Input type="date" className="pl-10" />
                            <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground">
                            We'll bake and ship so it arrives as close to this date as possible.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
