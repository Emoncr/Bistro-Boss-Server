import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "this feild is required"],
    },
    email: {
      type: String,
      required: [true, "this feild is required"],
      unique: true,
      index: true,
      validate: {
        validator: function (value) {
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value);
        },
        message: "Please enter a valid email address",
      },
    },
    password: {
      type: String,
      required: [true, "this feild is required"],
    },
    avatar: {
      type: String,
      default:
        "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
  },
  {
    timestamps: true,
  }
);
userSchema.index({ email: 1 }, { unique: true });

export const User = mongoose.model("User", userSchema);
