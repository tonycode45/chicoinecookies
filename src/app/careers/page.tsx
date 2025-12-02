import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { ArrowRight } from "lucide-react"

export default function CareersPage() {
  const positions = [
    {
      id: 1,
      title: "Head Baker",
      department: "Production",
      location: "Main Kitchen",
      type: "Full-time",
      description: "Lead our baking team in creating delicious, handcrafted cookies daily."
    },
    {
      id: 2,
      title: "Customer Experience Specialist",
      department: "Customer Service",
      location: "Remote",
      type: "Full-time",
      description: "Help spread joy by providing exceptional service to our cookie lovers."
    },
    {
      id: 3,
      title: "Social Media Manager",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time",
      description: "Share our story and engage with our community across social platforms."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-32">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-serif">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us spread sweetness and joy. We're looking for passionate people who love what they do.
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {positions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <CardDescription>{position.description}</CardDescription>
                    </div>
                    <Button asChild>
                      <Link href={`/careers/${position.id}`}>
                        Apply <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <strong>Department:</strong> {position.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <strong>Location:</strong> {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <strong>Type:</strong> {position.type}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-secondary/30 border-none">
            <CardHeader>
              <CardTitle>Why Work With Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                At Chicoine Cookies, we believe in creating a warm, supportive environment where everyone can thrive.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Competitive salary and benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Unlimited cookie samples (of course!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Flexible working arrangements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Professional development opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>A supportive, fun-loving team</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  )
}
