import { Badge, Button, Card, Col } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Col className="col-12 col-md-8 col-lg-4 col-xl-3 ms-md-auto d-none d-md-block">
      <Card>
        <Card.Body className="px-0">
          <div className="d-flex justify-content-between px-3">
            <h4 className="mb-3">In primo piano</h4>
            <a href="#" className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-info-square-fill mt-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </a>
          </div>
          <h5 className="opacity-50 mb-4 px-3">a cura di Linkedin Notizie</h5>
          <ul id="homepage-sidebar-list" className="ps-0">
            <li className="d-inline-block w-100">
              <a href="#" className="text-decoration-none text-black">
                <div className=" px-3">
                  <h6 className="mb-1">Fusione tra Saipem e Subsea7</h6>
                  <p>1 giorno fa • 676 lettori</p>
                </div>
              </a>
            </li>
            <li className="d-inline-block w-100">
              <a href="#" className="text-decoration-none text-black">
                <div className=" px-3">
                  <h6 className="mb-1">Priorità benessere per i lavoratori</h6>
                  <p>1 giorno fa • 289 lettori</p>
                </div>
              </a>
            </li>
            <li className="d-inline-block w-100">
              <a href="#" className="text-decoration-none text-black">
                <div className=" px-3">
                  <h6 className="mb-1">Roma ospita la COP16 &quot;bis&quot;</h6>
                  <p>6 ore fa • 244 lettori</p>
                </div>
              </a>
            </li>
            <li className="d-inline-block w-100">
              <a href="#" className="text-decoration-none text-black">
                <div className=" px-3">
                  <h6 className="mb-1">Stipendi più bassi per le donne</h6>
                  <p>5 ore fa</p>
                </div>
              </a>
            </li>
            <li className="d-inline-block w-100">
              <a href="#" className="text-decoration-none text-black">
                <div className=" px-3">
                  <h6 className="mb-1">Droni che riprendono quota</h6>
                  <p>2 ore fa</p>
                </div>
              </a>
            </li>
          </ul>
          <Button id="vedi-altro-homepage-sidebar" className="ms-1">
            Vedi altro
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </Button>
          <h5 className="opacity-50 mt-2 mb-2 px-3">I giochi di oggi</h5>
          <a href="#" className="giochi-sidebar-homepage text-decoration-none text-black">
            <div className="d-flex px-3 ">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6"
                alt="Tango"
                className="news-module__puzzle-icon mt-1 me-2"
                height="35"
              />
              <div>
                <h6 className="mb-0">Tango</h6>
                <p className="mb-0 opacity-50">Armonizza la griglia</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-caret-right-fill ms-auto mt-2"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </div>
          </a>
          <a href="#" className="giochi-sidebar-homepage text-decoration-none text-black">
            <div className="d-flex mt-2 px-3">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1"
                alt="Queens"
                className="news-module__puzzle-icon mt-1 me-2"
                height="35"
              />
              <div>
                <h6 className="mb-0">Queens</h6>
                <p className="mb-0 opacity-50">Incorona ogni regione</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-caret-right-fill ms-auto mt-2"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </div>
          </a>
        </Card.Body>
      </Card>

      <Card id="homepage-sidebar-image-card" className="mt-2 position-sticky">
        <a href="#">
          <img
            src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png"
            alt="Advertise on LinkedIn"
            border="0"
            className="img-fluid"
          />
        </a>
      </Card>

      <Card id="homepage-sidebar-suggest-card" className="mt-2 position-sticky">
        <Card.Body>
          <a href="#" className="text-decoration-none text-black">
            <div className="d-flex align-items-center">
              <Badge className="h-25">SUGGERIMENTO</Badge>
              <h6 className="lh-lg">Prova Linkedin sull&apos;app per Windows</h6>
            </div>
          </a>
        </Card.Body>
      </Card>
      <footer id="homepage-footer" className="mt-2 position-sticky">
        <ul className="d-flex flex-wrap justify-content-center align-items-center m-4 ps-0">
          <li className="m-1 d-inline-block">
            <a href="#" className="text-decoration-none text-black opacity-50">
              <p className="mb-0">Informazioni</p>
            </a>
          </li>
          <li className="m-2 d-inline-block">
            <a href="#" className="text-decoration-none text-black opacity-50">
              <p className="mb-0">Accessibilità</p>
            </a>
          </li>
          <li className="m-2 d-inline-block">
            <a href="#" className="text-decoration-none text-black opacity-50">
              <p className="mb-0">Centro Assistenza</p>
            </a>
          </li>
          <li className="m-2 d-inline-block">
            <a href="#" className="text-decoration-none text-black opacity-50">
              <p className="mb-0">Privacy e condizioni</p>
            </a>
          </li>
          <li className="m-2 d-inline-block">
            <a href="#" className="text-decoration-none text-black opacity-50">
              <p className="mb-0">Opzioni per gli annunci pubblicitari</p>
            </a>
          </li>
          <li className="m-2 d-inline-block">
            <a href="#" className="text-decoration-none text-black opacity-50">
              <p className="mb-0">Pubblicità</p>
            </a>
          </li>
          <li className="m-2 d-inline-block">
            <a href="#" className="text-decoration-none text-black opacity-50">
              <p className="mb-0">Servizi alle aziende</p>
            </a>
          </li>
          <li className="m-2 d-inline-block">
            <a href="#" className="text-decoration-none text-black opacity-50">
              <p className="mb-0">Scarica l&apos;app Linkedin</p>
            </a>
          </li>
          <li className="m-2 d-inline-block">
            <a href="#" className="text-decoration-none text-black opacity-50">
              <p className="mb-0">Altro</p>
            </a>
          </li>
        </ul>
        <div className="m-4 text-center">
          <p> LinkedIn Corporation © 2025</p>
        </div>
      </footer>
    </Col>
  );
};

export default Sidebar;