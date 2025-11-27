import { Container } from "@/components/layout/container"
import { CountdownTimer } from "@/components/features/cookie-lab/countdown-timer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Beaker } from "lucide-react"

export default function CookieLabPage() {
    // Set a future date for the drop (e.g., 3 days from now)
    const dropDate = new Date()
    dropDate.setDate(dropDate.getDate() + 3)

    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />

            <Container className="relative pt-20 pb-32">
                <div className="flex flex-col items-center text-center space-y-12">
                    <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm uppercase tracking-widest">
                        <Beaker className="w-4 h-4 mr-2" />
                        Experimental Batch #042
                    </Badge>

                    <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        The Midnight <br />
                        Truffle
                    </h1>

                    <p className="max-w-xl text-lg text-gray-400 leading-relaxed">
                        A dark chocolate cookie infused with black truffle oil, sea salt, and gold leaf.
                        Available for 24 hours only. Once they're gone, they're gone forever.
                    </p>

                    <div className="w-full max-w-3xl border-t border-white/10 pt-12">
                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-8">Drop Initiating In</p>
                        <CountdownTimer targetDate={dropDate} />
                    </div>

                    <div className="pt-8">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 h-auto">
                            Get Notified <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <p className="mt-4 text-xs text-gray-500">
                            Limited to 500 boxes. Join the waitlist to secure yours.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
