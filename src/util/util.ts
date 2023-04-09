import { UserQuestionDto } from "../dto/user-question.dto";

import questionsCategories from "../assets/questions.json";

const TOTAL_QUESTIONS = 100;
const TEST_QUESTIONS = 10;

// todo - need to improve this method
export const getRandomUserQuestions = (
  allQuestions: boolean
): UserQuestionDto[] => {
  const userQeustions: UserQuestionDto[] = [];
  questionsCategories.forEach((category) =>
    category.subCategories.forEach((subCategory) =>
      subCategory.questions.forEach((question) => {
        userQeustions.push({
          ...question,
          subCategory: subCategory.subCategory,
          category: category.category,
        });
      })
    )
  );

  userQeustions.sort(() => Math.random() - 0.5);

  return allQuestions ? userQeustions : userQeustions.slice(0, TEST_QUESTIONS);
};
