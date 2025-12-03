import { Container } from "@/components/layout/container"
import Image from "next/image"

export default function StoryPage() {
    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Our Story</h1>
                    </div>

                    {/* Image placeholder */}
                    <div className="mb-16">
                        <div className="aspect-[16/9] bg-secondary/30 rounded-2xl overflow-hidden relative">
                            <Image
                                src="/images/story-teaser.jpg"
                                alt="Baking cookies"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Story Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                            <p>
                                I started this brand with one goal: make a cookie that feels homemade every single time. After testing batch after batch, I landed on my signature Peanut Butter Oatmeal Chocolate Chip cookie—soft, satisfying, and packed with flavor.
                            </p>

                            <p>
                                Right now, I'm keeping the menu simple and doing one cookie really well. More flavors are coming soon, but this one is the original—and it's the one I'm proud to share first.
                            </p>

                            <p className="text-muted-foreground italic">
                                Thanks for supporting a small, growing kitchen—one cookie at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
