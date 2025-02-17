import mongoose, { Schema, Document } from "mongoose";
import { ICategory } from "./category.model";

export interface IAnswer {
  answer: string;
  isCorrect: boolean;
}

export interface IQuestion extends Document {
  title: string;
  answers: IAnswer[];
  category: mongoose.Types.ObjectId | ICategory;
}

const questionSchema = new Schema<IQuestion>({
  title: { type: String, required: true },
  answers: [
    {
      answer: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
  category: { type: Schema.Types.ObjectId, ref: "Category", required: false },
});

export default mongoose.model<IQuestion>("Question", questionSchema);
