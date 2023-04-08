import { QuestionDto } from "./question.dto";

export interface SubCategory {
  subCategory: string;
  questions: QuestionDto[];
}
