import Link from "next/link"
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { products } from "@/lib/data"

// Mock cart data
const cartItems = [
    {
        product: products[0],
        quantity: 2,
    },
    {
        product: products[1],
        quantity: 1,
    },
]

export default function CartPage() {
    const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    const shipping = 5.00
    const total = subtotal + shipping

    return (
        <div className="py-12 md:py-20">
            <Container>
                <h1 className="text-3xl font-bold font-serif mb-8">Your Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.product.id} className="flex gap-4 p-4 border rounded-lg bg-card">
                                <div className="h-24 w-24 bg-secondary/30 rounded-md flex items-center justify-center text-2xl font-serif text-muted-foreground/20 shrink-0">
                                    {item.product.name.charAt(0)}
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold font-serif">{item.product.name}</h3>
                                            <p className="text-sm text-muted-foreground">{item.product.category}</p>
                                        </div>
                                        <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center border rounded-md h-8">
                                            <button className="px-2 hover:bg-secondary/50 transition-colors h-full">
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                            <button className="px-2 hover:bg-secondary/50 transition-colors h-full">
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                                            <Trash2 className="w-4 h-4 mr-1" />
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-secondary/20 rounded-lg p-6 space-y-4">
                            <h3 className="font-semibold text-lg">Order Summary</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Button className="w-full" size="lg" asChild>
                                <Link href="/checkout">
                                    Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <p className="text-xs text-center text-muted-foreground">
                                Taxes calculated at checkout.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
