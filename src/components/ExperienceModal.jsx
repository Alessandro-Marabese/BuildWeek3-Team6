import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ExperienceModal = ({ show, handleClose, handleSubmit, experienceToEdit }) => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    area: "",
    description: "",
  });

  useEffect(() => {
    if (experienceToEdit) {
      const formattedExperience = {
        ...experienceToEdit,
        startDate: experienceToEdit.startDate ? experienceToEdit.startDate.split("T")[0] : "",
        endDate: experienceToEdit.endDate ? experienceToEdit.endDate.split("T")[0] : "",
      };
      setFormData(formattedExperience);
    }
  }, [experienceToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      startDate: formData.startDate ? `${formData.startDate}T00:00:00.000Z` : null,
      endDate: formData.endDate ? `${formData.endDate}T00:00:00.000Z` : null,
    };
    handleSubmit(formattedData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{experienceToEdit ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Ruolo</Form.Label>
            <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Azienda</Form.Label>
            <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data Inizio</Form.Label>
            <Form.Control type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data Fine</Form.Label>
            <Form.Control type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descrizione</Form.Label>
            <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} />
          </Form.Group>
          <Button type="submit" variant="primary">
            Salva
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ExperienceModal;
