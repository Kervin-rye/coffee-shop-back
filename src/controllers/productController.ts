import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Product } from '../models/product';

const prisma = new PrismaClient();

// INSERT PRODUCT
export async function insertProd(req: Request, res: Response) {
    const product: Product = req.body;
    try {
        const insertProd = await prisma.product.create({
            data: {
                name: product.name,
                price: Number(product.price)
            },
        });
        console.log(insertProd)
    } catch (error) {
        console.log(error)
    }
    return res.status(200).json({ result: true })

}

// UPDATE PRODUCT
export async function updateProd(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const updateProd = await prisma.product.update({
            where: {
                id: +id
            },
            data: {
                ...req.body,
                price: +req.body.price
            }
        });
        return res.status(200).send({ data: updateProd })
    } catch (error) {
        console.log(error)
    }
}

// DELETE PRODUCT
export async function deleteProd(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const deleteProd = await prisma.product.delete({
            where: {
                id: +id
            }
        });
        return res.status(200).send({ data: deleteProd })
    } catch (error) {
        console.log(error)
    }

}

// LIST PRODUCTS
export async function getProducts(req: Request, res: Response) {
    const allProducts = await prisma.product.findMany();
    res.json({
        data: allProducts,
    });
}







