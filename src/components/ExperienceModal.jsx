import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addExperience, updateExperience, uploadExperienceImage } from "../redux/actions/index";

const ExperienceModal = ({ show, handleClose, experienceToEdit, handleDelete }) => {
  const userId = useSelector((state) => state.profile.content._id);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    area: "",
    description: "",
  });
  const [img, setImg] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (experienceToEdit) {
      const formattedExperience = {
        ...experienceToEdit,
        startDate: experienceToEdit.startDate ? experienceToEdit.startDate.split("T")[0] : "",
        endDate: experienceToEdit.endDate ? experienceToEdit.endDate.split("T")[0] : "",
        image: experienceToEdit.image || null,
      };
      setFormData(formattedExperience);
      setImagePreview(formattedExperience.image);
    } else {
      setFormData({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        area: "",
        description: "",
      });
      setImagePreview(null);
    }
  }, [experienceToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (experienceToEdit) {
      if (img) {
        dispatch(updateExperience(experienceToEdit.user, experienceToEdit._id, formData)).then(() =>
          dispatch(uploadExperienceImage(experienceToEdit.user, experienceToEdit._id, img))
        );
      } else {
        dispatch(updateExperience(experienceToEdit.user, experienceToEdit._id, formData));
      }
    } else {
      dispatch(addExperience(userId, formData)).then((exp) => {
        if (img && exp?._id) {
          dispatch(uploadExperienceImage(userId, exp._id, img));
        }
      });
    }

    handleClose();
  };

  const onDelete = () => {
    if (experienceToEdit) {
      handleDelete(experienceToEdit._id);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{experienceToEdit ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Immagine</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && (
              <img src={imagePreview} alt="Anteprima immagine" style={{ width: "100px", marginTop: "10px" }} />
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Ruolo</Form.Label>
            <Form.Control type="text" name="role" value={formData.role || ""} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Azienda</Form.Label>
            <Form.Control type="text" name="company" value={formData.company || ""} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data Inizio</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={formData.startDate || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data Fine</Form.Label>
            <Form.Control type="date" name="endDate" value={formData.endDate || ""} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" name="area" value={formData.area || ""} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descrizione</Form.Label>
            <Form.Control as="textarea" name="description" value={formData.description || ""} onChange={handleChange} />
          </Form.Group>
          <Button type="submit" variant="primary" className="me-2">
            Salva
          </Button>
          {experienceToEdit && (
            <Button variant="outline-primary" onClick={onDelete}>
              Elimina
            </Button>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ExperienceModal;
