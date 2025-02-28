import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUserProfile, fetchComments } from "../redux/actions";
import { Link } from "react-router-dom";
import PostModal from "./PostModal";
import CommentSection from "./CommentSection";

const HomePage = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.content);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const allPostsReverse = useSelector((state) => state.posts.content);
  const allPosts = [...allPostsReverse].reverse();
  const [loadedPosts, setLoadedPosts] = useState(10);
  const [modalShow, setModalShow] = useState(false);

  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  const loadOtherPosts = () => {
    setLoadedPosts((loadedPosts) => loadedPosts + 10);
  };

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
        return count === 1 ? `1 ${unit}` : `${count} ${unit}i fa`;
      }
    }
  };

  useEffect(() => {
    console.log("Fetching posts and user profile...");
    dispatch(getPosts());
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    const postId = "elementId";
    console.log("Fetching comments for postId:", postId);
    dispatch(fetchComments(postId));
  }, [dispatch]);

  return (
    <Container id="top-margin" className="mx-0 mx-md-auto pt-md-4">
      <Row>
        <Col id="leftcolhomepage" className="col-12 col-md-4 col-lg-3 d-none d-md-block">
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
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-12 col-md-8 col-lg-5 col-xl-6">
          <Card className="d-none d-md-block">
            <Card.Body>
              <div className="d-flex">
                <Link to="/profile">
                  <img src={userProfile.image} alt="profile-image" height="50" width="50" className="rounded-circle" />
                </Link>
                <Button
                  id="creation-post-button"
                  className="rounded-pill ms-3 flex-grow-1 text-start text-black border-secondary"
                  onClick={handleModalShow}
                >
                  Crea un post
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
                        <a href="#" className="text-decoration-none text-black">
                          <h6 id="nome-autore-post" className="mb-1">
                            {singlePost.user.name} {singlePost.user.surname}
                          </h6>
                          <p id="followers-card" className="mb-0 opacity-50">
                            {singlePost.user.title}
                          </p>
                        </a>
                        <p id="date-creation-post" className="d-inline-block mb-0 opacity-50 me-1">
                          {getTimePastDate(singlePost.createdAt)} •
                        </p>
                        {/* Icona */}
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-three-dots"
                          viewBox="0 0 16 16"
                        >
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
                        <img src={singlePost.user.image} alt="post-image" className="img-fluid" />
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
                          <span className="d-inline-block align-middle opacity-50 ms-2">
                            Giuseppe Todino e altre 65 persone
                          </span>
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <div>
                    <CommentSection />
                  </div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
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
