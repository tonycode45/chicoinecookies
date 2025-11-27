import { notFound } from "next/navigation"
import { Star, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/layout/container"
import { ProductReviews } from "@/components/features/product/product-reviews"
import { products, reviews } from "@/lib/data"

// In a real app, this would fetch data based on the ID
// For now, we'll just find it in the mock array
// We need to generate static params for SSG if we wanted, but for now dynamic is fine.

interface ProductPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params
    const product = products.find((p) => p.id === id)

    if (!product) {
        notFound()
    }

    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    {/* Image Gallery Placeholder */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-secondary/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <div className="text-6xl font-serif text-muted-foreground/20">{product.name.charAt(0)}</div>
                            {product.isBestseller && (
                                <Badge className="absolute top-6 left-6 bg-white/90 text-primary hover:bg-white shadow-sm backdrop-blur-sm text-sm py-1 px-3">
                                    Bestseller
                                </Badge>
                            )}
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square bg-secondary/30 rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors" />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline" className="text-muted-foreground border-muted-foreground/30">
                                    {product.category}
                                </Badge>
                                <div className="flex items-center text-primary text-sm font-medium">
                                    <Star className="w-4 h-4 fill-current mr-1" />
                                    4.9 (128 reviews)
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{product.name}</h1>
                            <p className="text-2xl font-medium text-primary">${product.price.toFixed(2)}</p>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-semibold">Allergens</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.allergens.map((allergen) => (
                                    <Badge key={allergen} variant="secondary" className="bg-secondary/50">
                                        Contains {allergen}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center border rounded-md">
                                    <button className="p-3 hover:bg-secondary/50 transition-colors">
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center font-medium">1</span>
                                    <button className="p-3 hover:bg-secondary/50 transition-colors">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <Button size="lg" className="flex-1 text-base">
                                    <ShoppingBag className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </Button>
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                                Free shipping on orders over $50. Freshness guaranteed.
                            </p>
                        </div>
                    </div>
                </div>

                <ProductReviews reviews={reviews} />
            </Container>
        </div>
    )
}
