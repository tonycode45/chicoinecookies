"use client"

import Link from "next/link"
import { ShoppingBag, User, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Subscriptions", href: "/subscriptions" },
    { name: "Build a Box", href: "/build-box" },
    { name: "Gifts", href: "/gifts" },
    { name: "Our Story", href: "/story" },
]

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 -ml-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Logo */}
                    <div className="flex lg:flex-1">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                                Chicoine Cookies
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:gap-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex flex-1 items-center justify-end gap-x-4">
                        <Button variant="ghost" size="icon" className="hidden sm:flex">
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>
                        <ThemeToggle />
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                0
                            </span>
                            <span className="sr-only">Cart</span>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t py-4">
                        <nav className="flex flex-col gap-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-muted-foreground hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    )
}
