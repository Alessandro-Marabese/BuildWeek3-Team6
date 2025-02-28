import { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, deleteExperience } from "../redux/actions/index";
import ExperienceModal from "./ExperienceModal";
import Valigia from "../assets/valigia.png";

const Esperienza = ({ userId }) => {
  const dispatch = useDispatch();
  const myUserId = useSelector((state) => state.profile.content._id);
  const { experiences, loading, error } = useSelector((state) => state.experiences);
  const [modalClosed, setModalClosed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [experienceToEdit, setExperienceToEdit] = useState(null);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showAddExperienceRow, setShowAddExperienceRow] = useState(true);
  const [isMyProfile, setIsMyProfile] = useState(true);

  console.log(isMyProfile);
  useEffect(() => {
    if (userId) {
      dispatch(fetchExperiences(userId));
    }
    if (userId !== myUserId) {
      setIsMyProfile(false);
    } else {
      setIsMyProfile(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {!isMobile && (
            <>
              {isMyProfile && (
                <svg
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="icon i24x24 me-2"
                  style={{ width: "24px", cursor: "pointer" }}
                  onClick={handleAddClick}
                >
                  <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                </svg>
              )}
            </>
          )}
        </div>

        {isMobile && !showAddExperienceRow && isMyProfile && (
          <Button
            variant="link"
            className="p-0 text-decoration-none mb-3"
            onClick={handleAddClick}
            style={{ fontSize: "0.9rem", fontWeight: "500" }}
          >
            + Aggiungi Esperienza
          </Button>
        )}

        {visibleExperiences.map((exp) => (
          <div key={exp._id} className="d-flex align-items-start">
            <div>
              <img
                src={exp.image || "https://static.licdn.com/aero-v1/sc/h/7t3cbtpanuobwuck7j8t5cpti"}
                alt="lavoro"
                style={{ width: "30px" }}
              />
            </div>
            <div className="ms-3 flex-grow-1">
              <span>{exp.role}</span>
              <p>{exp.company}</p>
              <p>
                {exp.startDate.split("T")[0]} - {exp.endDate ? exp.endDate.split("T")[0] : "Presente"}
              </p>
              <p className="text-black-50">{exp.area}</p>
              <p className="text-black-50">{exp.description}</p>
            </div>
            <div className="ms-auto">
              {isMyProfile && (
                <svg
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="icon i24x24"
                  style={{ width: "24px", cursor: "pointer" }}
                  onClick={() => handleEditClick(exp)}
                >
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                </svg>
              )}
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

        {showAddExperienceRow && isMyProfile && (
          <Row className="d-md-none border-top px-3 position-relative">
            <img src={Valigia} alt="foto" className="icona-profile mt-3" />
            <h5 className="text-center">Hai altra esperienza?</h5>
            <p className="text-center text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur
            </p>
            <Button variant="outline-primary" onClick={handleAddClick} className="px-0 rounded-pill w-100 mb-3">
              Aggiungi Esperienza
            </Button>

            <svg
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="icon icon-x"
              style={{
                width: "24px",
                cursor: "pointer",
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                color: "black",
              }}
              onClick={() => setShowAddExperienceRow(false)}
            >
              <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
            </svg>
          </Row>
        )}
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
