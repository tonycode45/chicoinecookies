import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <h1 className="text-4xl font-bold font-serif mb-6">Get in Touch</h1>
                        <p className="text-muted-foreground text-lg mb-8">
                            Have a question about your order or just want to say hi? We'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/30 rounded-lg">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">hello@chicoinecookies.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/30 rounded-lg">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">(555) 123-4567</p>
                                    <p className="text-xs text-muted-foreground">Mon-Fri, 9am - 5pm EST</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/30 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        123 Cookie Lane<br />
                                        Sweet City, SC 12345
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border rounded-xl p-8 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <Input placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <Input placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <Textarea placeholder="How can we help?" />
                            </div>
                            <Button type="submit" size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}
