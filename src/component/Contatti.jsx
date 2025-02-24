import "../App.css";
import { Col, Container, Row } from "react-bootstrap";

const Contatti = () => {
  return (
    <Col>
      <Container>
        <h5>Competenze</h5>
        <Row>
          <Col xs={1}>
            <svg viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="icon text-primary">
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </Col>
          <Col>
            <p className="text-primary">Aggiungi competenze</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="text-center"></Row>
      </Container>
    </Col>
  );
};

export default Contatti;
