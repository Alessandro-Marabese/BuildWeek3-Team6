import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, uploadPostImage } from "../redux/actions";

const EditPostModal = ({ show, onHide, postToEdit }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.content);
  const [postDescription, setPostDescription] = useState({
    description: "",
  });
  const [postImg, setPostImg] = useState(null);
  const [postImgPreview, setPostImagePreview] = useState(null);

  const handleChange = (e) => {
    setPostDescription({ [e.target.name]: e.target.value });
    console.log(postDescription);
  };
  const handlePostImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImg(file);
      setPostImagePreview(URL.createObjectURL(file));
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (postToEdit) {
      if (postImg) {
        console.log(postDescription);
        dispatch(updatePost(postToEdit._id, postDescription)).then(() => dispatch(uploadPostImage(postToEdit._id, postImg)));
      } else {
        dispatch(updatePost(postToEdit._id, postDescription));
      }
    }

    onHide();
  };
  useEffect(() => {
    if (postToEdit) {
      setPostDescription(postToEdit);
      setPostImagePreview(postToEdit.image);
    }
  }, [postToEdit]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton className="border-bottom-0">
        <Modal.Title>
          <Button id="modal-post-title-btn">
            <div className="d-flex align-items-center">
              <div>
                <img src={userProfile.image} alt="profile-image" height="60" width="60" className="rounded-circle" />
              </div>
              <div id="modal-header" className="ms-2">
                <h2 className="mb-0 mt-2">
                  {userProfile.name} {userProfile.surname}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill ms-2" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </h2>
                <p>Modifica post</p>
              </div>
            </div>
          </Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={5} name="description" value={postDescription.text} onChange={handleChange} className="border-0" />
          </Form.Group>
          <Form.Control type="file" accept="image/*" onChange={handlePostImageChange} />
          {postImgPreview && <img src={postImgPreview} alt="anteprima immagine post" style={{ width: "100px", marginTop: "10px" }} />}
          <div>
            <Button id="emoji-menu-modal-post" className="ms-2 mb-3 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-emoji-smile opacity-75" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
              </svg>
            </Button>
          </div>
          <div>
            <a href="#" className="text-black opacity-50 ms-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </a>
            <a href="#" className="text-black opacity-50 ms-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-filter-circle-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1M5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
              </svg>
            </a>
            <a href="#" className="text-black opacity-50 ms-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
              </svg>
            </a>
          </div>
          <div className=" border-top  mt-3 pt-3  text-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock me-2" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <Button type="submit" id="public-post-btn" className="rounded-pill ">
              Modifica
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default EditPostModal;
