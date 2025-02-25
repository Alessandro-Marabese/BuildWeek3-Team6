import "../App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences } from "../redux/actions/index";

const Esperienza = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.content._id);
  const { experiences, loading, error } = useSelector((state) => state.experiences);

  useEffect(() => {
    if (userId !== undefined) {
      dispatch(fetchExperiences(userId));
    }
  }, [dispatch, userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!experiences || experiences.length === 0) {
    return (
      <Col>
        <Container fluid className="mx-0 cont">
          <h5>Esperienza</h5>
          <p>No experiences found</p>
          <Row>
            <h5>Hai altra esperienza?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur velit quae, eius temporibus
              voluptate! Rerum placeat qui quo ratione labore rem at! Doloremque consequatur sequi iste eum earum.
              Placeat.
            </p>
            <Button variant="outline-primary"> Aggiungi Esperienza </Button>
          </Row>
        </Container>
      </Col>
    );
  }

  return (
    <Col>
      <Container fluid className="mx-0 cont">
        <h5>Esperienza</h5>
        {experiences.map((exp) => (
          <div key={exp._id} className="d-flex mb-3">
            <div>
              <img
                src={exp.image || "https://static.licdn.com/aero-v1/sc/h/7t3cbtpanuobwuck7j8t5cpti"}
                alt="lavoro"
                style={{ width: "30px" }}
              />
            </div>
            <div className="ms-3">
              <span>{exp.role}</span>
              <p>{exp.company}</p>
              <p>
                {exp.startDate} - {exp.endDate || "Presente"}
              </p>
              <p className="text-black-50">{exp.area}</p>
              <p className="text-black-50">{exp.description}</p>
            </div>
            <div className="icon-modifica ms-auto">
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
        ))}
        <Row>
          <h5>Hai altra esperienza?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur velit quae, eius temporibus
            voluptate! Rerum placeat qui quo ratione labore rem at! Doloremque consequatur sequi iste eum earum.
            Placeat.
          </p>
          <Button variant="outline-primary"> Aggiungi Esperienza </Button>
        </Row>
      </Container>
    </Col>
  );
};

export default Esperienza;
