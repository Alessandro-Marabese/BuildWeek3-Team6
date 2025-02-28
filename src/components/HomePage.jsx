import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUserProfile } from "../redux/actions";
import { Link } from "react-router";
import PostModal from "./PostModal";

const HomePage = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.content);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const allPostsReverse = useSelector((state) => state.posts.content);
  const allPosts = [...allPostsReverse].reverse();

  const [loadedPosts, setLoadedPosts] = useState(10);
  const [modalShow, setModalShow] = useState(false);
  const experiences = useSelector((state) => state.experiences.experiences);
  console.log(experiences);

  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  const loadOtherPosts = () => {
    setLoadedPosts((loadedPosts) => loadedPosts + 10);
  };

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUserProfile());
  }, [dispatch]);

  const getTimePastDate = (date) => {
    const now = new Date();
    const postDate = new Date(date);
    const secondsPast = Math.floor((now - postDate) / 1000);

    const intervals = {
      anno: 31536000,
      mese: 2592000,
      giorno: 86400,
      ora: 3600,
      minuto: 60,
      secondo: 1,
    };

    for (const unit in intervals) {
      const interval = intervals[unit];
      if (secondsPast >= interval) {
        const count = Math.floor(secondsPast / interval);
        if (unit === "anno") {
          return count === 1 ? `1 anno ` : `${count} anni `;
        }
        if (unit === "mese") {
          return count === 1 ? `1 mese ` : `${count} mesi `;
        }
        if (unit === "giorno") {
          return count === 1 ? `1 giorno ` : `${count} giorni `;
        }
        if (unit === "ora") {
          return count === 1 ? `1 ora` : `${count} ore`;
        }
        if (unit === "minuto") {
          return count === 1 ? `1 minuto` : `${count} minuti`;
        }
        if (unit === "secondo") {
          return count === 1 ? `1 secondo` : `${count} secondi`;
        }
      }
    }
  };

  return (
    <Container id="top-margin" className="mx-0 mx-md-auto pt-md-4">
      <Row>
        <Col id="leftcolhomepage" className="col-12 col-md-4 col-lg-3 d-none d-md-block ">
          <Card className="mb-2">
            <Card.Img variant="top" src={userProfile.image} />
            <Card.Body className="position-relative">
              <Link to="/profile">
                <img
                  id="homepage-profile-image-rounded-left-col"
                  src={userProfile.image}
                  alt="profile-image"
                  className="rounded-circle position-absolute"
                  height="50"
                  width="50"
                />
              </Link>
              <Link to="/profile">
                <Card.Title className="mt-2">
                  {userProfile.name} {userProfile.surname}
                </Card.Title>
                <h6>{userProfile.title}</h6>
                <p className="mb-1">{userProfile.area}</p>
                <p className="mb-1">{experiences[0].company}</p>
              </Link>
            </Card.Body>
          </Card>

          <Card className="d-none d-md-block mb-2">
            <Card.Body>
              <div className="d-flex justify-content-between mt-2">
                <a href="#">
                  <p>Visitatori del profilo</p>
                </a>
                <a href="#">
                  <p>12</p>
                </a>
              </div>
              <a href="#">
                <p>Visualizza tutte le analisi</p>
              </a>
            </Card.Body>
          </Card>

          <Card className="d-none d-md-block mb-2">
            <Card.Body>
              <a href="#">
                <p className="opacity-75 mb-1">Fai crescere la tua carriera o il tuo business con Premium</p>
                <div>
                  <h6>Prova Premium per 0 EUR</h6>
                </div>
              </a>
            </Card.Body>
          </Card>
          <Card className="d-none d-md-block">
            <Card.Body>
              <a href="#" className="elementi-salvati text-decoration-none text-black">
                <div className="d-flex align-items-baseline mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill me-2" viewBox="0 0 16 16">
                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                  </svg>
                  <h6>Elementi salvati</h6>
                </div>
              </a>
              <a href="#" className="text-decoration-none text-black">
                <div className="d-flex align-items-baseline mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill me-2" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                  <h6>Gruppi</h6>
                </div>
              </a>
              <a href="#" className="text-decoration-none text-black">
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event me-2" viewBox="0 0 16 16">
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                  <h6>Eventi</h6>
                </div>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 col-md-8 col-lg-5 col-xl-6 ">
          <Card className="d-none d-md-block">
            <Card.Body>
              <div className="d-flex">
                <Link to="/profile">
                  <img src={userProfile.image} alt="profile-image" height="50" width="50" className="rounded-circle" />
                </Link>
                <Button id="creation-post-button" className="rounded-pill ms-3 flex-grow-1 text-start text-black border-secondary" onClick={handleModalShow}>
                  Crea un post
                </Button>
              </div>
              <div id="div-bottom-post" className="d-flex justify-content-between mt-3 align-items-center">
                <Button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-image me-2" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                  </svg>
                  Contenuti multimediali
                </Button>
                <Button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-event me-2" viewBox="0 0 16 16">
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                  Evento
                </Button>
                <Button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-postcard me-2" viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5M10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM13 8h-2V6h2z"
                    />
                  </svg>
                  Scrivi un articolo
                </Button>
              </div>
            </Card.Body>
          </Card>
          {isLoading ? (
            <Spinner className="text-center mt-2" animation="border" variant="primary" />
          ) : (
            allPosts.slice(0, loadedPosts).map((singlePost) => (
              <Card key={singlePost._id} data={singlePost} className="post-card mt-2">
                <Card.Body>
                  <Row className="justify-content-between">
                    <Col className="col-4 d-flex align-items-center flex-grow-1">
                      <div>
                        <a href="#">
                          <img src={singlePost.user.image} alt="" height="60" width="60" />
                        </a>
                      </div>
                      <div className="ms-2">
                        <Link to={`/profile/${singlePost.user._id}`} className="linkToOther">
                          <h6 id="nome-autore-post" className="mb-1">
                            {singlePost.user.name} {singlePost.user.surname}
                          </h6>
                          <p id="followers-card" className="mb-0 opacity-50">
                            {singlePost.user.title}
                          </p>
                        </Link>
                        <p id="date-creation-post" className="d-inline-block mb-0 opacity-50 me-1">
                          {getTimePastDate(singlePost.createdAt)} •
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="currentColor"
                          className="align-middle opacity-50"
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                        </svg>
                      </div>
                    </Col>
                    <Col className="col-4 text-end">
                      <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots " viewBox="0 0 16 16">
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                      </Button>
                      <Button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.78 12.72C14.07 13.01 14.07 13.49 13.78 13.78C13.63 13.93 13.44 14 13.25 14C13.06 14 12.87 13.93 12.72 13.78L8 9.06L3.28 13.78C3.13 13.93 2.94 14 2.75 14C2.56 14 2.37 13.93 2.22 13.78C1.93 13.49 1.93 13.01 2.22 12.72L6.94 8L2.22 3.28C1.93 2.99 1.93 2.51 2.22 2.22C2.51 1.93 2.99 1.93 3.28 2.22L8 6.94L12.72 2.22C13.01 1.93 13.49 1.93 13.78 2.22C14.07 2.51 14.07 2.99 13.78 3.28L9.06 8L13.78 12.72Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="border-bottom">
                      <p>{singlePost.text}</p>
                      <a href="#">
                        <img src={singlePost.image} alt="post-image" className="img-fluid" />
                      </a>
                      <div id="like-card" className="mb-2 mt-2">
                        <a href="#">
                          <img
                            className="align-middle reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                            src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                            alt="like"
                            data-test-reactions-icon-type="LIKE"
                            data-test-reactions-icon-theme="light"
                            data-test-reactions-icon-style="consumption"
                            data-test-reactions-icon-size="small"
                          />
                          <img
                            className="align-middle reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--1 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-PRAISE data-test-reactions-icon-theme-light"
                            src="https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                            alt="celebrate"
                            data-test-reactions-icon-type="PRAISE"
                            data-test-reactions-icon-theme="light"
                            data-test-reactions-icon-style="consumption"
                            data-test-reactions-icon-size="small"
                          />
                          <img
                            className="align-middle reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--2 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-EMPATHY data-test-reactions-icon-theme-light"
                            src="https://static.licdn.com/aero-v1/sc/h/cpho5fghnpme8epox8rdcds22"
                            alt="love"
                            data-test-reactions-icon-type="EMPATHY"
                            data-test-reactions-icon-theme="light"
                            data-test-reactions-icon-style="consumption"
                            data-test-reactions-icon-size="small"
                          />
                          <span className="d-inline-block align-middle opacity-50 ms-2">Giuseppe Todino e altre 65 persone</span>
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="d-flex justify-content-between">
                      <Button className="fw-bold p-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-hand-thumbs-up fw-bold me-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                        </svg>
                        Consiglia
                      </Button>
                      <Button className="fw-bold p-0">
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 121.86 122.88"
                          width="16"
                          height="16"
                          className="me-2"
                        >
                          <path d="M30.28,110.09,49.37,91.78A3.84,3.84,0,0,1,52,90.72h60a2.15,2.15,0,0,0,2.16-2.16V9.82a2.16,2.16,0,0,0-.64-1.52A2.19,2.19,0,0,0,112,7.66H9.82A2.24,2.24,0,0,0,7.65,9.82V88.55a2.19,2.19,0,0,0,2.17,2.16H26.46a3.83,3.83,0,0,1,3.82,3.83v15.55ZM28.45,63.56a3.83,3.83,0,1,1,0-7.66h53a3.83,3.83,0,0,1,0,7.66Zm0-24.86a3.83,3.83,0,1,1,0-7.65h65a3.83,3.83,0,0,1,0,7.65ZM53.54,98.36,29.27,121.64a3.82,3.82,0,0,1-6.64-2.59V98.36H9.82A9.87,9.87,0,0,1,0,88.55V9.82A9.9,9.9,0,0,1,9.82,0H112a9.87,9.87,0,0,1,9.82,9.82V88.55A9.85,9.85,0,0,1,112,98.36Z" />
                        </svg>
                        Commenta
                      </Button>
                      <Button className="fw-bold d-none d-md-block p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-repeat me-2" viewBox="0 0 16 16">
                          <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                        </svg>
                        Diffondi il post
                      </Button>
                      <Button className="fw-bold d-none d-md-block p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill me-2" viewBox="0 0 16 16">
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                        </svg>
                        Invia
                      </Button>
                      <Button className="fw-bold d-md-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          focusable="false"
                          className="me-2 align-middle"
                          aria-busy="false"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M18.4 5H16l3.9 6H8c-3.4 0-6 2.8-6 5.9 0 .6.1 1.2.3 1.8L3 21h2.1l-.9-2.8c-.1-.4-.2-.8-.2-1.2 0-2.1 1.6-4 3.9-4h12L16 19h2.4l4.6-7-4.6-7z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        Condividi
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          )}
          <div className="text-end mt-3 mb-5 mb-md-3">
            <Button id="carica-post-btn" className="mb-4 mb-md-0" onClick={loadOtherPosts}>
              Carica altri post
            </Button>
          </div>
        </Col>

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
      </Row>
      <PostModal show={modalShow} onHide={handleModalClose} />
    </Container>
  );
};

export default HomePage;
