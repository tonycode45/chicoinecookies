"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const newsletterSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

export function NewsletterForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<NewsletterFormData>({
        resolver: zodResolver(newsletterSchema),
    })

    const onSubmit = async (data: NewsletterFormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log("Newsletter signup:", data)
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 3000)
        setIsSubmitting(false)
    }

    return (
        <div className="space-y-3">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex h-12 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-base placeholder:text-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50 backdrop-blur-sm"
                        {...register("email")}
                    />
                </div>
                <Button
                    size="lg"
                    variant="secondary"
                    type="submit"
                    className="h-12 px-8 whitespace-nowrap"
                    disabled={isSubmitting || isSubmitted}
                >
                    {isSubmitting ? "Subscribing..." : isSubmitted ? "Subscribed!" : "Subscribe"}
                </Button>
            </form>
            {errors.email && (
                <p className="text-sm text-primary-foreground/90 text-center bg-primary-foreground/10 py-2 px-4 rounded-md max-w-md mx-auto">
                    {errors.email.message}
                </p>
            )}
            {isSubmitted && !errors.email && (
                <p className="text-sm text-primary-foreground/90 text-center bg-primary-foreground/10 py-2 px-4 rounded-md max-w-md mx-auto">
                    Thanks for subscribing! Check your email for confirmation.
                </p>
            )}
        </div>
    )
}
