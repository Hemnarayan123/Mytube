import { Router } from "express";
import { registerUser } from "../controllerse/user.controllerse.js";


const router = Router()

router.route("/register").post(registerUser)


export default router