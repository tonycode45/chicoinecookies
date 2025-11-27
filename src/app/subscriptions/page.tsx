import { Container } from "@/components/layout/container"
import { SubscriptionTiers } from "@/components/features/subscriptions/subscription-tiers"
import { CheckCircle2 } from "lucide-react"

export default function SubscriptionsPage() {
    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold font-serif mb-4">Join the Club</h1>
                    <p className="text-muted-foreground text-lg">
                        Fresh cookies delivered to your door every month. Save up to 20% and never run out of sweetness.
                    </p>
                </div>

                <SubscriptionTiers />

                <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold font-serif mb-2">Freshly Baked</h3>
                        <p className="text-sm text-muted-foreground">Baked the same day we ship. Guaranteed freshness.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold font-serif mb-2">Flexible Plans</h3>
                        <p className="text-sm text-muted-foreground">Skip a month, swap flavors, or cancel anytime.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold font-serif mb-2">Member Perks</h3>
                        <p className="text-sm text-muted-foreground">Exclusive discounts and early access to drops.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
