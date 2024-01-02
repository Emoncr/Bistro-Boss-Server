import { Menu } from "../models/foodItem.model.js";

export const createItem = async (req, res, next) => {
  try {
    const newItem = new Menu(req.body);
    await newItem.save();
    res.status(201).json("Item created successfully");
  } catch (error) {
    next(error);
  }
};

export const createManyItem = async (req, res, next) => {
  try {
    const insertedItem = await Menu.insertMany(req.body);
    res.status(201).json({
      status: "Item created successfully",
      items: insertedItem,
    });
  } catch (error) {
    next(error);
  }
};
