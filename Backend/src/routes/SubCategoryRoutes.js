import { Router } from "express";
import { addSubCategory, deleteSubCategory } from "../controllers/SubCategoryIMP.js";
import verify from "../middelware/authmiddleware.js";

const router = Router();

router.route("/add_subcategory").post(verify, addSubCategory);
router.route("/delete_subcategory/:id").delete(verify, deleteSubCategory);

export default router;
