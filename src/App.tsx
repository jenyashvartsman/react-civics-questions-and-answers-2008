import { useState } from "react";
import { Container } from "react-bootstrap";
import { getRandomUserQuestions } from "./util/util";
import { UserQuestionDto } from "./dto/user-question.dto";
import Header from "./components/Header";
import Question from "./components/Question";
import Score from "./components/Score";

function App() {
  const [questions, setQuestions] = useState<UserQuestionDto[]>(
    getRandomUserQuestions()
  );
  const [questionIndex, setQuestionIndex] = useState(0);

  const restartTest = (): void => {
    const questions = getRandomUserQuestions();
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

  return (
    <>
      <Header
        questionIndex={questionIndex}
        questionsTotal={questions.length}
        restartTest={restartTest}
      />
      <Container>
        {questionIndex < questions.length ? (
          <Question
            question={questions[questionIndex]}
            userAnswer={userAnswer}
          />
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
