import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/layout/container"
import { NewsletterForm } from "@/components/features/newsletter/newsletter-form"
import { products } from "@/lib/data"

export default function Home() {
  const product = products[0] // Our single signature product

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/20 to-background pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48 overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Handcrafted Daily
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-serif leading-[1.1]">
              One Cookie,<br />
              Made Right
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Our signature Peanut Butter Oatmeal Chocolate Chip Cookie—soft, chewy, and handmade with premium ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-base h-12 px-8" asChild>
                <Link href="/order">Order Cookies</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-8" asChild>
                <Link href="/story">Our Story</Link>
              </Button>
            </div>
          </div>
        </Container>

        {/* Hero Image - Subtle Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-30 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-cookies.jpg"
              alt="Delicious cookies"
              fill
              className="object-cover rounded-full blur-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Signature Cookie Showcase */}
      <section className="py-24 md:py-32 bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="order-2 md:order-1">
                <div className="aspect-square bg-secondary/30 rounded-2xl overflow-hidden relative">
                  <div className="w-full h-full flex items-center justify-center text-8xl font-serif text-muted-foreground/20">
                    P
                  </div>
                  <Badge className="absolute top-6 left-6 bg-white/95 text-primary hover:bg-white shadow-sm backdrop-blur-sm">
                    Signature Cookie
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Handmade fresh daily
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Baked to perfection
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Soft and chewy texture
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" asChild>
                    <Link href="/order">
                      Order Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story Teaser Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/10 to-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/story-teaser.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary/30 text-primary">Our Story</Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                  Starting Simple,<br />Growing Strong
                </h2>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I started with one goal: make a cookie that feels homemade every single time. After testing batch after batch, I landed on my signature cookie. Right now, I'm keeping it simple and doing one cookie really well.
              </p>
              <Button size="lg" variant="outline" asChild className="group mt-2">
                <Link href="/story">
                  Read Our Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <Container className="max-w-3xl text-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">Join the Cookie Club</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Get exclusive access to limited drops, secret flavors, and sweet deals delivered straight to your inbox.
            </p>
            <div className="pt-4">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
