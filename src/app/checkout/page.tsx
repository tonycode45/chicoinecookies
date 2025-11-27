import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckoutPage() {
    return (
        <div className="py-12 md:py-20 bg-secondary/10 min-h-screen">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold font-serif">Checkout</h1>
                        <p className="text-muted-foreground">Complete your order to get your fresh cookies.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            {/* Contact Info */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Input placeholder="Email address" />
                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" id="newsletter" className="rounded border-gray-300" />
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
                                        <Input placeholder="First name" />
                                        <Input placeholder="Last name" />
                                    </div>
                                    <Input placeholder="Address" />
                                    <Input placeholder="Apartment, suite, etc. (optional)" />
                                    <div className="grid grid-cols-3 gap-4">
                                        <Input placeholder="City" />
                                        <Input placeholder="State" />
                                        <Input placeholder="ZIP code" />
                                    </div>
                                    <Input placeholder="Phone" />
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

                            <Button size="lg" className="w-full">Pay Now</Button>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="md:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <Card className="bg-secondary/20 border-none">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Order Summary</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span>Subtotal</span>
                                            <span>$13.75</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Shipping</span>
                                            <span>$5.00</span>
                                        </div>
                                        <div className="border-t pt-4 flex justify-between font-bold">
                                            <span>Total</span>
                                            <span>$18.75</span>
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
                </div>
            </Container>
        </div>
    )
}
