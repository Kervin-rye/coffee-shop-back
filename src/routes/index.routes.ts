import { Router } from "express";
import { createOrder} from "../controllers/orderController";
import { deleteProd, getProducts, insertProd, updateProd } from "../controllers/productController";

const router = Router();

// Products
router.route("/api/newProduct").post(insertProd);
router.route("/api/product/:id").post(updateProd);
router.route("/api/product/:id").delete(deleteProd);
router.route("/api/products").get(getProducts);

// Orders
router.route("/api/newOrder").post(createOrder);


export default router;