export const products = [
    {
        id: "pb-oatmeal-choco-chip",
        name: "Peanut Butter Oatmeal Chocolate Chip Cookie",
        description: "Our signature cookie—soft, chewy, and packed with flavor. Handmade with creamy peanut butter, hearty oats, and premium chocolate chips.",
        price: 4.50,
        image: "/images/pb-oatmeal-choco.jpg",
        category: "Signature",
        isBestseller: true,
        allergens: ["Gluten", "Dairy", "Eggs", "Peanuts"],
    },
]

// Box size pricing configuration
export const boxPricing = {
    3: 12.00,   // Placeholder - update with actual pricing
    4: 16.00,   // Placeholder - update with actual pricing
    6: 24.00,
    12: 45.00,
}

export const reviews = [
    {
        id: "1",
        user: "Sarah J.",
        rating: 5,
        comment: "The best cookies I've ever had! The sea salt on the chocolate chip is a game changer.",
        date: "2023-10-15",
    },
    {
        id: "2",
        user: "Mike T.",
        rating: 5,
        comment: "Ordered a box for my office and they were gone in minutes. Highly recommend!",
        date: "2023-11-02",
    },
    {
        id: "3",
        user: "Emily R.",
        rating: 4,
        comment: "Delicious, but I wish they had more gluten-free options.",
        date: "2023-11-20",
    },
]
