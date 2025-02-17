import mongoose, { Schema, Document } from "mongoose";

export interface IUserAnswer extends Document {
  user_id: string;
  quiz_id: mongoose.Types.ObjectId;
  answers: {
    question_id: mongoose.Types.ObjectId;
    selected_answers: string[]; // Array of selected answer texts
  }[];
}

const userAnswerSchema = new Schema<IUserAnswer>(
  {
    user_id: { type: String, required: true },
    quiz_id: { type: Schema.Types.ObjectId, ref: "Quiz", required: true },
    answers: [
      {
        question_id: {
          type: Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        selected_answers: { type: [String], required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IUserAnswer>("UserAnswer", userAnswerSchema);
