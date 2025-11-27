"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/data"
import Link from "next/link"

const questions = [
    {
        id: 1,
        text: "What's your ideal Friday night?",
        options: [
            { text: "Movie marathon on the couch", type: "Classic" },
            { text: "Dinner party with friends", type: "Rich" },
            { text: "Trying a new adventure", type: "Fun" },
        ],
    },
    {
        id: 2,
        text: "Pick a flavor profile:",
        options: [
            { text: "Sweet & Nostalgic", type: "Classic" },
            { text: "Decadent & Chocolatey", type: "Rich" },
            { text: "Salty & Savory", type: "Savory" },
        ],
    },
    {
        id: 3,
        text: "Texture preference?",
        options: [
            { text: "Soft & Chewy", type: "Classic" },
            { text: "Gooey Center", type: "Rich" },
            { text: "Crunchy Bits", type: "Fun" },
        ],
    },
]

export function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<string[]>([])
    const [showResult, setShowResult] = useState(false)

    const handleAnswer = (type: string) => {
        const newAnswers = [...answers, type]
        setAnswers(newAnswers)

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResult(true)
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setAnswers([])
        setShowResult(false)
    }

    const getResult = () => {
        // Simple logic: find the most frequent type
        const counts: Record<string, number> = {}
        answers.forEach((a) => {
            counts[a] = (counts[a] || 0) + 1
        })

        // Default to Classic if tie or no clear winner
        let resultType = "Classic"
        let maxCount = 0

        Object.entries(counts).forEach(([type, count]) => {
            if (count > maxCount) {
                maxCount = count
                resultType = type
            }
        })

        // Find a product matching the type
        const product = products.find((p) => p.category === resultType) || products[0]
        return product
    }

    return (
        <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {!showResult ? (
                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-8 md:p-12 text-center">
                                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
                                    Question {currentQuestion + 1} of {questions.length}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                                    {questions[currentQuestion].text}
                                </h2>
                                <div className="grid gap-4">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="lg"
                                            className="h-auto py-4 text-lg hover:bg-primary hover:text-primary-foreground transition-all"
                                            onClick={() => handleAnswer(option.type)}
                                        >
                                            {option.text}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="border-none shadow-xl overflow-hidden">
                            <div className="bg-primary p-8 text-primary-foreground text-center">
                                <h2 className="text-3xl font-serif font-bold mb-2">Your Cookie Match Is...</h2>
                                <p className="opacity-90">Based on your personality, we think you'll love this.</p>
                            </div>
                            <CardContent className="p-8 text-center">
                                {(() => {
                                    const result = getResult()
                                    return (
                                        <div className="space-y-6">
                                            <div className="w-32 h-32 bg-secondary/30 rounded-full mx-auto flex items-center justify-center text-4xl font-serif text-muted-foreground/30">
                                                {result.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold font-serif">{result.name}</h3>
                                                <p className="text-muted-foreground mt-2">{result.description}</p>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                                <Button size="lg" asChild>
                                                    <Link href={`/product/${result.id}`}>
                                                        Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Link>
                                                </Button>
                                                <Button variant="outline" size="lg" onClick={resetQuiz}>
                                                    <RefreshCw className="mr-2 w-4 h-4" /> Retake Quiz
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                })()}
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
