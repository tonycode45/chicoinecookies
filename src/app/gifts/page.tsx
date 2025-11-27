import { Container } from "@/components/layout/container"
import { GiftOptions } from "@/components/features/gifting/gift-options"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GiftingPage() {
    return (
        <div className="py-12 md:py-20 bg-secondary/10 min-h-screen">
            <Container>
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold font-serif mb-4">Send a Gift</h1>
                        <p className="text-muted-foreground">
                            Nothing says "I care" like a box of warm, handcrafted cookies.
                        </p>
                    </div>

                    <GiftOptions />

                    <div className="mt-8 text-center">
                        <Button size="lg" className="w-full md:w-auto" asChild>
                            <Link href="/shop">Choose Cookies to Gift</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
