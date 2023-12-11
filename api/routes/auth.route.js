import express from "express";
import { handleSingIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signIn", handleSingIn);





export default router;
