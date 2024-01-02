import express from "express";
import {
  createItem,
  createManyItem,
} from "../controllers/foodItem.controller.js";

const router = express.Router();

router.post("/create", createItem);
router.post("/createMany", createManyItem);

export default router;
