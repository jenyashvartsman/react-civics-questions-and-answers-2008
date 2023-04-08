import { Button, Col, Row } from "react-bootstrap";
import { UserQuestionDto } from "../dto/user-question.dto";
import QuestionAnswers from "./QuestionAnswers";
import QuestionImages from "./QuestionImages";
import { useEffect, useState } from "react";

interface QuestionProps {
  question: UserQuestionDto;
  userAnswer: (answer: boolean) => void;
}

const Question = ({ question, userAnswer }: QuestionProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const nextQuestion = (answer: boolean): void => {
    userAnswer(answer);
  };

  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  return (
    <div className="question">
      <div className="question__header">
        <h5>{question.category}</h5>
        <h5>{question.subCategory}</h5>
      </div>

      <div className="question__body">
        <p className="mt-3">
          <strong>{question.question}</strong>
        </p>

        {showAnswer ? (
          <>
            <QuestionAnswers answers={question.answers} />
            <QuestionImages images={question?.images || []} />
          </>
        ) : null}
      </div>

      <div className="question__footer">
        {showAnswer ? (
          <Row>
            <Col>
              <Button variant="danger" onClick={() => nextQuestion(false)}>
                Wrong
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={() => nextQuestion(true)}>
                Right
              </Button>
            </Col>
          </Row>
        ) : (
          <Button variant="primary" onClick={() => setShowAnswer(true)}>
            Show Answer
          </Button>
        )}
      </div>
    </div>
  );
};

export default Question;
