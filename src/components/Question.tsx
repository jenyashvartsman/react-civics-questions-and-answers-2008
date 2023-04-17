import { Button, Col, Row, Card, ListGroup } from "react-bootstrap";
import { UserQuestionDto } from "../dto/user-question.dto";
import { useState } from "react";

interface QuestionProps {
  question: UserQuestionDto;
  questionsTotal: number;
  currentQuestionIndex: number;
  userAnswer: (answer: boolean) => void;
}

const Question = ({
  question,
  questionsTotal,
  currentQuestionIndex: questionIndex,
  userAnswer,
}: QuestionProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question">
      <div className="question__body">
        <Card>
          <Card.Header>
            {questionIndex + 1} / {questionsTotal}
          </Card.Header>

          {/* question */}
          <Card.Body>
            <Card.Title>{question.category}</Card.Title>
            <Card.Subtitle>{question.subCategory}</Card.Subtitle>

            <hr />

            <Card.Text>
              <h5>
                <strong>{question.index}. </strong>
                {question.question}
              </h5>
            </Card.Text>
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
                Incorrect
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={() => userAnswer(true)}>
                Correct
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
