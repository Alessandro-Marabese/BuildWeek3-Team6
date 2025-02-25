import "../App.css";
import { Col, Container, Row } from "react-bootstrap";

const Competenze = () => {
  return (
    <Col>
      <Container fluid className="mx-0  mt-2 cont">
        <h5>Competenze</h5>
        <Row>
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
            <p className="text-primary">Aggiungi competenze</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mx-0 cont ">
        <div className=" d-flex flex-wrap text-center">
          <div className="p-0 mx-2">competenza1</div>
          <div className="dot-separator p-0 mx-2"></div>
          <div className="p-0 mx-2">competenza2</div>
          <div className="dot-separator p-0 mx-2"></div>
          <div className="p-0 mx-2">competenza3</div>
          <div className="dot-separator p-0 mx-2"></div>
          <div className="p-0 mx-2">competenza4</div>
          <div className="dot-separator p-0 mx-2"></div>
          <div className="p-0 mx-2">competenza5</div>
          <div className="dot-separator p-0 mx-2"></div>
          <div className="p-0 mx-2">competenza5</div>
          <div className="dot-separator p-0 mx-2"></div>
          <div className="p-0 mx-2">competenza5</div>
          <div className="dot-separator p-0 mx-2"></div>
          <div className="p-0 mx-2">competenza5</div>
          <div className="dot-separator p-0 mx-2"></div>
          <div className="p-0 mx-2">competenza5</div>
          <div className="dot-separator p-0 mx-2"></div>
        </div>
      </Container>
    </Col>
  );
};

export default Competenze;
