import { Request, Response } from "express";
import Question, { IQuestion } from "../../models/question.model";
import { ErrorResponse, ResponseData } from "../../types/types";

// Add a new question
export async function addQuestion(
  req: Request,
  res: Response<ResponseData<IQuestion> | ErrorResponse>
): Promise<void> {
  try {
    const question = new Question(req.body);
    const savedQuestion = await question.save();
    res.status(201).json({
      success: true,
      data: savedQuestion,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Failed to create question",
    });
  }
}

// Edit an existing question
export async function editQuestion(
  req: Request,
  res: Response<ResponseData<IQuestion> | ErrorResponse>
): Promise<void> {
  try {
    const { id } = req.params;
    const { body } = req.body;
    const updatedQuestion = await Question.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedQuestion) {
      res.status(404).json({
        success: false,
        error: "Question not found",
      });
    } else {
      res.json({
        success: true,
        data: updatedQuestion,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Failed to update question",
    });
  }
}

// Delete a question
export async function deleteQuestion(
  req: Request,
  res: Response<ResponseData<IQuestion> | ErrorResponse>
): Promise<void> {
  try {
    const { id } = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(id);

    if (!deletedQuestion) {
      res.status(404).json({
        success: false,
        error: "Question not found",
      });
    } else {
      res.json({
        success: true,
        data: deletedQuestion,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Failed to delete question",
    });
  }
}
