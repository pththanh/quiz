import { Router } from "express";
import {
  addQuestion,
  editQuestion,
  deleteQuestion,
} from "../controllers/question";

const router = Router();

// Route to add a new question
router.post("/questions", addQuestion);

// Route to edit an existing question
router.put("/questions/:id", editQuestion);

// Route to delete a question
router.delete("/questions/:id", deleteQuestion);

export default router;
