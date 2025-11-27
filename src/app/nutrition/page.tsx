import { Container } from "@/components/layout/container"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { products } from "@/lib/data"

export default function NutritionPage() {
    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold font-serif mb-6 text-center">Nutrition & Allergens</h1>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        We believe in transparency. Here's exactly what goes into our cookies.
                        Please note that all our products are made in a facility that processes nuts, dairy, eggs, and wheat.
                    </p>

                    <div className="border rounded-lg overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Cookie Name</TableHead>
                                    <TableHead>Calories</TableHead>
                                    <TableHead>Allergens</TableHead>
                                    <TableHead>Key Ingredients</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell><span className="font-medium">{product.name}</span></TableCell>
                                        <TableCell>320</TableCell>
                                        <TableCell>{product.allergens.join(", ")}</TableCell>
                                        <TableCell>Flour, Butter, Sugar, Chocolate</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    )
}
