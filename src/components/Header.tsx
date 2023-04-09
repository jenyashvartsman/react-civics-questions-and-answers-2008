import { Navbar, Container, Button, Stack } from "react-bootstrap";

interface HeaderProps {
  questionIndex: number;
  questionsTotal: number;
  restartTest: () => void;
  toggleTestQuestionsCount: () => void;
}

const Header = ({
  questionIndex,
  questionsTotal,
  restartTest,
  toggleTestQuestionsCount,
}: HeaderProps) => {
  return (
    <Navbar bg="light">
      <Container className="me-auto">
        {/* title */}
        <Navbar.Brand className="m-0">Civics Test</Navbar.Brand>

        {/* actions */}
        <Stack direction="horizontal" gap={3}>
          <Button
            className="mr-2"
            variant="outline-secondary"
            onClick={toggleTestQuestionsCount}
          >
            {questionsTotal} questions
          </Button>

          <Button
            variant="outline-primary"
            disabled={questionIndex === 0}
            onClick={restartTest}
          >
            Restart
          </Button>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default Header;
