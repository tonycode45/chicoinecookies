"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { ProductFilters } from "@/components/features/shop/product-filters"
import { ProductGrid } from "@/components/features/shop/product-grid"
import { products } from "@/lib/data"

// Extract unique categories and allergens from data
const categories = Array.from(new Set(products.map((p) => p.category)))
// For allergens, we want to filter by what is NOT in the cookie (e.g. "Gluten Free")
// But the data lists what IS in the cookie.
// So if I select "Gluten Free", I want cookies that do NOT have "Gluten" in allergens.
// The filter UI usually shows "Gluten Free", "Nut Free", etc.
const allergensList = ["Gluten", "Dairy", "Nuts", "Soy", "Eggs"]

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([])

    const handleCategoryChange = (category: string | null) => {
        setSelectedCategory(category)
    }

    const handleAllergenChange = (allergen: string) => {
        // Toggle allergen filter (e.g. "Gluten" means "Gluten Free")
        if (selectedAllergens.includes(allergen)) {
            setSelectedAllergens(selectedAllergens.filter((a) => a !== allergen))
        } else {
            setSelectedAllergens([...selectedAllergens, allergen])
        }
    }

    const handleClearFilters = () => {
        setSelectedCategory(null)
        setSelectedAllergens([])
    }

    const filteredProducts = products.filter((product) => {
        // Filter by category
        if (selectedCategory && product.category !== selectedCategory) {
            return false
        }

        // Filter by allergens (Exclusion)
        // If "Gluten" is selected in filters, we want products that DO NOT have "Gluten" in their allergens list.
        if (selectedAllergens.length > 0) {
            const hasAllergen = selectedAllergens.some((allergen) => product.allergens.includes(allergen))
            if (hasAllergen) return false
        }

        return true
    })

    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="mb-12">
                    <h1 className="text-4xl font-bold font-serif mb-4">Shop All Cookies</h1>
                    <p className="text-muted-foreground max-w-2xl">
                        Explore our collection of handcrafted cookies, from timeless classics to bold new flavors.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <aside className="lg:col-span-1">
                        <ProductFilters
                            categories={categories}
                            allergens={allergensList}
                            selectedCategory={selectedCategory}
                            selectedAllergens={selectedAllergens}
                            onCategoryChange={handleCategoryChange}
                            onAllergenChange={handleAllergenChange}
                            onClearFilters={handleClearFilters}
                        />
                    </aside>
                    <main className="lg:col-span-3">
                        <ProductGrid products={filteredProducts} />
                    </main>
                </div>
            </Container>
        </div>
    )
}
