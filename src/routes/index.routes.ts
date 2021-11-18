import { Router } from "express";
import { deleteProd, insertProd, updateProd } from "../controllers/productController";

const router = Router();

// Products
router.route("/api/newProduct").post(insertProd);
router.route("/api/product/:id").post(updateProd);
router.route("/api/product/:id").delete(deleteProd);

export default router;