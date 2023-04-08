import { Card, ListGroup } from "react-bootstrap";

interface QuestionAnswersProps {
  answers: string[];
}

const QuestionAnswers = ({ answers }: QuestionAnswersProps) => {
  return (
    <>
      <Card.Subtitle className="mb-2">Answres</Card.Subtitle>
      <ListGroup className="mb-3" as="ol" numbered>
        {answers.map((answer) => (
          <ListGroup.Item key={answer} as="li">
            {answer}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default QuestionAnswers;
