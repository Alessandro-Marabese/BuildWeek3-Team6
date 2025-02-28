import Card from "react-bootstrap/Card";
import { Link } from "react-router";
import camIcon from "../assets/camicon.png";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Informazioni from "./Informazioni";
import Activity from "./Activity";
import Esperienza from "./Esperienza";
import Formazione from "./Formazione";
import Competenze from "./Competenze";
import Contatti from "./Contatti";
import { RECLUTER_VISIBLE } from "../redux/actions";
import iconVerified from "../assets/verified.png";
import ModalEditProfile from "./ModalEditProfile";
import { useState } from "react";
import btnNoPhoto from "../assets/btnnophoto.png";
import ModalEditProfileImage from "./ModalEditProfileImage";

const CardProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.content);
  const recluterVisible = useSelector((state) => state.profile.recluterVisible);
  const [showModalEditProfile, setShowModalEditProfile] = useState(false);
  const [showModalEditProfileImage, setShowModalEditProfileImage] = useState(false);
  const [imgProfile, setImgProfile] = useState(null);

  return (
    <>
      {userProfile && (
        <div className="container-fluid px-0 ps-lg-3 container-lg pt-lg-4">
          <Card id="top-margin" className="rounded-overflow rounded-block">
            <div className="imgCardProfile">
              <Card.Img variant="top" src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq" />
            </div>
            <div className="d-flex justify-content-between iconBarProfile">
              {userProfile.image === "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" ? (
                <div className="camIcon ms-3">
                  <>
                    <Image src={camIcon} width={48} className="imgfluid" />
                    <Link to="/edit-profile-image" className="m-0 camText text-link fw-500 text-decoration-none">
                      Aggiungi foto
                    </Link>
                  </>
                </div>
              ) : (
                <>
                  {Array.isArray(userProfile) ? (
                    <></>
                  ) : (
                    <>
                      {userProfile.image.slice(-10) !== "delete.png" ? (
                        <>
                          <div className="profileIcon ms-3 d-flex d-lg-none justify-content-center align-items-center">
                            <Image src={userProfile.image} width={150} className="imgfluid" />
                          </div>
                          <div className="profileIcon d-none ms-lg-4 d-lg-flex justify-content-center align-items-center">
                            <Image
                              src={userProfile.image}
                              width={150}
                              className="imgfluid"
                              onClick={() => {
                                setImgProfile(userProfile.image);
                                setShowModalEditProfileImage(true);
                              }}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="camIcon ms-3 d-lg-none">
                            <Image src={camIcon} width={48} className="imgfluid " />
                            <Link to="/edit-profile-image" className="m-0 camText text-link fw-500 text-decoration-none">
                              Aggiungi foto
                            </Link>
                          </div>
                          <div className="d-none d-lg-flex" style={{ zIndex: 1, marginLeft: "15px" }}>
                            <button className="hide" onClick={() => setShowModalEditProfileImage(true)}>
                              <Image src={btnNoPhoto} />
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
              <div className="actions-container">
                <svg viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="icon i24x24 d-lg-none">
                  <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                </svg>
                <Link to="/edit-profile" className="d-lg-none">
                  <svg viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="icon i24x24">
                    <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                  </svg>
                </Link>
                <button className="hide d-none d-lg-flex" onClick={() => setShowModalEditProfile(true)}>
                  <svg viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="icon i24x24">
                    <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {userProfile.image !== "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" && (
              <>
                {Array.isArray(userProfile) ? (
                  <></>
                ) : (
                  <>
                    {userProfile.image.slice(-10) !== "delete.png" && (
                      <Link className="linkEditImg position-relative d-lg-none" to="/edit-profile-image">
                        <svg viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="icon i16x16">
                          <path d="M10 9a2 2 0 11-2-2 2 2 0 012 2zm5-2.5V14H1V6.5A2.5 2.5 0 013.5 4h.75L5 2h6l.75 2h.75A2.5 2.5 0 0115 6.5zM11 9a3 3 0 10-3 3 3 3 0 003-3z"></path>
                        </svg>
                      </Link>
                    )}
                  </>
                )}
              </>
            )}

            <Card.Body className="d-flex flex-column">
              <Link to="/settings" className="linkSettings d-lg-none m-3 position-absolute top-0 end-0">
                <svg viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="icon">
                  <path d="M6 1L3 2.76 4 5.2l-.36.63L1 6.22v3.52l2.55.39.38.66L3 13.22 6 15l1.6-2h.76L10 15l3-1.76-.94-2.43.38-.65L15 9.78V6.26l-2.58-.4-.36-.62 1-2.46L10 1 8.37 3.08h-.71zm2 5a2 2 0 11-2 2 2 2 0 012-2z"></path>
                </svg>
              </Link>
              <button to="/settings" className="linkArtDeco d-none d-lg-flex m-3 position-absolute top-0 end-0">
                <svg viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="artdeco-button__icon i16x16">
                  <path d="M10 9a2 2 0 11-2-2 2 2 0 012 2zm5-2.5V14H1V6.5A2.5 2.5 0 013.5 4h.75L5 2h6l.75 2h.75A2.5 2.5 0 0115 6.5zM11 9a3 3 0 10-3 3 3 3 0 003-3z"></path>
                </svg>
              </button>
              <Card.Title className="mb-0 d-h5-lg">
                {userProfile.name} {userProfile.surname}{" "}
                <button className="badge-verifica d-none d-lg-inline">
                  <Image src={iconVerified} width={16} className="me-1" />
                  Aggiungi badge di verifica
                </button>
              </Card.Title>
              <span style={{ lineHeight: "1" }} className="py-lg-1">
                {userProfile.title}
              </span>
              <div>
                <span className="info body-small position">{userProfile.area}</span>
                <Link className="body-small fw-500 d-none d-lg-inline info-contact">Informazioni di contatto</Link>
              </div>
              <div className="d-none d-lg-flex mt-3 mb-2">
                <button className="roundedAll me-2  btndisp py-1 px-3">Disponibile per</button>
                <button className="roundedAll me-2  btnaddbet py-1 px-3">Aggiungi sezione del profilo</button>
                <button className="roundedAll me-2  btnaddbet py-1 px-3">Migliora profilo</button>
                <button className="roundedAll  btnris py-1 px-3">Risorse</button>
              </div>

              {recluterVisible && (
                <section className="mt-3 border border-tertiary d-flex justify-content-between d-lg-none">
                  <div className="body-small px-3 py-2">
                    Mostra ai recluter che sei disponibile a lavorare: decidi tu chi può vedere questa informazione
                    <span className="text-link d-block fw-500">Inizia</span>
                  </div>

                  <div>
                    <button className="hide" onClick={() => dispatch({ type: RECLUTER_VISIBLE })}>
                      <svg viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="icon i16x16">
                        <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                      </svg>
                    </button>
                  </div>
                </section>
              )}
            </Card.Body>
          </Card>
        </div>
      )}

      <Informazioni />
      <Activity userId={userProfile._id} />
      <Esperienza />
      <Formazione />
      <Competenze />
      <Contatti />
      {showModalEditProfile && <ModalEditProfile show={showModalEditProfile} onHide={() => setShowModalEditProfile(false)} />}
      {showModalEditProfileImage && (
        <ModalEditProfileImage show={showModalEditProfileImage} onHide={() => setShowModalEditProfileImage(false)} imgProfile={imgProfile} />
      )}
    </>
  );
};

export default CardProfile;
