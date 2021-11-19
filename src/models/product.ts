

export interface Product {
    id: number,
    name: string,
    image: string,
    price: number
}

export interface Order {
    id: number,
    state: string,
    quantity: number,
    user: string,
    createAt: Date,
    updatedAt: Date,
    items: Item[],
}

export interface Item {
    id: number,
    productId: number,
    quantity: number
}