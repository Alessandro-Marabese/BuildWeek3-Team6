import { Link } from "react-router-dom";
import "./Settings.css";

const SettingsFooter = () => {
  return (
    <div className="footer-container">
      <hr className="footer-divider" />
      <ul className="footer-links">
        <li>
          <Link to="/help-center" className="footer-link">Help Center</Link>
        </li>
        <li>
          <Link to="/professional-community-policies" className="footer-link">Professional Community Policies</Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/accessibility" className="footer-link">Accessibility</Link>
        </li>
        <li>
          <Link to="/recommendation-transparency" className="footer-link">Recommendation Transparency</Link>
        </li>
        <li>
          <Link to="/user-agreement" className="footer-link">User Agreement</Link>
        </li>
        <li>
          <Link to="/end-user-license-agreement" className="footer-link">End User License Agreement</Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingsFooter;
