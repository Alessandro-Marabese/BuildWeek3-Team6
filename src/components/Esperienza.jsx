import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, addExperience, updateExperience, deleteExperience } from "../redux/actions/index";
import ExperienceModal from "./ExperienceModal";

const Esperienza = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.content._id);
  const { experiences, loading, error } = useSelector((state) => state.experiences);

  const [showModal, setShowModal] = useState(false);
  const [experienceToEdit, setExperienceToEdit] = useState(null);

  useEffect(() => {
    if (userId !== undefined) {
      dispatch(fetchExperiences(userId));
    }
  }, [dispatch, userId]);

  const handleAddClick = () => {
    setExperienceToEdit(null);
    setShowModal(true);
  };

  const handleEditClick = (exp) => {
    setExperienceToEdit(exp);
    setShowModal(true);
  };

  const handleSubmit = (formData) => {
    if (experienceToEdit) {
      dispatch(updateExperience(userId, experienceToEdit._id, formData));
    } else {
      dispatch(addExperience(userId, formData));
    }
  };

  const handleDelete = (experienceId) => {
    dispatch(deleteExperience(userId, experienceId));
  };

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
            <Button variant="outline-primary" onClick={handleAddClick}>
              Aggiungi Esperienza
            </Button>
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
                onClick={() => handleEditClick(exp)}
              >
                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="icon i24x24"
                style={{ width: "24px" }}
                onClick={() => handleDelete(exp._id)}
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
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
          <Button variant="outline-primary" onClick={handleAddClick}>
            Aggiungi Esperienza
          </Button>
        </Row>
      </Container>

      <ExperienceModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSubmit={handleSubmit}
        experienceToEdit={experienceToEdit}
      />
    </Col>
  );
};

export default Esperienza;
