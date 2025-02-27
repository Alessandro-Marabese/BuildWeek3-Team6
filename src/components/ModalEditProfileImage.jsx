import { Container, Form, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import people from "../assets/people.png";
import { useSelector } from "react-redux";

function ModalEditProfileImage({ show, onHide }) {
  const userProfile = useSelector((state) => state.profile.content);

  const handleChange = () => {};

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Aggiungi foto</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ maxHeight: "600px", overflowY: "auto" }}>
          <Container className="text-center mt-4" style={{ width: "450px" }}>
            <h4>
              La tua foto non deve per forza essere un tuo primo piano! <br /> Ma qualcosa che ti rappresenti.
            </h4>
            <Image src={people} className="mt-4" />
          </Container>

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

export default ModalEditProfileImage;
