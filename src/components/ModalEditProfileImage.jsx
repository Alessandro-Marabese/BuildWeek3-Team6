import { Container, Form, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useEffect, useRef, useState } from "react";
import people from "../assets/people.png";
import { useDispatch, useSelector } from "react-redux";
import { editImageProfile, getUserProfile } from "../redux/actions";
import deleteImg from "../assets/delete.png";

function ModalEditProfileImage({ show, onHide, imgPropPreview }) {
  const userProfile = useSelector((state) => state.profile.content);
  const [imgPreview, setImgPreview] = useState(false);

  const dispatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const fileInputRef = useRef(null);

  async function createFileFromImage() {
    const response = await fetch(deleteImg);
    const blob = await response.blob();
    const imgDel = new File([blob], "delete.png", { type: "image/png" });
    setIsDelete(true);
    setSelectedFile(imgDel);
  }

  useEffect(() => {
    if (isDelete) {
      if (selectedFile) {
        handleUpload(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDelete, selectedFile]);

  const handleBtnDelClick = () => {
    createFileFromImage();
  };

  const handleBtnClick = () => {
    setIsDelete(false);
    fileInputRef.current.click();
  };

  const handleFileUpdate = (e) => {
    setSelectedFile(e.target.files[0]);
    setImgPreview(true);
  };

  const handleUpload = () => {
    dispatch(editImageProfile(selectedFile, userProfile._id))
      .then(() => dispatch(getUserProfile()))
      .then(() => {
        onHide(); // Chiude il modal dopo l'aggiornamento del profilo
      })
      .catch((error) => console.error("Errore durante il caricamento dell'immagine:", error));
  };

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Aggiungi foto</Modal.Title>
        </Modal.Header>
        {!imgPreview || imgPropPreview !== null ? (
          <Modal.Body style={{ maxHeight: "600px", overflowY: "auto" }}>
            <Container className="text-center mt-4" style={{ width: "450px" }}>
              <h4>
                La tua foto non deve per forza essere un tuo primo piano! <br /> Ma qualcosa che ti rappresenti.
              </h4>
              <Image src={people} className="mt-4" />
              <p className="body-small info my-4">
                Chiediamo agli utenti di LinkedIn di utilizzare le loro vere identità, quindi scatta o carica una tua
                foto. Poi ritagliala, applica dei filtri e perfezionala come vuoi.
              </p>
              <Form.Control
                type="file"
                className="mb-3"
                ref={fileInputRef}
                onChange={handleFileUpdate}
                style={{ display: "none" }}
              />
            </Container>
          </Modal.Body>
        ) : (
          <>
            {imgPropPreview ? (
              <Container>
                <div className="mt-3  d-flex flex-column align-items-center ">
                  <div className="bg-black py-2 w-100 text-center">
                    <Image src={imgPropPreview} alt="Anteprima" className="imgPreview" />
                  </div>
                </div>
              </Container>
            ) : (
              <Container>
                <div className="mt-3  d-flex flex-column align-items-center ">
                  <div className="bg-black py-2 w-100 text-center">
                    <Image src={URL.createObjectURL(selectedFile)} alt="Anteprima" className="imgPreview" />
                  </div>
                </div>
              </Container>
            )}
          </>
        )}

        <Modal.Footer>
          <button className="roundedAll btndispOutline py-1 px-3" onClick={handleBtnDelClick}>
            Elimina Foto
          </button>
          {!imgPreview ? (
            <button className="roundedAll btndisp py-1 px-3" onClick={handleBtnClick}>
              Carica Foto
            </button>
          ) : (
            <button className="roundedAll btndisp py-1 px-3" onClick={handleUpload}>
              Salva Foto
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEditProfileImage;
