import { Button, Card, Collapse } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function ModalEditProfile({ show, onHide }) {
  const [openCollapse, setOpenCollapse] = useState(true);

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card className="p-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="fw-bold">🔶 Migliora il tuo profilo con Premium</h6>
                <p className="text-muted mb-2">
                  Sposta in alto le sezioni del profilo che vuoi mettere in evidenza, aggiungi un pulsante
                  personalizzato, sfrutta l'assistente di scrittura con IA e tanto altro.
                </p>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/32" alt="user1" className="rounded-circle me-1" />
                  <img src="https://via.placeholder.com/32" alt="user2" className="rounded-circle me-1" />
                  <img src="https://via.placeholder.com/32" alt="user3" className="rounded-circle me-2" />
                  <span className="text-muted">Milioni di utenti usano Premium</span>
                </div>
              </div>
              <button className="hide" onClick={() => setOpenCollapse(!open)}>
                {open ? (
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

            <Collapse in={open}>
              <div>
                <Button
                  className="w-100 my-3"
                  style={{ backgroundColor: "#ffcc66", borderColor: "#ffcc66", color: "#000" }}
                >
                  Prova Premium per 0 EUR
                </Button>
                <p className="text-muted small">
                  1 mese gratis con assistenza 24/7. Annulli in qualsiasi momento. Ti invieremo un promemoria 7 giorni
                  prima della fine del periodo di prova.
                </p>
              </div>
            </Collapse>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <button className="roundedAll btndisp py-1 px-3">Salva</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEditProfile;
