import "../App.css";
import { Col, Container, Row } from "react-bootstrap";

const Informazioni = () => {
  return (
    <Col>
      <Container fluid className="mx-0 mt-2 cont">
        <h5>Informazioni</h5>
        <Row>
          <Col xs={10}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet enim dolore distinctio eum sint praesentium
              eaque vel obcaecati tempora, fuga nihil porro quas ipsam nisi ea esse incidunt fugit quaerat.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mx-0 mt-2 cont">
        <h5>In primo piano</h5>
        <Row>
          <Col xs={12}>
            <p className="text-black-50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet enim dolore distinctio eum sint praesentium
              eaque vel obcaecati tempora, fuga nihil porro quas ipsam nisi ea esse incidunt fugit quaerat.
            </p>
          </Col>
          <Col xs={1}>
            <svg
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="icon text-primary i16x16"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </Col>
          <Col>
            <p className="text-primary">Aggiungi elementi in primo piano</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mx-0 mt-2 cont ">
        <h5 className="fw-light fst-italic ">Solo per te </h5>
        <Row>
          <Col xs={6}>
            <p className="text-primary">4</p>
            <p>Chi ha visitato il tuo profilo?</p>
          </Col>
          <Col xs={6}>
            <p className="text-primary">2</p>
            <p>Compari nelle ricerche</p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Informazioni;
