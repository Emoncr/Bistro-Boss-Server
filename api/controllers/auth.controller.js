import bcrypt from "bcrypt";
import { User } from "../models/auth.model.js";

export const handleSingIn = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  console.log("haspass", hashPassword);
  const newUser = new User({ name, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("Sign up successfull");
  } catch (error) {
    next(error);
  }
};
