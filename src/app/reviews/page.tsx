import { Container } from "@/components/layout/container"
import { UGCGallery } from "@/components/features/reviews/ugc-gallery"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

export default function ReviewsPage() {
    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold font-serif mb-4">Cookie Community</h1>
                        <p className="text-muted-foreground text-lg">
                            See how our fans are enjoying their Chicoine Cookies. Tag us @ChicoineCookies to be featured!
                        </p>
                    </div>
                    <Button size="lg">
                        <Camera className="w-4 h-4 mr-2" /> Share Your Moment
                    </Button>
                </div>

                <UGCGallery />
            </Container>
        </div>
    )
}
