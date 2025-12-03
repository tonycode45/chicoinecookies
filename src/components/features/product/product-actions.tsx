"use client"

import { useState } from "react"
import { Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, type Product } from "@/lib/cart-context"

interface ProductActionsProps {
    product: Product
}

export function ProductActions({ product }: ProductActionsProps) {
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = () => {
        addToCart(product, quantity)
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1)
    }

    const decrementQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1))
    }

    return (
        <div className="pt-6 border-t">
            <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-md">
                    <button
                        onClick={decrementQuantity}
                        className="p-3 hover:bg-secondary/50 transition-colors"
                        aria-label="Decrease quantity"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                        onClick={incrementQuantity}
                        className="p-3 hover:bg-secondary/50 transition-colors"
                        aria-label="Increase quantity"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
                <Button
                    size="lg"
                    className="flex-1 text-base"
                    onClick={handleAddToCart}
                    disabled={isAdded}
                >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    {isAdded ? "Added to Cart!" : "Add to Cart"}
                </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center">
                Free shipping on orders over $50. Freshness guaranteed.
            </p>
        </div>
    )
}
