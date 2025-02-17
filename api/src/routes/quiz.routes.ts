import express, { Request, Response } from "express";
import Quiz, { IQuiz } from "../models/quiz.model";

const router = express.Router();

// Create a new quiz
router.post("/create", async (req: Request, res: Response) => {
  try {
    const {
      admin_id,
      title,
      category_id,
      passing_score,
      is_public,
      questions,
    } = req.body;

    const quiz: IQuiz = new Quiz({
      admin_id,
      title,
      category_id,
      passing_score,
      is_public,
      questions,
    });

    await quiz.save();
    res.status(201).json({ message: "Quiz created successfully!", quiz });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
