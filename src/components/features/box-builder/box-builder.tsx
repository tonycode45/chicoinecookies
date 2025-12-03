"use client"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { products, boxPricing } from "@/lib/data"
import { useCart } from "@/lib/cart-context"

const boxSizes = [3, 4, 6, 12] as const
type BoxSize = typeof boxSizes[number]

export function BoxBuilder() {
    const [boxSize, setBoxSize] = useState<BoxSize>(6)
    const [isAdded, setIsAdded] = useState(false)
    const { addToCart } = useCart()

    const product = products[0] // Our single product

    const handleAddBox = () => {
        const boxProduct = {
            ...product,
            id: `${product.id}-box-${boxSize}`,
            name: `${boxSize}-Pack Box`,
            description: `${boxSize} ${product.name}s`,
            price: boxPricing[boxSize],
        }

        addToCart(boxProduct, 1)
        setIsAdded(true)
        setTimeout(() => {
            setIsAdded(false)
        }, 2000)
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-card border rounded-xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b bg-secondary/10">
                    <h2 className="text-2xl font-bold font-serif mb-2">Choose Your Box Size</h2>
                    <p className="text-muted-foreground">
                        Select how many {product.name}s you'd like
                    </p>
                </div>

                {/* Box Size Selection */}
                <div className="p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {boxSizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setBoxSize(size)}
                                className={cn(
                                    "p-6 rounded-lg border-2 transition-all text-center hover:border-primary/50 relative",
                                    boxSize === size
                                        ? "border-primary bg-primary/5 shadow-md"
                                        : "border-border bg-background"
                                )}
                            >
                                {boxSize === size && (
                                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                    </div>
                                )}
                                <div className="text-3xl font-bold font-serif mb-2">{size}</div>
                                <div className="text-xs text-muted-foreground mb-3">Cookies</div>
                                <div className="text-xl font-bold text-primary">
                                    ${boxPricing[size].toFixed(2)}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    ${(boxPricing[size] / size).toFixed(2)} each
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Product Preview */}
                    <div className="bg-secondary/20 rounded-xl p-6 mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-lg bg-secondary/50 flex items-center justify-center flex-shrink-0">
                                <div className="text-3xl font-serif text-muted-foreground/30">P</div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold mb-1">{product.name}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Summary & CTA */}
                    <div className="border-t pt-6">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Your box contains:</div>
                                <div className="text-lg font-semibold">
                                    {boxSize} × {product.name}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-muted-foreground mb-1">Total</div>
                                <div className="text-3xl font-bold font-serif">
                                    ${boxPricing[boxSize].toFixed(2)}
                                </div>
                            </div>
                        </div>
                        <Button
                            className="w-full"
                            size="lg"
                            disabled={isAdded}
                            onClick={handleAddBox}
                        >
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            {isAdded ? "Added to Cart!" : "Add Box to Cart"}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Coming Soon Note */}
            <div className="mt-8 text-center p-6 bg-secondary/10 rounded-lg border">
                <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">More flavors coming soon!</span> Right now I'm keeping it simple with my signature cookie. Mix-and-match boxes will be available when new flavors drop.
                </p>
            </div>
        </div>
    )
}
