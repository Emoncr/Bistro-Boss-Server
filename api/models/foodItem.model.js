import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    recipe: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    category: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

export const Menu = new mongoose.model("Menu", foodItemSchema);
