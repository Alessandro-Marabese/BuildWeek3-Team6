import "../App.css";
import { Col, Container, Row } from "react-bootstrap";

const Contatti = () => {
  return (
    <Col>
      <Container>
        <h5>Referenze</h5>
        <Row>
          <Col xs={1}>
            <svg viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="icon text-primary">
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </Col>
          <Col>
            <p className="text-primary">Chiedi una referenza</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h5>Traguardi raggiunti</h5>

        <Row>
          <Col xs={1}>
            <svg viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="icon text-primary">
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </Col>
          <Col>
            <p className="text-primary">Aggiungi traguardi raggiunti</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h5>Contatti</h5>
        <Row>
          <Col xs={1}>
            {" "}
            <svg
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="icon"
              style={{ width: "24px" }}
            >
              <path d="M2 4v13a3 3 0 003 3h14a3 3 0 003-3V4zm18 2v1.47l-8 5.33-8-5.33V6zm-1 12H5a1 1 0 01-1-1V8.67L12 14l8-5.33V17a1 1 0 01-1 1z"></path>
            </svg>
          </Col>

          <Col xs={2}>
            <p>Email</p>
          </Col>

          <Col xs={10}>
            <p className="text-primary">exemple@gmail.com</p>
          </Col>
        </Row>

        <Row>
          <Col xs={1}>
            {" "}
            <svg
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="icon"
              style={{ width: "24px" }}
            >
              <path d="M2 4v13a3 3 0 003 3h14a3 3 0 003-3V4zm18 2v1.47l-8 5.33-8-5.33V6zm-1 12H5a1 1 0 01-1-1V8.67L12 14l8-5.33V17a1 1 0 01-1 1z"></path>
            </svg>
          </Col>

          <Col xs={2}>
            <p>Linkedin</p>
          </Col>

          <Col xs={10}>
            <p className="text-primary">linkedin.com</p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Contatti;
