import "../App.css";
import { Col, Container, Row } from "react-bootstrap";

const Activity = () => {
  return (
    <Col>
      <Container className="mx-0">
        <h5>Attività</h5>
        <Row>
          <Col xs={12}>
            <p className="text-black-50"> follower </p>
          </Col>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur velit quae, eius temporibus
            voluptate! Rerum placeat qui quo ratione labore rem at! Doloremque consequatur sequi iste eum earum.
            Placeat.
          </p>
          <p className="text-black-50">Hai consigliato questo elemento</p>
          <br />
        </Row>
      </Container>
    </Col>
  );
};

export default Activity;
