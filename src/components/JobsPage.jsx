import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actions/jobsActions";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

import "../style/JobPage.css";

const JobsPage = () => {
  const dispatch = useDispatch();
  const { jobsList, isLoading, hasError } = useSelector((state) => state.jobs);
  const userProfile = useSelector((state) => state.profile.content);

  const [visibleJobs, setVisibleJobs] = useState(5);
  const [hasClickedShowMore, setHasClickedShowMore] = useState(false);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (isLoading) return <p className="text-center mt-5"> Caricamento offerte di lavoro...</p>;

  if (hasError) return <p className="text-center text-danger"> Errore nel caricamento: {hasError}</p>;

  return (
    <Container fluid id="top-margin" className="jobs-container px-0 ps-lg-3 container-lg pt-lg-4">
      <Row>
        <Col md={4} className="left-column">
          <Card className="mb-3 profile-card-job">
            <Card.Img
              variant="top"
              src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq"
              className="profile-cover"
            />
            <div className="profile-avatar">
              <Image
                src={userProfile?.image || "https://via.placeholder.com/150"}
                alt="Profile"
                roundedCircle
                width={80}
              />
            </div>
            <Card.Body className="text-center">
              <h5>
                {userProfile?.name} {userProfile?.surname}
              </h5>
              <p>{userProfile?.title}</p>
              <p>{userProfile?.area}</p>
            </Card.Body>
          </Card>

          <Card className="mb-3 preferences-card">
            <Card.Body>
              <h6>
                <i className="bi bi-list-ul me-2"></i> Preferenze
              </h6>
              <h6 className="mt-3">
                <i className="bi bi-bookmark-fill text-dark me-2"></i> Le mie offerte di lavoro
              </h6>
              <h6>
                <i className="bi bi-file-earmark-text-fill text-warning me-2"></i> Le mie informazioni sulla carriera
              </h6>
              <hr />
              <h6 className="publish-offer">
                <i className="bi bi-pencil-square me-2"></i> Pubblica offerta gratuita
              </h6>
            </Card.Body>
          </Card>

          <Card className="mb-3 footer-card">
            <Card.Body>
              <div className="footer-container">
                <div className="footer-links">
                  <div className="footer-row">
                    <a href="#">Informazioni</a> <span>·</span> <a href="#">Accessibilità</a>
                  </div>
                  <div className="footer-row">
                    <a href="#">Centro assistenza</a>
                  </div>
                  <div className="footer-row">
                    <a href="#">Privacy e condizioni</a>
                  </div>
                  <div className="footer-row">
                    <a href="#">Opzioni per gli annunci pubblicitari</a>
                  </div>
                  <div className="footer-row">
                    <a href="#">Pubblicità</a> <span>·</span> <a href="#">Servizi alle aziende</a>
                  </div>
                  <div className="footer-row">
                    <a href="#">Scarica l’app LinkedIn</a> <span>·</span> <a href="#">Altro</a>
                  </div>
                </div>
                <div className="footer-copy">
                  <i className="bi bi-linkedin"></i> LinkedIn Corporation © {new Date().getFullYear()}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8} className="right-column">
          <Card className="mb-3 suggested-jobs-card">
            <Card.Body>
              <h6>
                <strong>Ricerche di offerte di lavoro suggerite</strong>
              </h6>
              <div className="job-search-buttons">
                <Button className="connect-button3">
                  <i className="bi bi-search search-icon"></i> Web Developer
                </Button>
                <Button className="connect-button3">
                  <i className="bi bi-search search-icon"></i> Junior Web Developer
                </Button>
                <Button className="connect-button3">
                  <i className="bi bi-search search-icon"></i> Lead Web Developer
                </Button>
                <Button className="connect-button3">
                  <i className="bi bi-search search-icon"></i> PHP Web Developer
                </Button>
                <Button className="connect-button3">
                  <i className="bi bi-search search-icon"></i> Web Application Developer
                </Button>
                <Button className="connect-button3">
                  <i className="bi bi-search search-icon"></i> Web Programmer
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-3 job-listing-card">
            <Card.Body>
              <h6>
                <strong>Offerte di lavoro</strong>
              </h6>
              <div className="job-listing">
                {jobsList.slice(0, visibleJobs).map((job) => {
                  const jobDate = job.createdAt
                    ? new Date(job.createdAt).toLocaleDateString("it-IT", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : new Date().toLocaleDateString("it-IT", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      });

                  return (
                    <div key={job._id} className="job-item">
                      <div>
                        <h6>
                          <a href={job.url} target="_blank" rel="noopener noreferrer" className="job-title-link">
                            {job.title}
                          </a>
                        </h6>
                        <p className="text-muted">{job.company_name}</p>
                        <p className="text-muted job-date">Pubblicato il: {jobDate}</p>
                        <span className="job-apply-text">Candidatura Semplice</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {!hasClickedShowMore && visibleJobs < jobsList.length && (
                <button
                  className="show-more-btn3"
                  onClick={() => {
                    setVisibleJobs(visibleJobs + 5);
                    setHasClickedShowMore(true);
                  }}
                >
                  Mostra altro
                </button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;
