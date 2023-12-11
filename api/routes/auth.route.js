import express from "express";
import { handleSingIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signUp", handleSingIn);
router.post("/signIn", handleSingIn);




export default router;
