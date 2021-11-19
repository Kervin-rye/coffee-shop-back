import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Order } from "../models/product";

const prisma = new PrismaClient();

// CREATE ORDER
export async function createOrder(req: Request, res: Response) {
    const { items, ...order }: Order = req.body;
    console.log(req.body)
    try {
        const orderCreated = await prisma.order.create({
            data: {
                ...order,
                items: {
                    create: items
                }
            },
            include: {
                items: true
            }
        })
        return res.status(201).json({ result: orderCreated })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
