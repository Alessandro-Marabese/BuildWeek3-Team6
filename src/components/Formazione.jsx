import "../App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import Uni from "../assets/uni.png";

const Formazione = () => {
  const handleAddClick = () => {
    console.log("Aggiungi titolo di studio");
  };

  const handleEditClick = () => {
    console.log("Modifica titolo di studio");
  };

  return (
    <Col className="ps-lg-3">
      <Container fluid className="mx-0 mt-2 cont pt-3 rounded-block">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="mb-0">Formazione</h5>
          <div className="d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="icon i24x24 me-2 d-none d-md-block"
              style={{ width: "24px", cursor: "pointer" }}
              onClick={handleAddClick}
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="icon i24x24"
              style={{ width: "24px", cursor: "pointer" }}
              onClick={handleEditClick}
            >
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>
          </div>
        </div>

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
              <div className="text-center">Titolo</div>
            </div>
            <div>
              <div className="text-black-50">Inizio e fine</div>
            </div>
          </div>
        </div>

        <Row className="d-md-none border-top px-3">
          <img src={Uni} alt="foto" className="icona-profile mt-3" />
          <h5 className="text-center">Hai altri titoli di studio?</h5>
          <p className="text-center text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur
          </p>
          <Button variant="outline-primary" className=" px-0 rounded-pill mb-3" onClick={handleAddClick}>
            Aggiungi titolo di studio
          </Button>
        </Row>
      </Container>
    </Col>
  );
};

export default Formazione;
