"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProductFiltersProps {
    categories: string[]
    allergens: string[]
    selectedCategory: string | null
    selectedAllergens: string[]
    onCategoryChange: (category: string | null) => void
    onAllergenChange: (allergen: string) => void
    onClearFilters: () => void
}

export function ProductFilters({
    categories,
    allergens,
    selectedCategory,
    selectedAllergens,
    onCategoryChange,
    onAllergenChange,
    onClearFilters,
}: ProductFiltersProps) {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                    <button
                        onClick={() => onCategoryChange(null)}
                        className={cn(
                            "block text-sm transition-colors hover:text-primary",
                            selectedCategory === null ? "font-bold text-primary" : "text-muted-foreground"
                        )}
                    >
                        All Cookies
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={cn(
                                "block text-sm transition-colors hover:text-primary",
                                selectedCategory === category ? "font-bold text-primary" : "text-muted-foreground"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Dietary & Allergens</h3>
                <div className="space-y-2">
                    {allergens.map((allergen) => {
                        const isSelected = selectedAllergens.includes(allergen)
                        return (
                            <div key={allergen} className="flex items-center space-x-2">
                                <button
                                    onClick={() => onAllergenChange(allergen)}
                                    className={cn(
                                        "flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                        isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                    )}
                                >
                                    <Check className={cn("h-3 w-3")} />
                                </button>
                                <span className="text-sm text-muted-foreground">{allergen} Free</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            {(selectedCategory || selectedAllergens.length > 0) && (
                <Button variant="ghost" onClick={onClearFilters} className="w-full justify-start px-0 text-muted-foreground hover:text-primary">
                    Clear all filters
                </Button>
            )}
        </div>
    )
}
