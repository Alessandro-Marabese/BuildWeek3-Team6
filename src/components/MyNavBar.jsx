import { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/actions";
import { Link } from "react-router";

const MyNavBar = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.content);

  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggle = () => setShowDropdown(!showDropdown);
  const handleProfileClick = () => setShowDropdown(false);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <>
      <section
        id="secondary-navbar"
        className=" w-100 position-fixed top-0 z-1 d-flex align-items-center px-3 py-2 border-bottom"
      >
        <Link to="/profile">
          <img
            id="profile-img-sec-navbar"
            src={userProfile.image}
            alt="profile-image"
            className="rounded-circle me-3"
          />
        </Link>
        <div className="search-input-div d-flex align-items-center flex-grow-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-search p-1 "
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            type="text"
            name=""
            id="input-search"
            placeholder="Cerca"
            className="w-100 border-0 fw-bold"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="opacity-50 ms-2"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
        </svg>
      </section>

      <Navbar
        id="primary-navbar"
        className="position-fixed position-md-sticky z-1 bottom-0 w-100 border-top border-bottom justify-content-around py-md-0"
      >
        <Container className="text-center align-items-center mx-md-0 w-md-100">
          <div className="d-flex align-items-center d-none d-lg-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="text-primary me-1"
              width="40"
              height="40"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            <div className="search-input-div d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-search p-1 "
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <input
                type="text"
                name=""
                id="input-search"
                placeholder="Cerca"
                className=" border-0 fw-bold"
              />
            </div>
          </div>

          <div className="ms-2">
            <Link to="/" className="text-decoration-none text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="25"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="opacity-50"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
              <p className="navbarParag mb-0 opacity-50">Home</p>
            </Link>
          </div>
          <div>
            <a href="#" className="text-decoration-none text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="25"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className=" opacity-50"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
              <p className="navbarParag mb-0 opacity-50">Rete</p>
            </a>
          </div>
          <div className="me-2 d-none d-lg-block">
            <Link to="/jobs" className="text-decoration-none text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="25"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="opacity-50"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
              <p className="navbarParag mb-0 opacity-50">Lavoro</p>
            </Link>
          </div>
          <div>
            <a href="#" className="text-decoration-none text-black d-lg-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="25"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="opacity-50"
              >
                <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-5 8h4v2h-4v4h-2v-4H7v-2h4V7h2z"></path>
              </svg>
              <p className="navbarParag mb-0 opacity-50">Pubblica</p>
            </a>
            <a
              href="#"
              className="d-none d-lg-block text-decoration-none text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="opacity-50"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
              <p className="navbarParag mb-0 opacity-50">Messaggistica</p>
            </a>
          </div>
          <div>
            <a href="#" className="text-decoration-none text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22"
                width="22"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="opacity-50"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
              <p className="navbarParag mb-0 opacity-50">Notifiche</p>
            </a>
          </div>
          <div className="me-2 d-lg-none">
            <a href="" className="text-decoration-none text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="25"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="opacity-50"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
              <p className="navbarParag mb-0 opacity-50">Lavoro</p>
            </a>
          </div>
          <Dropdown
            show={showDropdown}
            onToggle={handleToggle}
            className="d-none d-lg-block"
          >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <span>
                <img
                  id="profile-img-primary-navbar"
                  src={userProfile.image}
                  alt="profile-image"
                  className="rounded-circle"
                />
              </span>
              <span className="d-block text-black opacity-50">
                Tu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  data-supported-dps="16x16"
                  viewBox="0 0 16 16"
                  data-token-id="379"
                  width="16"
                  height="16"
                >
                  <path d="M8 11 3 6h10Z"></path>
                </svg>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu
              id="profile-dropdown"
              className="dropdown-menu-md-end"
            >
              <Link
                to="/profile"
                className="text-decoration-none"
                onClick={handleProfileClick}
              >
                <Row className="border-bottom mx-1">
                  <Col className="ps-0 col-3">
                    <img
                      src={userProfile.image}
                      alt="Immagine profilo"
                      height="50"
                      width="50"
                      className="rounded-circle ms-2"
                    />
                  </Col>
                  {userProfile && (
                    <Col className="px-0 col-7">
                      <h4>
                        {userProfile.name} {userProfile.surname}
                      </h4>
                      <p className="text-black">{userProfile.title}</p>
                    </Col>
                  )}
                  <Button className="rounded-pill mb-2 py-1">
                    Visualizza il profilo
                  </Button>
                </Row>
              </Link>
              <div className="border-bottom mx-1">
                <h4 className="pt-2 ps-2">Account</h4>
                <Link to="/settings">
                  <p className="ps-2">Impostazioni e privacy</p>
                </Link>
                <a href="#">
                  <p className="ps-2">Guida</p>
                </a>
                <a href="#">
                  <p className="ps-2">Lingua</p>
                </a>
              </div>
              <div className="border-bottom mx-1">
                <h4 className="pt-2 ps-2">Gestisci</h4>
                <a href="#">
                  <p className="ps-2">Post e attività</p>
                </a>
                <a href="#">
                  <p className="ps-2">Account per la pubblicazione di off...</p>
                </a>
              </div>
              <div className="mx-1">
                <a href="#">
                  <p className="ps-2">Esci</p>
                </a>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="border-start d-none d-lg-block">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  data-supported-dps="16x16"
                  viewBox="0 0 16 16"
                  data-token-id="385"
                  width="24"
                  height="24"
                  aria-label=""
                  className="text-black opacity-50"
                >
                  <path d="M2 2h2.67v2.67H2zm4.67 2.67h2.67V2H6.67zM11.34 2v2.67h2.67V2zM2 9.33h2.67V6.66H2zm4.67 0h2.67V6.66H6.67zm4.67 0h2.67V6.66h-2.67zM2 14h2.67v-2.67H2zm4.67 0h2.67v-2.67H6.67zm4.67 0h2.67v-2.67h-2.67z"></path>
                </svg>
              </span>
              <span className="d-block text-black opacity-50">
                Per le aziende
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  data-supported-dps="16x16"
                  viewBox="0 0 16 16"
                  data-token-id="379"
                  width="16"
                  height="16"
                >
                  <path d="M8 11 3 6h10Z"></path>
                </svg>
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu
              id="aziende-dropdown"
              className="dropdown-menu-md-end"
            >
              <Row>
                <Col className="col-5 ms-4 mt-4">
                  <h4 className=" mb-5">Le mie app</h4>
                  <div className="mb-4">
                    <div className="mb-3">
                      <a href="#">
                        <h6>Trova lead</h6>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <h6>Gruppi</h6>
                      </a>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="mb-3">Talent</h5>
                    <div className="mb-3">
                      <a href="#">
                        <h6>Talent insight</h6>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <h6>Pubblica un&apos;offerta di lavoro</h6>
                      </a>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="mb-3">Vendite</h5>
                    <div>
                      <a href="#">
                        <h6>Marketplace dei servizi</h6>
                      </a>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="mb-3">Marketing</h5>
                    <div>
                      <a href="#">
                        <h6>Pubblicizza</h6>
                      </a>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="mb-3">Learning</h5>
                    <div>
                      <a href="#">
                        <h6>Learning</h6>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col className="col-5 border-start mt-4">
                  <h4 className=" mb-5">Scopri altro per il business</h4>
                  <div className="mb-4">
                    <a href="#">
                      <h6 className="mb-0">Assumi su Linkedin</h6>
                      <p>Trova, attrai e assumi</p>
                    </a>
                  </div>
                  <div className="mb-4">
                    <a href="#">
                      <h6 className="mb-0">Vendi con Linkedin</h6>
                      <p>Sblocca nuove possibilità di vendita</p>
                    </a>
                  </div>
                  <div className="mb-4">
                    <a href="#">
                      <h6 className="mb-0">Offerta di lavoro gratuita</h6>
                      <p>Ottieni rapidamente candidati qualificati</p>
                    </a>
                  </div>
                  <div className="mb-4">
                    <a href="#">
                      <h6 className="mb-0">Fai pubblicità su Linkedin</h6>
                      <p>Acquisisci clienti e fai crescere la tua azienda</p>
                    </a>
                  </div>
                  <div className="mb-4">
                    <a href="#">
                      <h6 className="mb-0">Inizia con Premium</h6>
                      <p>Amplia e sfrutta la tua rete</p>
                    </a>
                  </div>
                  <div className="mb-4">
                    <a href="#">
                      <h6 className="mb-0">Impara con Linkedin</h6>
                      <p>Corsi per formare i tuoi dipendenti</p>
                    </a>
                  </div>
                  <div className="mb-4">
                    <a href="#">
                      <h6 className="mb-0">Admin Center</h6>
                      <p>Gestisci i dettagli di fatturazione e account</p>
                    </a>
                  </div>
                  <div className="mb-5">
                    <a href="#">
                      <h6 className="d-inline-block">
                        Crea una pagina aziendale
                      </h6>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg>
                    </a>
                  </div>
                </Col>
              </Row>
            </Dropdown.Menu>
          </Dropdown>
          <div id="navbar-premium" className="d-none d-lg-block">
            <a href="#">Prova Premium per 0 EUR</a>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavBar;
