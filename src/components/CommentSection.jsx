import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/actions";
import { Form } from "react-bootstrap";

const CommentSection = ({ commentPostId }) => {
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (newComment !== "") {
      dispatch(addComment(newComment, "3", commentPostId));
    }
  };

  //   const handleAddComment = () => {
  //     if (newComment !== "") {
  //       dispatch(addComment(newComment, "3", commentPostId));
  //     }
  //   };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="d-flex justify-content-between col">
      <button type="button" className="fw-bold p-0 btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-hand-thumbs-up fw-bold me-2"
          viewBox="0 0 16 16"
        >
          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
        </svg>
        Consiglia
      </button>

      <button
        type="button"
        className="fw-bold p-0 btn btn-primary"
        onClick={() => setIsCommentSectionVisible(!isCommentSectionVisible)}
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 121.86 122.88"
          width="16"
          height="16"
          className="me-2"
        >
          <path d="M30.28,110.09,49.37,91.78A3.84,3.84,0,0,1,52,90.72h60a2.15,2.15,0,0,0,2.16-2.16V9.82a2.16,2.16,0,0,0-.64-1.52A2.19,2.19,0,0,0,112,7.66H9.82A2.24,2.24,0,0,0,7.65,9.82V88.55a2.19,2.19,0,0,0,2.17,2.16H26.46a3.83,3.83,0,0,1,3.82,3.83v15.55ZM28.45,63.56a3.83,3.83,0,1,1,0-7.66h53a3.83,3.83,0,0,1,0,7.66Zm0-24.86a3.83,3.83,0,1,1,0-7.65h65a3.83,3.83,0,0,1,0,7.65ZM53.54,98.36,29.27,121.64a3.82,3.82,0,0,1-6.64-2.59V98.36H9.82A9.87,9.87,0,0,1,0,88.55V9.82A9.9,9.9,0,0,1,9.82,0H112a9.87,9.87,0,0,1,9.82,9.82V88.55A9.85,9.85,0,0,1,112,98.36Z"></path>
        </svg>
        Commenta
      </button>

      {isCommentSectionVisible && (
        <div>
          <h2>Commenti</h2>

          <ul>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <li key={comment.id} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{comment.text}</span>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    Elimina
                  </button>
                </li>
              ))
            ) : (
              <p>Nessun commento disponibile.</p>
            )}
          </ul>

          <div>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>testo</Form.Label>
                <Form.Control
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Aggiungi un commento..."
                  className="form-control mb-2"
                />
              </Form.Group>
            </Form>

            <button type="submit" className="btn btn-primary">
              Invia
            </button>
          </div>
        </div>
      )}

      <button type="button" className="fw-bold d-none d-md-block p-0 btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-repeat me-2"
          viewBox="0 0 16 16"
        >
          <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"></path>
        </svg>
        Diffondi il post
      </button>
      <button type="button" className="fw-bold d-none d-md-block p-0 btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-send-fill me-2"
          viewBox="0 0 16 16"
        >
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"></path>
        </svg>
        Invia
      </button>
      <button type="button" className="fw-bold d-md-none btn btn-primary">
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
      </button>
    </div>
  );
};

export default CommentSection;
