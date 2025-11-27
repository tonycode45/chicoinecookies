import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tiers = [
    {
        name: "The Taster",
        price: 25,
        description: "Perfect for the casual snacker.",
        features: ["6 Cookies per month", "Free Shipping", "Cancel anytime"],
        popular: false,
    },
    {
        name: "The Cookie Monster",
        price: 45,
        description: "Our most popular box for families.",
        features: ["12 Cookies per month", "Free Shipping", "Early access to new flavors", "10% off storewide"],
        popular: true,
    },
    {
        name: "The Office Hero",
        price: 85,
        description: "Keep the team happy and fueled.",
        features: ["24 Cookies per month", "Free Priority Shipping", "Custom flavor selection", "20% off storewide"],
        popular: false,
    },
]

export function SubscriptionTiers() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
                <Card key={tier.name} className={`relative flex flex-col ${tier.popular ? "border-primary shadow-lg scale-105 z-10" : ""}`}>
                    {tier.popular && (
                        <div className="absolute -top-4 left-0 right-0 flex justify-center">
                            <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="text-2xl font-serif">{tier.name}</CardTitle>
                        <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="mb-6">
                            <span className="text-4xl font-bold">${tier.price}</span>
                            <span className="text-muted-foreground">/month</span>
                        </div>
                        <ul className="space-y-3">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-primary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                            Subscribe Now
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
