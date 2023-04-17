import { Alert, Image } from "react-bootstrap";
import { UserQuestionDto } from "../dto/user-question.dto";
import testScore1 from "./../assets/test-score-1.gif";
import testScore2 from "./../assets/test-score-2.jpg";
import testScore3 from "./../assets/test-score-3.jpg";

interface ScoreProps {
  questions: UserQuestionDto[];
}

const Score = ({ questions }: ScoreProps) => {
  const getScoreImage = () => {
    const score =
      questions.filter((question) => question.answerCorrectly).length /
      questions.length;

    if (score >= 0.8) {
      return testScore1;
    } else if (score >= 0.6) {
      return testScore2;
    } else {
      return testScore3;
    }
  };

  return (
    <div className="score">
      <div className="score__header">
        <h5>
          Correct answers:{" "}
          {questions.filter((question) => question.answerCorrectly).length} /{" "}
          {questions.length}
        </h5>
      </div>

      <div className="score__body">
        <p>You should get at lease 6 correct answers</p>
        <Image src={getScoreImage()} className="mb-3" width={"100%"} />

        {questions.map((question) => (
          <Alert
            key={question.index}
            variant={question.answerCorrectly ? "success" : "danger"}
          >
            <Alert.Heading>
              {question.index}. {question.question}
            </Alert.Heading>
            <hr />
            {question.answers.map((answer) => (
              <p key={answer}>{answer}</p>
            ))}
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default Score;
