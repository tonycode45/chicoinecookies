"use client"

import { motion } from "framer-motion"
import { Gift, Cookie, Crown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface LoyaltyProgressProps {
    points: number
    nextTierPoints: number
    tierName: string
}

export function LoyaltyProgress({ points, nextTierPoints, tierName }: LoyaltyProgressProps) {
    const progress = Math.min((points / nextTierPoints) * 100, 100)

    return (
        <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground pb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-medium opacity-90">Current Status</p>
                        <h3 className="text-2xl font-bold font-serif flex items-center gap-2">
                            <Crown className="w-5 h-5" /> {tierName}
                        </h3>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold">{points}</p>
                        <p className="text-xs opacity-80">Points</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-8 relative">
                <div className="absolute -top-4 left-6 right-6 h-8 bg-card rounded-full shadow-sm flex items-center px-1">
                    <div className="w-full h-4 bg-secondary/30 rounded-full overflow-hidden relative">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                        />
                    </div>
                </div>

                <div className="mt-4 space-y-6">
                    <p className="text-sm text-muted-foreground text-center">
                        {nextTierPoints - points} points until your next reward!
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/10">
                            <Cookie className="w-6 h-6 text-primary" />
                            <span className="text-xs font-medium">Free Cookie</span>
                            <span className="text-[10px] text-muted-foreground">500 pts</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/10 opacity-50">
                            <Gift className="w-6 h-6 text-primary" />
                            <span className="text-xs font-medium">$10 Off</span>
                            <span className="text-[10px] text-muted-foreground">1000 pts</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/10 opacity-50">
                            <Crown className="w-6 h-6 text-primary" />
                            <span className="text-xs font-medium">VIP Box</span>
                            <span className="text-[10px] text-muted-foreground">2500 pts</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
