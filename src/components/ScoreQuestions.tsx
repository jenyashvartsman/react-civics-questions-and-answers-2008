import { ListGroup } from "react-bootstrap";
import { UserQuestionDto } from "../dto/user-question.dto";

interface ScoreQuestionsProps {
  questions: UserQuestionDto[];
}

const ScoreQuestions = ({ questions }: ScoreQuestionsProps) => {
  return (
    <ListGroup>
      {questions.map((question) => (
        <ListGroup.Item
          key={question.index}
          variant={question.answerCorrectly ? "success" : "danger"}
        >
          <strong>{question.question}</strong>
          <ol>
            {question.answers.map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
          </ol>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ScoreQuestions;
