import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Order } from "../models/order";


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

// UPDATE ORDER
export async function updateOrder(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const orderUpdated = await prisma.order.update({
            where: {
                id: +id
            },
            data: {
                state: req.body.state
            }
        });
        return res.status(200).send({ data: orderUpdated })
    } catch (error) {
        return res.status(304).json({ error })
    }
}

// LIST ORDERS
export async function getOrders(req: Request, res: Response) {
    try {
        const allOrders = await prisma.order.findMany({
            include: {
                items: true
            }
        });
        res.json({
            data: allOrders,
            
        });
        return res.status(200).send({ data: allOrders })
    } catch (error) {
        return res.status(204).json({ error })
    }
}

