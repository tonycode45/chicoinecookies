import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: string
    isBestseller: boolean
    allergens: string[]
}

interface ProductGridProps {
    products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-muted-foreground">No cookies found matching your filters.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <Card key={product.id} className="overflow-hidden group border-none shadow-none bg-transparent">
                    <div className="aspect-square relative rounded-xl bg-secondary/50 overflow-hidden mb-4">
                        {/* Placeholder for product image */}
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-4xl font-serif">
                            {product.name.charAt(0)}
                        </div>
                        {product.isBestseller && (
                            <Badge className="absolute top-4 left-4 bg-white/90 text-primary hover:bg-white shadow-sm backdrop-blur-sm">
                                Bestseller
                            </Badge>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                    <CardHeader className="p-0 mb-2">
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-lg font-serif group-hover:text-primary transition-colors">
                                <Link href={`/product/${product.id}`}>{product.name}</Link>
                            </CardTitle>
                            <span className="font-medium">${product.price.toFixed(2)}</span>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 mb-4">
                        <CardDescription className="line-clamp-2">
                            {product.description}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="p-0">
                        <Button className="w-full" variant="secondary">Add to Cart</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
