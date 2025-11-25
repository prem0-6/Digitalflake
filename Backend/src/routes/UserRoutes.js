import { Router } from "express";
import Userlogin from "../controllers/Login.js";
import Userregister from "../controllers/Register.js";
import verify from "../middelware/authmiddleware.js";
import Userlogout from "../controllers/Logout.js";

const router = Router();
router.route("/register").post(Userregister);
router.route("/login").post(Userlogin);
router.route("/logout").post(verify,Userlogout);
export default router;
