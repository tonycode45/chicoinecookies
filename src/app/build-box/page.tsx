import { Container } from "@/components/layout/container"
import { BoxBuilder } from "@/components/features/box-builder/box-builder"

export default function BuildBoxPage() {
    return (
        <div className="py-12 md:py-20 min-h-screen">
            <Container>
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold font-serif mb-4">Pick Your Quantity</h1>
                    <p className="text-muted-foreground">
                        Choose how many of our signature Peanut Butter Oatmeal Chocolate Chip Cookies you'd like.
                    </p>
                </div>

                <BoxBuilder />
            </Container>
        </div>
    )
}
