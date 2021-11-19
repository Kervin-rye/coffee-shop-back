import { Item } from "@prisma/client";

export interface Order {
    id: number,
    state: string,
    quantity: number,
    user: string,
    createAt: Date,
    updatedAt: Date,
    items: Item[],
}