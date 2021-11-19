import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Product } from '../models/product';

const prisma = new PrismaClient();

// INSERT PRODUCT
export async function insertProd(req: Request, res: Response) {
    const product: Product = req.body;
    try {
        const productCreated = await prisma.product.create({
            data: {
                name: product.name,
                price: Number(product.price)
            },
        });
        return res.status(201).json({ result: productCreated })
    } catch (error) {
        return res.status(204).json({ error })
    }

}

// UPDATE PRODUCT
export async function updateProd(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const productUpdated = await prisma.product.update({
            where: {
                id: +id
            },
            data: {
                ...req.body,
                price: +req.body.price
            }
        });
        return res.status(200).send({ data: productUpdated })
    } catch (error) {
        return res.status(304).json({ error })
    }
}

// DELETE PRODUCT
export async function deleteProd(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const productDeleted = await prisma.product.delete({
            where: {
                id: +id
            }
        });
        return res.status(200).send({ data: productDeleted })
    } catch (error) {
        return res.status(204).json({ error })
    }

}

// LIST PRODUCTS
export async function getProducts(req: Request, res: Response) {
    try {
        const allProducts = await prisma.product.findMany();
        res.json({
            data: allProducts,
        });
        return res.status(200).send({ data: allProducts })
    } catch (error) {
        return res.status(204).json({ error })
    }
}







