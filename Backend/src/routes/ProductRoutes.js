import { Router } from "express";
import { addProduct, deleteProduct } from "../controllers/ProductIMP.js";
import verify from "../middelware/authmiddleware.js";

const router = Router();

router.route("/add_product").post(verify, addProduct);
router.route("/delete_product/:id").delete(verify, deleteProduct);

export default router;
