import { QuestionDto } from "./question.dto";

export interface UserQuestionDto extends QuestionDto {
  category: string;
  subCategory: string;
  answerCorrectly?: boolean;
}
