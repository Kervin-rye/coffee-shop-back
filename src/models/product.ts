

export interface Product {
    id: number,
    name: string,
    price: number
}

export interface Order {
    id: number,
    status: string,
    quantity: number,
    items: Item[],
}

export interface Item {
    id: number,
    productId: number,
    quantity: number
}