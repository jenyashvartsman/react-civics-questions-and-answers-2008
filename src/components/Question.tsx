import { Button, Col, Row, Card, ListGroup } from "react-bootstrap";
import { UserQuestionDto } from "../dto/user-question.dto";
import { useEffect, useState } from "react";

interface QuestionProps {
  question: UserQuestionDto;
  questionsTotal: number;
  questionIndex: number;
  userAnswer: (answer: boolean) => void;
}

const Question = ({
  question,
  questionsTotal,
  questionIndex,
  userAnswer,
}: QuestionProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  return (
    <div className="question">
      <div className="question__body">
        <Card>
          <Card.Header>
            {questionIndex + 1} / {questionsTotal}
          </Card.Header>

          {/* question */}
          <Card.Body>
            <Card.Title>
              {question.category} - {question.subCategory}
            </Card.Title>
            <Card.Text>{question.question}</Card.Text>
          </Card.Body>

          {/* answers */}
          {showAnswer ? (
            <ListGroup className="list-group-flush">
              {question.answers.map((answer) => (
                <ListGroup.Item key={answer}>{answer}</ListGroup.Item>
              ))}
            </ListGroup>
          ) : null}

          {/* images */}
          {showAnswer
            ? question.images?.map((image) => (
                <Card.Img key={image} variant="bottom" src={image} />
              ))
            : null}
        </Card>
      </div>

      <div className="question__footer">
        {showAnswer ? (
          <Row>
            <Col>
              <Button variant="danger" onClick={() => userAnswer(false)}>
                Wrong
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={() => userAnswer(true)}>
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
