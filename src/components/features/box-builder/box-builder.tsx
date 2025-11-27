"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, Box, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { products } from "@/lib/data"

// Filter out non-cookie items if any (using all products for now)
const cookieOptions = products

export function BoxBuilder() {
    const [boxSize, setBoxSize] = useState<6 | 12>(6)
    const [selectedCookies, setSelectedCookies] = useState<string[]>([])

    const handleAddCookie = (cookieId: string) => {
        if (selectedCookies.length < boxSize) {
            setSelectedCookies([...selectedCookies, cookieId])
        }
    }

    const handleRemoveCookie = (index: number) => {
        const newCookies = [...selectedCookies]
        newCookies.splice(index, 1)
        setSelectedCookies(newCookies)
    }

    const handleBoxSizeChange = (size: 6 | 12) => {
        setBoxSize(size)
        // If shrinking box, trim excess cookies
        if (selectedCookies.length > size) {
            setSelectedCookies(selectedCookies.slice(0, size))
        }
    }

    const isFull = selectedCookies.length === boxSize
    const progress = (selectedCookies.length / boxSize) * 100

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:h-[calc(100vh-200px)]">
            {/* Left Column: Cookie Selection */}
            <div className="lg:col-span-2 overflow-y-auto pr-2">
                <h2 className="text-2xl font-bold font-serif mb-6">1. Choose Your Flavors</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {cookieOptions.map((cookie) => (
                        <Card
                            key={cookie.id}
                            className="cursor-pointer hover:border-primary transition-all group relative overflow-hidden border-2 border-transparent"
                            onClick={() => handleAddCookie(cookie.id)}
                        >
                            <div className="aspect-square bg-secondary/30 relative flex items-center justify-center">
                                <div className="text-4xl font-serif text-muted-foreground/20">{cookie.name.charAt(0)}</div>
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <Plus className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <div className="p-3">
                                <h3 className="font-semibold text-sm line-clamp-1">{cookie.name}</h3>
                                <p className="text-xs text-muted-foreground">{cookie.category}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Right Column: The Box */}
            <div className="lg:col-span-1 flex flex-col h-full">
                <div className="bg-card border rounded-xl shadow-lg flex flex-col h-full overflow-hidden sticky top-24">
                    <div className="p-6 border-b bg-secondary/10">
                        <h2 className="text-xl font-bold font-serif mb-4">2. Fill Your Box</h2>

                        {/* Box Size Selector */}
                        <div className="flex gap-2 mb-6">
                            <button
                                onClick={() => handleBoxSizeChange(6)}
                                className={cn(
                                    "flex-1 py-2 px-4 rounded-md border text-sm font-medium transition-all",
                                    boxSize === 6
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "bg-background hover:bg-secondary/50"
                                )}
                            >
                                6-Pack
                            </button>
                            <button
                                onClick={() => handleBoxSizeChange(12)}
                                className={cn(
                                    "flex-1 py-2 px-4 rounded-md border text-sm font-medium transition-all",
                                    boxSize === 12
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "bg-background hover:bg-secondary/50"
                                )}
                            >
                                12-Pack
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="font-medium text-muted-foreground">
                                    {selectedCookies.length} / {boxSize} Cookies
                                </span>
                                {isFull && <span className="text-primary font-bold">Box Full!</span>}
                            </div>
                            <div className="h-2 w-full bg-secondary/30 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Box Slots */}
                    <div className="flex-1 overflow-y-auto p-6 bg-secondary/5">
                        <div className="grid grid-cols-2 gap-3">
                            {[...Array(boxSize)].map((_, index) => {
                                const cookieId = selectedCookies[index]
                                const cookie = cookieId ? cookieOptions.find(c => c.id === cookieId) : null

                                return (
                                    <div
                                        key={index}
                                        className={cn(
                                            "aspect-square rounded-lg border-2 border-dashed flex items-center justify-center relative transition-all",
                                            cookie ? "border-solid border-primary/20 bg-background shadow-sm" : "border-muted-foreground/20 bg-transparent"
                                        )}
                                    >
                                        <AnimatePresence mode="wait">
                                            {cookie ? (
                                                <motion.div
                                                    key={cookie.id}
                                                    initial={{ scale: 0.5, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.5, opacity: 0 }}
                                                    className="w-full h-full p-2 relative group"
                                                >
                                                    <div className="w-full h-full bg-secondary/30 rounded-md flex items-center justify-center text-2xl font-serif text-muted-foreground/30">
                                                        {cookie.name.charAt(0)}
                                                    </div>
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 rounded-md">
                                                        <button
                                                            onClick={() => handleRemoveCookie(index)}
                                                            className="p-1 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <div className="absolute bottom-1 left-0 right-0 text-[10px] text-center font-medium truncate px-1">
                                                        {cookie.name}
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <div className="text-muted-foreground/20">
                                                    <Box className="w-6 h-6" />
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t bg-background">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-muted-foreground">Total</span>
                            <span className="text-xl font-bold font-serif">
                                ${(boxSize === 6 ? 24 : 45).toFixed(2)}
                            </span>
                        </div>
                        <Button className="w-full" size="lg" disabled={!isFull}>
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Add Box to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
