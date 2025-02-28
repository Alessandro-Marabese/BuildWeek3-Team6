import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../redux/actions";
import EditPostModal from "./EditPostModal";

const Activity = ({ userId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.posts.content);

  const filteredPost = allPosts.filter((post) => {
    return post.user._id === userId;
  });

  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const [loadedPosts, setLoadedPosts] = useState(2);

  const [modalShow, setModalShow] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);

  const handleModalClose = () => setModalShow(false);

  const loadOtherPosts = () => {
    setLoadedPosts(filteredPost.length);
    setIsButtonVisible(false);
  };
  const handleEditPostClick = (post) => {
    setPostToEdit(post);
    setModalShow(true);
  };
  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
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
    <Col className="ps-lg-3">
      <Container fluid className="mx-0  mt-2 cont pt-3 rounded-block">
        <h5>Attività</h5>
        <Row>
          <Col xs={12}>
            <p className="text-black-50"> follower </p>
          </Col>
        </Row>
        <Row>
          {userId &&
            filteredPost
              .reverse()
              .slice(0, loadedPosts)
              .map((post) => (
                <Col className="col-6 mb-2" key={post._id} data={post}>
                  <Card className="post-card mt-2">
                    <Card.Body>
                      <Row className="justify-content-between">
                        <Col className="col-4 d-flex align-items-center flex-grow-1">
                          <div>
                            <a href="#">
                              <img src={post.user.image} alt="" height="60" width="60" />
                            </a>
                          </div>
                          <div className="ms-2">
                            <a href="#" className="text-decoration-none text-black">
                              <h6 id="nome-autore-post" className="mb-1">
                                {post.user.name} {post.user.surname}
                              </h6>
                              <p id="followers-card" className="mb-0 opacity-50">
                                {post.user.title}
                              </p>
                            </a>
                            <p id="date-creation-post" className="d-inline-block mb-0 opacity-50 me-1">
                              {getTimePastDate(post.createdAt)} •
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
                          <Button onClick={() => handleEditPostClick(post)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-three-dots "
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                          </Button>
                          <Button onClick={() => handleDelete(post._id)}>
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
                          <p>{post.text}</p>
                          <a href="#">
                            <img src={post.image} alt="post-image" className="img-fluid" />
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
                          </Button>
                          <Button className="fw-bold p-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-repeat me-2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                            </svg>
                          </Button>
                          <Button className="fw-bold p-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-send-fill me-2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                            </svg>
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          {isButtonVisible && (
            <Button id="activity-visualizza-altri-post" className="border-top w-100 rounded-bottom fw-bold" onClick={loadOtherPosts}>
              Mostra tutti i post{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right ms-1" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Button>
          )}
          <EditPostModal show={modalShow} onHide={handleModalClose} postToEdit={postToEdit} />
        </Row>
      </Container>
    </Col>
  );
};

export default Activity;
