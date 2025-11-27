import { Container } from "@/components/layout/container"
import { LoyaltyProgress } from "@/components/features/rewards/loyalty-progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RewardsPage() {
    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="max-w-2xl mx-auto space-y-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold font-serif mb-4">Cookie Rewards</h1>
                        <p className="text-muted-foreground">Earn points with every bite. Join the sweetest club in town.</p>
                    </div>

                    <LoyaltyProgress points={350} nextTierPoints={500} tierName="Cookie Rookie" />

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-secondary/20 p-6 rounded-xl">
                            <h3 className="font-bold font-serif mb-2">How to Earn</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• 10 points per $1 spent</li>
                                <li>• 50 points for following on Instagram</li>
                                <li>• 100 points on your birthday</li>
                            </ul>
                        </div>
                        <div className="bg-secondary/20 p-6 rounded-xl">
                            <h3 className="font-bold font-serif mb-2">Perks</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Free shipping on orders over $40</li>
                                <li>• Early access to new flavors</li>
                                <li>• Exclusive member-only events</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button size="lg" asChild>
                            <Link href="/shop">Start Earning</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
