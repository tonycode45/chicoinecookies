import Link from "next/link"
import Image from "next/image"
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
              Handcrafted in Canada 🍁
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif">
              Cookies Crafted to <br />
              Warm the Soul.
            </h1>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground md:text-xl max-w-lg font-medium">
                Freshly baked with premium ingredients & real love.
              </p>
              <p className="text-base text-muted-foreground/80 max-w-lg">
                Every cookie is handcrafted in small batches using the finest ingredients. From rich Belgian chocolate to locally sourced butter, we never compromise on quality.
              </p>
            </div>
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
        {/* Hero Image with gradient shadow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] -z-10">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-cookies.jpg"
              alt="Premium handcrafted cookies"
              fill
              className="object-cover rounded-full"
              priority
            />
            {/* Soft gradient overlay on the right */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-transparent to-background/40" />
            {/* Subtle shadow */}
            <div className="absolute inset-0 rounded-full shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Best Sellers Quick View */}
      <section className="py-16 md:py-20 bg-background border-y">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif mb-2">Bestsellers</h2>
            <p className="text-muted-foreground">The cookies everyone can't stop talking about</p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            <div className="flex md:grid md:grid-cols-4 gap-6 min-w-max md:min-w-0">
              <div className="flex-shrink-0 w-[280px] md:w-auto group cursor-pointer">
                <Link href="/product/1">
                  <div className="aspect-square relative rounded-lg overflow-hidden mb-3 bg-secondary/30">
                    <Image
                      src="/images/classic-chip.jpg"
                      alt="Chocolate Chunk"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">The Classic Chip</h3>
                  <p className="text-sm text-muted-foreground mt-1">Rich chocolate chunks</p>
                </Link>
              </div>

              <div className="flex-shrink-0 w-[280px] md:w-auto group cursor-pointer">
                <Link href="/product/2">
                  <div className="aspect-square relative rounded-lg overflow-hidden mb-3 bg-secondary/30">
                    <Image
                      src="/images/double-chocolate.jpg"
                      alt="White Chocolate Macadamia"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Midnight Double Chocolate</h3>
                  <p className="text-sm text-muted-foreground mt-1">Dark chocolate perfection</p>
                </Link>
              </div>

              <div className="flex-shrink-0 w-[280px] md:w-auto group cursor-pointer">
                <Link href="/product/4">
                  <div className="aspect-square relative rounded-lg overflow-hidden mb-3 bg-secondary/30">
                    <Image
                      src="/images/birthday-cake.jpg"
                      alt="Birthday Cake"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Birthday Cake</h3>
                  <p className="text-sm text-muted-foreground mt-1">Rainbow sprinkles & vanilla</p>
                </Link>
              </div>

              <div className="flex-shrink-0 w-[280px] md:w-auto group cursor-pointer">
                <Link href="/product/5">
                  <div className="aspect-square relative rounded-lg overflow-hidden mb-3 bg-secondary/30">
                    <Image
                      src="/images/salted-caramel.jpg"
                      alt="Salted Caramel Chip"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Salted Caramel Pretzel</h3>
                  <p className="text-sm text-muted-foreground mt-1">Sweet meets salty</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator for mobile */}
          <div className="md:hidden text-center mt-6">
            <p className="text-xs text-muted-foreground">Swipe to see more →</p>
          </div>
        </Container>
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
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isBestseller && (
                    <Badge className="absolute top-4 left-4 bg-white/90 text-primary hover:bg-white shadow-sm backdrop-blur-sm z-10">
                      Bestseller
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
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

      {/* About Us Preview */}
      <section className="py-24">
        <Container className="max-w-4xl">
          <Card className="border-2 hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer">
            <Link href="/story">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative rounded-full bg-secondary/50 overflow-hidden">
                    <Image
                      src="/images/story-teaser.jpg"
                      alt="Our Story"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold font-serif group-hover:text-primary transition-colors">
                      The Story Behind Chicoine Cookies
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      From a family recipe to your doorstep. Discover how our passion for baking turned into a Canadian cookie legacy.
                    </p>
                    <div className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        </Container>
      </section>

      {/* Story Teaser */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-square md:aspect-[4/5] bg-primary-foreground/10 rounded-2xl overflow-hidden">
              <Image
                src="/images/story-teaser.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
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
