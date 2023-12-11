import express from "express";
import { handleSignUp,handleSignIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signUp", handleSignUp);
router.post("/signIn", handleSignIn);




export default router;
