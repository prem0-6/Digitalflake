import { Router } from "express";
import { addCategory, deleteCategory, getCategories, updateCategory, changeStatus } from "../controllers/CategoryIMP.js";
import verify from "../middelware/authmiddleware.js"; // Assuming auth is needed

const router = Router();

// Route to add a new category
router.route("/add_category").post(verify, addCategory);

// Route to get all categories or filter by status (e.g. /active?status=active)
// The user asked for /active, so we can make a specific route or just use the general get
router.route("/active").get(verify, (req, res, next) => {
    req.query.status = "active";
    next();
}, getCategories);

router.route("/list").get(verify, getCategories);

// Route to update a category
router.route("/update_category/:id").put(verify, updateCategory);

// Route to delete a category
router.route("/delete_category/:id").delete(verify, deleteCategory);

// Route to change status specifically if needed
router.route("/change_status/:id").patch(verify, changeStatus);

export default router;
