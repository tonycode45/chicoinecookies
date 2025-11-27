import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/layout/container"
import { products } from "@/lib/data"

export default function Home() {
  const bestsellers = products.filter((product) => product.isBestseller)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary/30 py-20 md:py-32 lg:py-40 overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-2xl space-y-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Fresh from the oven
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif">
              Baked with Love, <br />
              Shared with Joy.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-lg">
              Experience the warmth of artisanal cookies, handcrafted with premium ingredients and a sprinkle of nostalgia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/shop">Shop All Cookies</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/build-box">Build Your Box</Link>
              </Button>
            </div>
          </div>
        </Container>
        {/* Decorative background element or placeholder for image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-serif">Fan Favorites</h2>
              <p className="text-muted-foreground mt-2">Our most loved creations.</p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link href="/shop" className="group">
                View all <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map((product) => (
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

          <div className="mt-12 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/shop">View all cookies</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Story Teaser */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-square md:aspect-[4/5] bg-primary-foreground/10 rounded-2xl overflow-hidden">
              {/* Placeholder for story image */}
              <div className="absolute inset-0 flex items-center justify-center text-primary-foreground/20 text-6xl font-serif">
                Story
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">More Than Just a Cookie</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                It started in a small kitchen with a big dream: to create the perfect cookie.
                One that brings back memories of childhood, but with a sophisticated twist.
                Every batch is made by hand, using only the finest ingredients.
              </p>
              <Button variant="secondary" size="lg" asChild className="text-primary hover:bg-primary-foreground/90">
                <Link href="/story">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 md:py-32 text-center">
        <Container className="max-w-3xl">
          <Star className="w-12 h-12 text-primary mx-auto mb-6 fill-current opacity-20" />
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Join the Cookie Club</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get exclusive access to limited drops, secret flavors, and sweet deals delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button size="lg" type="submit">Subscribe</Button>
          </form>
        </Container>
      </section>
    </div>
  )
}
