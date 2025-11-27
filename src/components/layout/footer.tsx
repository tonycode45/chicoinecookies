import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/layout/container"

export function Footer() {
    return (
        <footer className="border-t bg-secondary/30">
            <Container className="py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="md:col-span-2 lg:col-span-2">
                        <Link href="/" className="font-serif text-2xl font-bold text-primary">
                            Chicoine Cookies
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                            Handcrafted, premium cookies baked with love and the finest ingredients.
                            Making the world sweeter, one bite at a time.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                <Instagram className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                <Facebook className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                <Twitter className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground">Shop</h3>
                        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/shop" className="hover:text-primary">All Cookies</Link></li>
                            <li><Link href="/subscriptions" className="hover:text-primary">Subscriptions</Link></li>
                            <li><Link href="/build-box" className="hover:text-primary">Build a Box</Link></li>
                            <li><Link href="/gifts" className="hover:text-primary">Gifts</Link></li>
                            <li><Link href="/corporate" className="hover:text-primary">Corporate</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground">Company</h3>
                        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/story" className="hover:text-primary">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
                            <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms & Privacy</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-1">
                        <h3 className="text-sm font-semibold text-foreground">Stay Sweet</h3>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Subscribe for exclusive drops and sweet deals.
                        </p>
                        <form className="mt-4 flex flex-col gap-2">
                            <Input placeholder="Enter your email" type="email" className="bg-background" />
                            <Button type="submit" className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Chicoine Cookies. All rights reserved.
                </div>
            </Container>
        </footer>
    )
}
