import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SettingsHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <Button variant="link" onClick={() => navigate(-1)}>
        ←
      </Button>
      <h3>Settings</h3>
      <Button variant="link" onClick={() => alert("Help Center")}>
        ?
      </Button>
    </div>
  );
};

export default SettingsHeader;
