import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getRandomUserQuestions } from "./util/util";
import { UserQuestionDto } from "./dto/user-question.dto";
import Header from "./components/Header";
import Question from "./components/Question";
import Score from "./components/Score";

function App() {
  const [allQuestions, setAllQuestions] = useState<boolean>(false);
  const [questions, setQuestions] = useState<UserQuestionDto[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    restartTest();
  }, [allQuestions]);

  const restartTest = (): void => {
    const questions = getRandomUserQuestions(allQuestions);
    setQuestions(questions);
    setQuestionIndex(0);
  };

  const userAnswer = (answer: boolean): void => {
    setQuestions((prevQuestions) => {
      prevQuestions[questionIndex].answerCorrectly = answer;
      return [...prevQuestions];
    });
    setQuestionIndex((prevIndex) => (prevIndex += 1));
  };

  const toggleTestQuestionsCount = (): void => {
    setAllQuestions((prev) => !prev);
  };

  return (
    <>
      <Header
        questionIndex={questionIndex}
        questionsTotal={questions.length}
        restartTest={restartTest}
        toggleTestQuestionsCount={toggleTestQuestionsCount}
      />
      <Container>
        {questionIndex < questions.length ? (
          <>
            <Question
              question={questions[questionIndex]}
              questionsTotal={questions.length}
              questionIndex={questionIndex}
              userAnswer={userAnswer}
            />
          </>
        ) : (
          <>
            <Score questions={questions} />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
