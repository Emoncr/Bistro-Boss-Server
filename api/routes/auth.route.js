import express from "express";
import { handleGetRoute } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", handleGetRoute);

export default router;
