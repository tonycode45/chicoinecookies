import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ugcPosts = [
    { id: 1, user: "@cookie_lover", image: "/images/ugc1.jpg", caption: "Best delivery day ever! 🍪", rating: 5 },
    { id: 2, user: "@sweet_tooth", image: "/images/ugc2.jpg", caption: "These are dangerously good.", rating: 5 },
    { id: 3, user: "@foodie_jane", image: "/images/ugc3.jpg", caption: "Midnight snack goals.", rating: 4 },
    { id: 4, user: "@office_party", image: "/images/ugc4.jpg", caption: "The team loved the corporate box!", rating: 5 },
    { id: 5, user: "@baker_bob", image: "/images/ugc5.jpg", caption: "Texture is on point.", rating: 5 },
    { id: 6, user: "@choc_fan", image: "/images/ugc6.jpg", caption: "Double chocolate is a must try.", rating: 5 },
]

export function UGCGallery() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ugcPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
                    <div className="aspect-square bg-secondary/30 relative flex items-center justify-center text-muted-foreground/20 text-4xl font-serif">
                        {/* Placeholder for image */}
                        Image
                    </div>
                    <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-sm">{post.user}</span>
                            <div className="flex text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-3 w-3 ${i < post.rating ? "fill-current" : "text-muted-foreground/30"}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{post.caption}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
