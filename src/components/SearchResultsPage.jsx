import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actions/jobsActions";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../style/SearchResultsPage.css";

const SearchResultsPage = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  const { jobsList, isLoading, hasError } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchJobs(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <Container className="mt-5">
      <h2 className="search-title">
        Risultati per: <strong>"{searchQuery}"</strong>
      </h2>

      {isLoading && (
        <p className="text-center mt-5">⏳ Caricamento offerte di lavoro...</p>
      )}
      {hasError && (
        <p className="text-danger text-center">
          Errore nel caricamento: {hasError}
        </p>
      )}

      {jobsList.length === 0 ? (
        <p className="text-center mt-5 text-muted">
          Nessun risultato trovato per "{searchQuery}".
        </p>
      ) : (
        <Row className="gy-4">
          {jobsList.slice(0, 21).map((job, index) => (
            <Col key={job._id} md={6} lg={4}>
              <Card className="shadow-sm job-card">
                <Card.Body>
                  <h5 className="text-dark fw-bold">{job.title}</h5>
                  <p className="text-muted mb-2"> {job.company_name}</p>
                  <Button
                    id={`apply-btn-${index}`}
                    className="apply-btn w-100"
                    href={job.url}
                    target="_blank"
                  >
                    Candidati
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchResultsPage;
