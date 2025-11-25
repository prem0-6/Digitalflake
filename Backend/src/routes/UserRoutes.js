import { Router } from "express";
import Userlogin from "../controllers/Login";
import Userregister from "../controllers/Register";
import verify from "../middelware/authmiddleware";
import Userlogout from "../controllers/Logout";

const router = Router();
router.route("/register").post(Userregister);
router.route("/login").post(Userlogin);
router.route("/logout").post(verify,Userlogout);
export default router;
