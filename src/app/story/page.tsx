import { Container } from "@/components/layout/container"
import { Timeline } from "@/components/features/story/timeline"

const timelineItems = [
    {
        year: "2018",
        title: "The First Batch",
        description: "It all started in a tiny apartment kitchen. After months of testing, the perfect chocolate chip cookie recipe was born.",
    },
    {
        year: "2019",
        title: "Farmers Markets",
        description: "We took our cookies to local markets. We sold out every single weekend. The word was spreading.",
    },
    {
        year: "2020",
        title: "Going Online",
        description: "When the world shut down, we opened up online. Shipping fresh cookies nationwide brought joy to doorsteps everywhere.",
    },
    {
        year: "2022",
        title: "The First Shop",
        description: "We opened our flagship store in downtown. The smell of fresh cookies now fills the streets daily.",
    },
    {
        year: "2024",
        title: "The Cookie Lab",
        description: "We launched our experimental kitchen to push the boundaries of what a cookie can be.",
    },
]

export default function StoryPage() {
    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Our Story</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We believe that a cookie is more than just a treat. It's a moment of joy, a memory shared, and a small act of kindness.
                    </p>
                </div>

                <div className="mb-20">
                    <div className="aspect-video bg-secondary/30 rounded-2xl flex items-center justify-center text-muted-foreground/20 text-4xl font-serif">
                        Founder Video / Image
                    </div>
                </div>

                <h2 className="text-3xl font-bold font-serif text-center mb-12">The Journey</h2>
                <Timeline items={timelineItems} />
            </Container>
        </div>
    )
}
