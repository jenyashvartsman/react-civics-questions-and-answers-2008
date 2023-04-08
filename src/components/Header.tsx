import { Navbar, Container, Button } from "react-bootstrap";

interface HeaderProps {
  questionIndex: number;
  questionsTotal: number;
  restartTest: () => void;
}

const Header = ({
  questionIndex,
  questionsTotal,
  restartTest,
}: HeaderProps) => {
  return (
    <Navbar bg="light">
      <Container className="me-auto">
        <Navbar.Brand className="m-0">Civics Test</Navbar.Brand>
        <Navbar.Text>
          {questionIndex < questionsTotal ? questionIndex + 1 : questionsTotal}/
          {questionsTotal}
        </Navbar.Text>
        <Button
          variant="outline-primary"
          disabled={questionIndex === 0}
          onClick={restartTest}
        >
          Restart
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
