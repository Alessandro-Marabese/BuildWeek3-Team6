import { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, deleteExperience } from "../redux/actions/index";
import ExperienceModal from "./ExperienceModal";

const Esperienza = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.content._id);
  const { experiences, loading, error } = useSelector((state) => state.experiences);
  const [modalClosed, setModalClosed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [experienceToEdit, setExperienceToEdit] = useState(null);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (userId) {
      dispatch(fetchExperiences(userId));
    }
  }, [dispatch, userId, modalClosed]);

  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 768;
      setIsMobile(isMobileNow);
      if (!isMobileNow) {
        setShowAllExperiences(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAddClick = () => {
    setExperienceToEdit(null);
    setShowModal(true);
  };

  const handleEditClick = (exp) => {
    setExperienceToEdit(exp);
    setShowModal(true);
  };

  const handleDelete = (experienceId) => {
    dispatch(deleteExperience(userId, experienceId));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const visibleExperiences = !isMobile || showAllExperiences ? experiences : experiences.slice(0, 1);

  return (
    <Col className="ps-lg-3">
      <Container fluid className="mx-0 cont mt-2 pt-3 rounded-block">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="mb-0">Esperienza</h5>
          <div className="d-flex align-items-center">
            <svg
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
              onClick={() => handleEditClick(visibleExperiences[0])}
            >
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>
          </div>
        </div>

        {visibleExperiences.map((exp) => (
          <div key={exp._id} className="d-flex">
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
                {exp.startDate.split("T")[0]} - {exp.endDate ? exp.endDate.split("T")[0] : "Presente"}
              </p>
              <p className="text-black-50">{exp.area}</p>
              <p className="text-black-50">{exp.description}</p>
            </div>
          </div>
        ))}

        {isMobile && experiences.length > 1 && !showAllExperiences && (
          <div className="d-flex">
            <Button
              variant="link"
              className="vediAltro align-self-end ms-auto p-0 d-block d-md-none"
              onClick={() => setShowAllExperiences(true)}
            >
              ...Vedi altro
            </Button>
          </div>
        )}

        <Row className="d-md-none">
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
        handleClose={() => {
          setShowModal(false);
          setTimeout(() => setModalClosed(true), 0);
        }}
        experienceToEdit={experienceToEdit}
        handleDelete={handleDelete}
      />
    </Col>
  );
};

export default Esperienza;
