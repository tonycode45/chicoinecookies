"use client"

import { useState } from "react"
import { Star, ShoppingBag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { products, boxPricing } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

const boxSizes = [3, 4, 6, 12] as const
type BoxSize = typeof boxSizes[number]

export default function OrderPage() {
    const [selectedSize, setSelectedSize] = useState<BoxSize>(6)
    const [isAdded, setIsAdded] = useState(false)
    const { addToCart } = useCart()

    const product = products[0] // Our single product

    const handleAddToCart = () => {
        const boxProduct = {
            ...product,
            id: `${product.id}-box-${selectedSize}`,
            name: `${selectedSize}-Pack Box`,
            description: `${selectedSize} ${product.name}s`,
            price: boxPricing[selectedSize],
        }

        addToCart(boxProduct, 1)
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    {/* Product Image */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-secondary/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <div className="text-6xl font-serif text-muted-foreground/20">P</div>
                            <Badge className="absolute top-6 left-6 bg-white/90 text-primary hover:bg-white shadow-sm backdrop-blur-sm text-sm py-1 px-3">
                                Signature Cookie
                            </Badge>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                                {product.name}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {product.description}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Handmade fresh daily
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Soft and chewy texture
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Premium ingredients
                                </li>
                            </ul>
                        </div>

                        {/* Allergens */}
                        <div className="space-y-3">
                            <h3 className="font-semibold text-sm">Allergen Information</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.allergens.map((allergen) => (
                                    <Badge key={allergen} variant="secondary" className="bg-secondary/50">
                                        Contains {allergen}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Box Size Selector */}
                        <div className="space-y-4">
                            <h3 className="font-semibold">Choose Your Box Size</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {boxSizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={cn(
                                            "p-4 rounded-lg border-2 transition-all text-left hover:border-primary/50",
                                            selectedSize === size
                                                ? "border-primary bg-primary/5"
                                                : "border-border bg-background"
                                        )}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-semibold">{size} Cookies</span>
                                            {selectedSize === size && (
                                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-xl font-bold font-serif">
                                            ${boxPricing[size].toFixed(2)}
                                        </span>
                                        <span className="text-xs text-muted-foreground block mt-1">
                                            ${(boxPricing[size] / size).toFixed(2)} per cookie
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <Button
                            size="lg"
                            className="w-full"
                            onClick={handleAddToCart}
                            disabled={isAdded}
                        >
                            <ShoppingBag className="w-5 h-5 mr-2" />
                            {isAdded ? "Added to Cart!" : "Add Box to Cart"}
                        </Button>
                    </div>
                </div>

                {/* Coming Soon Section */}
                <div className="mt-32 text-center max-w-2xl mx-auto">
                    <div className="p-12 bg-gradient-to-b from-secondary/20 to-background rounded-2xl border">
                        <h2 className="text-3xl font-bold font-serif mb-4">More Cookies Coming Soon</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I'm starting with my signature cookie—new flavors will drop soon. Sign up for the newsletter to be the first to know.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
