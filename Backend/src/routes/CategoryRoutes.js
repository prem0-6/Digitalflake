import { Router } from "express";
import { addCategory, deleteCategory, updateCategory, changeStatus } from "../controllers/CategoryIMP.js";
import verify from "../middelware/authmiddleware.js"; 

const router = Router();

// Route to add a new category
router.route("/add_category").post(verify, addCategory);

// Route to update a category
router.route("/update_category/:id").put(verify, updateCategory);

// Route to delete a category
router.route("/delete_category/:id").delete(verify, deleteCategory);

// Route to change status specifically if needed
router.route("/change_status/:id").patch(verify, changeStatus);

export default router;
