import bcrypt from "bcrypt";
import { User } from "../models/auth.model.js";
import { throwError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const handleSignUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ name, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("Sign up successfull");
  } catch (error) {
    next(error);
  }
};

export const handleSignIn = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return next(throwError(404, "User not found"));
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      user["password"]
    );
    if (!checkPassword) return next(throwError(401, "Wrong credentials"));

    const tooken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "720h",
    });

    const { password, ...rest } = user._doc;

    res.cookie("access_token", tooken).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
