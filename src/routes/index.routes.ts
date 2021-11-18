import { Router } from "express";
import { deleteProd, getProducts, insertProd, updateProd } from "../controllers/productController";

const router = Router();

// Products
router.route("/api/newProduct").post(insertProd);
router.route("/api/product/:id").post(updateProd);
router.route("/api/product/:id").delete(deleteProd);
router.route("/api/products").get(getProducts);

export default router;