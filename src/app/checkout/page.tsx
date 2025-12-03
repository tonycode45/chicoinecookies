"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

const checkoutSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    newsletter: z.boolean().optional(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    address: z.string().min(1, "Address is required"),
    apartment: z.string().optional(),
    city: z.string().min(1, "City is required"),
    state: z.string().min(2, "State is required"),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),
    phone: z.string().regex(/^[\d\s\-\(\)]+$/, "Please enter a valid phone number").min(10, "Phone number is required"),
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

export default function CheckoutPage() {
    const { totalPrice, items, clearCart } = useCart()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [orderComplete, setOrderComplete] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
    })

    const subtotal = totalPrice
    const shipping = items.length > 0 ? 5.00 : 0
    const total = subtotal + shipping

    const onSubmit = async (data: CheckoutFormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log("Order data:", data)
        setOrderComplete(true)
        clearCart()
        setIsSubmitting(false)
    }

    if (orderComplete) {
        return (
            <div className="py-12 md:py-20 bg-secondary/10 min-h-screen flex items-center justify-center">
                <Container>
                    <div className="max-w-md mx-auto text-center">
                        <CheckCircle2 className="w-16 h-16 mx-auto text-primary mb-4" />
                        <h1 className="text-3xl font-bold font-serif mb-4">Order Placed!</h1>
                        <p className="text-muted-foreground mb-8">Thank you for your order. We'll send you a confirmation email shortly.</p>
                        <Button asChild>
                            <a href="/shop">Continue Shopping</a>
                        </Button>
                    </div>
                </Container>
            </div>
        )
    }

    if (items.length === 0) {
        return (
            <div className="py-12 md:py-20 bg-secondary/10 min-h-screen flex items-center justify-center">
                <Container>
                    <div className="max-w-md mx-auto text-center">
                        <h1 className="text-3xl font-bold font-serif mb-4">Your cart is empty</h1>
                        <p className="text-muted-foreground mb-8">Add some items to your cart before checking out.</p>
                        <Button asChild>
                            <a href="/shop">Browse Cookies</a>
                        </Button>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="py-12 md:py-20 bg-secondary/10 min-h-screen">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold font-serif">Checkout</h1>
                        <p className="text-muted-foreground">Complete your order to get your fresh cookies.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-6">
                                {/* Contact Info */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Contact Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <Input
                                                placeholder="Email address"
                                                type="email"
                                                {...register("email")}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="newsletter"
                                                className="rounded border-gray-300"
                                                {...register("newsletter")}
                                            />
                                            <label htmlFor="newsletter" className="text-sm text-muted-foreground">Keep me up to date on news and exclusive offers</label>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Shipping Address */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Shipping Address</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Input placeholder="First name" {...register("firstName")} />
                                                {errors.firstName && (
                                                    <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Input placeholder="Last name" {...register("lastName")} />
                                                {errors.lastName && (
                                                    <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <Input placeholder="Address" {...register("address")} />
                                            {errors.address && (
                                                <p className="text-sm text-destructive mt-1">{errors.address.message}</p>
                                            )}
                                        </div>
                                        <Input placeholder="Apartment, suite, etc. (optional)" {...register("apartment")} />
                                        <div className="grid grid-cols-3 gap-4">
                                            <div>
                                                <Input placeholder="City" {...register("city")} />
                                                {errors.city && (
                                                    <p className="text-sm text-destructive mt-1">{errors.city.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Input placeholder="State" {...register("state")} />
                                                {errors.state && (
                                                    <p className="text-sm text-destructive mt-1">{errors.state.message}</p>
                                                )}
                                            </div>
                                            <div>
                                                <Input placeholder="ZIP code" {...register("zipCode")} />
                                                {errors.zipCode && (
                                                    <p className="text-sm text-destructive mt-1">{errors.zipCode.message}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <Input placeholder="Phone" {...register("phone")} />
                                            {errors.phone && (
                                                <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Payment */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Payment</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="p-4 border rounded-md bg-secondary/20 text-center text-sm text-muted-foreground">
                                            Payment integration would go here (Stripe, etc.)
                                        </div>
                                    </CardContent>
                                </Card>

                                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Processing..." : "Pay Now"}
                                </Button>
                            </div>

                            {/* Order Summary Sidebar */}
                            <div className="md:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    <Card className="bg-secondary/20 border-none">
                                        <CardHeader>
                                            <CardTitle className="text-lg">Order Summary</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                {items.map((item) => (
                                                    <div key={item.product.id} className="flex justify-between text-sm">
                                                        <span className="text-muted-foreground">
                                                            {item.product.name} x{item.quantity}
                                                        </span>
                                                        <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="border-t pt-2 flex justify-between text-sm">
                                                <span>Subtotal</span>
                                                <span>${subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Shipping</span>
                                                <span>${shipping.toFixed(2)}</span>
                                            </div>
                                            <div className="border-t pt-4 flex justify-between font-bold">
                                                <span>Total</span>
                                                <span>${total.toFixed(2)}</span>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div className="text-sm">
                                            <p className="font-medium text-primary">Satisfaction Guaranteed</p>
                                            <p className="text-muted-foreground">If you're not happy, we'll make it right.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}
