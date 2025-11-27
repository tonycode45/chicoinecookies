"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineItem {
    year: string
    title: string
    description: string
    image?: string
}

interface TimelineProps {
    items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative container mx-auto px-4 py-12">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 md:space-y-24">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={cn(
                            "relative flex flex-col md:flex-row gap-8 md:gap-0",
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        )}
                    >
                        {/* Content */}
                        <div className="md:w-1/2 md:px-12">
                            <div className={cn(
                                "bg-card p-6 rounded-xl border shadow-sm",
                                index % 2 === 0 ? "md:text-left" : "md:text-right"
                            )}>
                                <span className="text-primary font-bold text-xl block mb-2">{item.year}</span>
                                <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block" />

                        {/* Empty Space for alignment */}
                        <div className="md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
