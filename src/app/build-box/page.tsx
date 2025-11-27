import { Container } from "@/components/layout/container"
import { BoxBuilder } from "@/components/features/box-builder/box-builder"

export default function BuildBoxPage() {
    return (
        <div className="py-12 md:py-20 min-h-screen">
            <Container>
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold font-serif mb-4">Build Your Own Box</h1>
                    <p className="text-muted-foreground">
                        Curate your perfect selection. Choose a 6-pack or 12-pack and fill it with your favorites.
                    </p>
                </div>

                <BoxBuilder />
            </Container>
        </div>
    )
}
