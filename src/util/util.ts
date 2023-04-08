import { UserQuestionDto } from "../dto/user-question.dto";

import questionsCategories from "../assets/questions.json";

const TOTAL_QUESTIONS = 100;
const TEST_QUESTIONS = 10;

export const getRandomUserQuestions = (): UserQuestionDto[] => {
  // pick random question indexes
  const questionIndexes = Array.from(
    { length: TOTAL_QUESTIONS },
    (_elem, index) => index + 1
  )
    .sort(() => Math.random() - 0.5)
    .slice(0, TEST_QUESTIONS);

  // create user questions
  const userQeustions: UserQuestionDto[] = [];
  questionsCategories.forEach((category) =>
    category.subCategories.forEach((subCategory) =>
      subCategory.questions.forEach((question) => {
        if (questionIndexes.includes(question.index)) {
          userQeustions.push({
            ...question,
            subCategory: subCategory.subCategory,
            category: category.category,
          });
        }
      })
    )
  );

  return userQeustions;
};
