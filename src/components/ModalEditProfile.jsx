import { Button, Card, Collapse, Container, Form, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import medium from "../assets/medium.png";
import { useSelector } from "react-redux";

function ModalEditProfile({ show, onHide }) {
  const [openCollapse, setOpenCollapse] = useState(true);
  const userProfile = useSelector((state) => state.profile.content);

  const handleChange = () => {};

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Modifica presentazione</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ maxHeight: "600px", overflowY: "auto" }}>
          <Card className="px-3 pt-3 pb-1 shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="fw-bold">
                  <Image src={medium} className="pe-1 mb-1" />
                  Migliora il tuo profilo con Premium
                </h6>
              </div>
              <button className="hide" onClick={() => setOpenCollapse(!openCollapse)} style={{ marginTop: "-7px" }}>
                {openCollapse ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon i24x24">
                      <path d="M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z" />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon i24x24">
                      <path d="M241 130.5l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9l-22.7 22.7c-9.4 9.4-24.5 9.4-33.9 0L224 227.5 69.3 381.5c-9.4 9.3-24.5 9.3-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.6 0-33.9L207 130.5c9.4-9.4 24.6-9.4 33.9 0z" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            <Collapse in={openCollapse}>
              <div>
                <p className="text-muted mb-2 body-small">
                  {`Sposta in alto le sezioni del profilo che vuoi mettere in evidenza, aggiungi un pulsante
                  personalizzato, sfrutta l'assistente di scrittura con IA e tanto altro.`}
                </p>
                <div className="d-flex align-items-center">
                  <img src={user1} alt="user1" className="rounded-circle" width={28} style={{ marginRight: "-10px" }} />
                  <img src={user2} alt="user2" className="rounded-circle" width={28} style={{ marginRight: "-10px" }} />
                  <img src={user3} alt="user3" className="rounded-circle me-2" width={28} />
                  <span className="text-muted body-xs">Milioni di utenti usano Premium</span>
                </div>
                <Button
                  className="my-3 roundedAll fw-bold"
                  style={{ backgroundColor: "#ffcc66", borderColor: "#ffcc66", color: "#000" }}
                >
                  Prova Premium per 0 EUR
                </Button>
                <p className="text-muted body-xs">
                  1 mese gratis con assistenza 24/7. Annulli in qualsiasi momento. Ti invieremo un promemoria 7 giorni
                  prima della fine del periodo di prova.
                </p>
              </div>
            </Collapse>
          </Card>
          <p className="body-xs my-4">* Indica che è obbligatorio</p>
          <Container className="mt-4">
            <Form>
              <Form.Group className="mb-3" controlId="nome">
                <Form.Label className="mb-0">Nome*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il nome"
                  value={userProfile.name || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="cognome">
                <Form.Label className="mb-0">Cognome*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il cognome"
                  value={userProfile.surname || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="nomeAggiuntivo">
                <Form.Label className="mb-0">Nome aggiuntivo</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il nome aggiuntivo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="sommario">
                <Form.Label className="mb-0">Sommario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il sommario"
                  value={userProfile.title || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="settore">
                <Form.Label className="mb-0">Settore</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il settore"
                  value={userProfile.bio || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="area">
                <Form.Label className="mb-0">Paese/Area geografica</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci l'area geografica"
                  value={userProfile.area || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="cap">
                <Form.Label className="mb-0">CAP</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il CAP" />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <button className="roundedAll btndisp py-1 px-3" onClick={onHide}>
            Salva
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEditProfile;
