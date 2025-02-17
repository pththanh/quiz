import mongoose, { Schema, Document } from "mongoose";

export interface IQuiz extends Document {
  admin_id: string;
  title: string;
  category_id: string;
  passing_score: number;
  is_public: boolean;
  questions: mongoose.Types.ObjectId[];
}

const quizSchema = new Schema<IQuiz>({
  admin_id: { type: String, required: true },
  title: { type: String, required: true },
  category_id: { type: String, required: true },
  passing_score: { type: Number, required: true },
  is_public: { type: Boolean, default: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

export default mongoose.model<IQuiz>("Quiz", quizSchema);
