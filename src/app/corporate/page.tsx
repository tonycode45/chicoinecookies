import { Container } from "@/components/layout/container"
import { CorporateForm } from "@/components/features/corporate/corporate-form"

export default function CorporatePage() {
    return (
        <div className="py-12 md:py-20 bg-secondary/10 min-h-screen">
            <Container>
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold font-serif mb-4">Corporate & Events</h1>
                    <p className="text-muted-foreground text-lg">
                        Make your next event unforgettable with Chicoine Cookies.
                        From office parties to weddings, we handle orders of all sizes with custom packaging options.
                    </p>
                </div>

                <CorporateForm />
            </Container>
        </div>
    )
}
