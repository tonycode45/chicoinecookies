import { Container } from "@/components/layout/container"
import { Quiz } from "@/components/features/quiz/quiz"

export default function QuizPage() {
    return (
        <div className="py-12 md:py-20 min-h-screen bg-secondary/10">
            <Container>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-serif mb-4">Find Your Flavor</h1>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Can't decide? Take our quick personality quiz and we'll match you with your perfect cookie soulmate.
                    </p>
                </div>

                <Quiz />
            </Container>
        </div>
    )
}
