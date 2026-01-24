export interface OrderItem {
    productId: number
    quantity: number
    price: number
}

export interface Order {
    id: number
    userId: number
    items: OrderItem[]
    total: number
    status: "pending" | "paid" | "shipped"
    createdAt: string
}