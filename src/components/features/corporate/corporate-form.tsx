"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function CorporateForm() {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Company Name</label>
                            <Input placeholder="Acme Corp" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Contact Name</label>
                            <Input placeholder="Jane Doe" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <Input type="email" placeholder="jane@acme.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>
                            <Input type="tel" placeholder="(555) 123-4567" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Event Date</label>
                            <Input type="date" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Headcount</label>
                            <Input type="number" placeholder="50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Budget</label>
                            <Input placeholder="$500" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Additional Details</label>
                        <Textarea placeholder="Tell us about your event, packaging preferences, or any dietary restrictions." />
                    </div>

                    <Button type="submit" size="lg" className="w-full">Submit Request</Button>
                </form>
            </CardContent>
        </Card>
    )
}
