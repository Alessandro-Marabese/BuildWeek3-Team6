import { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { editImageProfile } from "../redux/actions";

const EditProfileImage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.profile.content);

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleBtnClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpdate = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      dispatch(editImageProfile(selectedFile, userProfile._id));
    } else {
      alert("Seleziona un file prima di caricare!");
    }
  };

  return (
    <div className="bg-white editImgProfile">
      <header className="d-flex">
        <button className="px-3 hide" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon i24x24"
            id="arrow-left-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="currentColor"
            focusable="false"
            aria-busy="false"
          >
            <path d="M9 4l-4.87 7H22v2H4.13L9 20H6.56L1 12l5.56-8z"></path>
          </svg>
        </button>
        <h1 className="py-3 px-4 border-bottom w-100 h1Profile">Aggiungi foto</h1>
        {selectedFile && (
          <button className="hide fw-500 border-bottom" style={{ height: "58px" }} onClick={handleUpload}>
            Salva
          </button>
        )}
      </header>
      <div className="text-center">
        <p className="py-3 px-5">Gli utenti con una foto ricevono fino a 21 volte più visualizzazioni del profilo</p>
        <Container>
          <Form.Control
            type="file"
            className="mb-3"
            ref={fileInputRef}
            onChange={handleFileUpdate}
            style={{ display: "none" }}
          />
          {selectedFile ? (
            <>
              <div className="mt-3 d-flex flex-column align-items-center">
                <img src={URL.createObjectURL(selectedFile)} alt="Anteprima" className="imgPreview" />
                <Button variant="outline-primary" type="submit" className="roundedAll mt-3" onClick={handleBtnClick}>
                  Cambia foto
                </Button>
              </div>
            </>
          ) : (
            <Button variant="outline-primary" type="submit" className="roundedAll" onClick={handleBtnClick}>
              Aggiungi foto del profilo
            </Button>
          )}
        </Container>
      </div>
    </div>
  );
};

export default EditProfileImage;
