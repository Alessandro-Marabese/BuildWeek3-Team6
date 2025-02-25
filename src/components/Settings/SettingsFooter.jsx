import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Settings.css";

const SettingsFooter = () => {
  return (
    <div style={{ textAlign: "left", padding: "20px", borderTop: "1px solid #e0e0e0" }}>
      <hr style={{ border: "1px solid #e0e0e0", margin: "20px 0" }} />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/help-center" style={linkStyle}>Help Center</Link>
        </li>
        <li>
          <Link to="/professional-community-policies" style={linkStyle}>Professional Community Policies</Link>
        </li>
        <li>
          <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
        </li>
        <li>
          <Link to="/accessibility" style={linkStyle}>Accessibility</Link>
        </li>
        <li>
          <Link to="/recommendation-transparency" style={linkStyle}>Recommendation Transparency</Link>
        </li>
        <li>
          <Link to="/user-agreement" style={linkStyle}>User Agreement</Link>
        </li>
        <li>
          <Link to="/end-user-license-agreement" style={linkStyle}>End User License Agreement</Link>
        </li>
      </ul>
      <Button variant="link" onClick={() => alert('Sign Out')} style={{ color: "#6c757d", textAlign: "left", paddingLeft: "0" }}>
        Sign Out
      </Button>
    </div>
  );
};

const linkStyle = {
  color: "#6c757d",  
  textDecoration: "none",
  display: "block",
  padding: "5px 0",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#5a6268", 
  },
};

export default SettingsFooter;
