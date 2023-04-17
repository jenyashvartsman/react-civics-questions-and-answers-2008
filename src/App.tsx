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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    restartTest();
  }, [allQuestions]);

  const restartTest = (): void => {
    const questions = getRandomUserQuestions(allQuestions);
    setQuestions(questions);
    setCurrentQuestionIndex(0);
  };

  const userAnswer = (answer: boolean): void => {
    setQuestions((prevQuestions) => {
      prevQuestions[currentQuestionIndex].answerCorrectly = answer;
      return [...prevQuestions];
    });
    setCurrentQuestionIndex((prevIndex) => (prevIndex += 1));
  };

  const toggleTestQuestionsCount = (): void => {
    setAllQuestions((prev) => !prev);
  };

  return (
    <>
      <Header
        questionIndex={currentQuestionIndex}
        questionsTotal={questions.length}
        restartTest={restartTest}
        toggleTestQuestionsCount={toggleTestQuestionsCount}
      />
      <Container>
        {currentQuestionIndex < questions.length ? (
          questions.map(
            (question, index) =>
              currentQuestionIndex === index && (
                <Question
                  key={index}
                  question={question}
                  questionsTotal={questions.length}
                  currentQuestionIndex={currentQuestionIndex}
                  userAnswer={userAnswer}
                />
              )
          )
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
