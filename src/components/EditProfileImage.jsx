import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { editImageProfile, getUserProfile } from "../redux/actions";
import deleteImg from "../assets/delete.png";

const EditProfileImage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.profile.content);

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
    setIsDelete(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDelete, selectedFile]);

  const handleBtnDelClick = () => {
    createFileFromImage();
  };

  const handleBtnClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpdate = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    dispatch(editImageProfile(selectedFile, userProfile._id))
      .then(() => dispatch(getUserProfile()))
      .then(() => navigate(-1))
      .catch((error) => console.error("Errore durante il caricamento dell'immagine:", error));
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
      {userProfile.image === "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" ||
      userProfile.image.slice(-10) === "delete.png" ||
      selectedFile ? (
        <>
          <div className="text-center">
            <p className="py-3 px-5">
              Gli utenti con una foto ricevono fino a 21 volte più visualizzazioni del profilo
            </p>
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
                  {isDelete === false ? (
                    <div className="mt-3  d-flex flex-column align-items-center ">
                      <div className="bg-black py-2 w-100 text-center">
                        <Image src={URL.createObjectURL(selectedFile)} alt="Anteprima" className="imgPreview" />
                      </div>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        className="roundedAll mt-3"
                        onClick={handleBtnClick}
                      >
                        Cambia foto
                      </Button>
                    </div>
                  ) : null}
                </>
              ) : (
                <Button variant="outline-primary" type="submit" className="roundedAll" onClick={handleBtnClick}>
                  Aggiungi foto del profilo
                </Button>
              )}
            </Container>
          </div>
        </>
      ) : (
        <div className="mt-3 d-flex flex-column align-items-center">
          {console.log(userProfile)}
          <Container>
            <Form.Control
              type="file"
              className="mb-3"
              ref={fileInputRef}
              onChange={handleFileUpdate}
              style={{ display: "none" }}
            />
            <div className="d-flex flex-column align-items-center ">
              <p className="d-flex w-100 justify-content-start">Trascina per riposizionare.</p>
              <div className="bg-black py-2 w-100 text-center">
                <Image src={userProfile.image} alt="Anteprima" className="imgPreview" />
              </div>
              <Container fluid>
                <Row>
                  <Col className="d-flex">
                    <Button
                      variant="outline-primary"
                      type="submit"
                      className="roundedAll mt-3 w-100 btnProfile"
                      onClick={handleBtnClick}
                    >
                      Cambia foto
                    </Button>
                  </Col>
                  <Col className="d-flex">
                    <Button
                      variant="outline-primary"
                      type="submit"
                      className="roundedAll mt-3 w-100 btnProfile"
                      onClick={handleBtnDelClick}
                    >
                      Elimina
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default EditProfileImage;
