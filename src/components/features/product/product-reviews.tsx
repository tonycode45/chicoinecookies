import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Review {
    id: string
    user: string
    rating: number
    comment: string
    date: string
}

interface ProductReviewsProps {
    reviews: Review[]
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold font-serif">Customer Reviews</h3>
            <div className="grid gap-6 md:grid-cols-2">
                {reviews.map((review) => (
                    <Card key={review.id} className="border-none bg-secondary/20">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">{review.user}</span>
                                <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-muted-foreground"}`}
                                    />
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
