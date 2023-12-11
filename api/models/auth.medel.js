import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "this feild is required"],
  },
  email: {
    type: String,
    required: [true, "this feild is required"],
  },
  password: {
    type: String,
    required: [true, "this feild is required"],
  },
});

export const User = mongoose.model("User", userSchema);
