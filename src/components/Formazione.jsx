import "../App.css";
import { Col, Container, Row, Button } from "react-bootstrap";

const Formazione = () => {
  return (
    <Col>
      <Container fluid className="mx-0  mt-2 cont">
        <h5>Formazione</h5>
        <div className="d-flex">
          <div>
            <img
              src="https://static.licdn.com/aero-v1/sc/h/7t3cbtpanuobwuck7j8t5cpti"
              alt="lavoro"
              style={{ width: "30px" }}
            />
          </div>
          <div>
            <Col xs={12}>Percorso di studi</Col>
            <div className="d-flex">
              <div className="text-center">Istituzione</div>
              <div className="dot-separator"></div>
              <div className="text-center"> Titolo </div>
            </div>
            <div>
              <div className="text-black-50"> Inzio e fine </div>
            </div>
          </div>
          <div className="icon-modifica">
            <svg
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="icon i24x24"
              style={{ width: "24px" }}
            >
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>
          </div>
        </div>
        <Row>
          <h5>Hai altri titoli di studio?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consequuntur velit quae, eius temporibus voluptate! Rerum placeat
            qui quo ratione labore rem at! Doloremque consequatur sequi iste eum
            earum. Placeat.
          </p>
          <Button variant="outline-primary"> Aggiungi titolo di studio </Button>
        </Row>
      </Container>
    </Col>
  );
};

export default Formazione;
