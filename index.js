import express from "express";
import authRouter from "./api/routes/auth.route.js";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";

// ===== Initializing  app here =====//
const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT;

// ======= Connect to DB =======//
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
connectDB();

//===== Routes Part
app.use("/api/", authRouter);

//============== Handling Error Middleware =========//
app.use((err, req, res, next) => {
  const statusCodde = err.status || 500;
  const errMessage = err.message || "Internal Server Error";

  return res.status(statusCodde).json({
    success: false,
    statusCode: statusCodde,
    message: errMessage,
  });
});

app.listen(port, () => {
  console.log("app is listing in port 3000");
});
