import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import quizRoutes from "./routes/quiz.routes";
import questionRoutes from "./routes/question.routes";
import categoryRoutes from "./routes/category.routes";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/api/quizzes", quizRoutes);
app.use("/api/", questionRoutes);
app.use("/api", categoryRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
