import { Link } from "react-router-dom";
import "./Settings.css";

const SettingsList = () => {
  const settingsItems = [
    { name: "Account Preferences", icon: "bi-person" },
    { name: "Sign in & Security", icon: "bi-lock" },
    { name: "Visibility", icon: "bi-eye" },
    { name: "Data Privacy", icon: "bi-shield-lock" },
    { name: "Advertising Data", icon: "bi-newspaper" },
    { name: "Notifications", icon: "bi-bell" },
  ];

  return (
    <div className="profile-settings-container" style={{ width: "100%", maxWidth: "400px", padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div className="profile-picture" style={{ marginRight: "10px" }}>
          <Link to="/profile">
            <img
              src="https://marketplace.canva.com/EAGCMGvlKLM/1/0/1600w/canva-viola-neon-fotografo-immagine-profilo-linkedin-kSHjxNxHD6Q.jpg"
              alt="Your profile photo"
              style={{ width: "32px", height: "32px", borderRadius: "50%" }}
            />
          </Link>
        </div>
        <div className="profile-settings-title" style={{ fontSize: "20px", fontWeight: "bold" }}>
          Settings
        </div>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {settingsItems.map((item, index) => (
          <li key={index} style={{ padding: "10px 0", fontWeight: "bold" }}>
            <Link
              to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                textDecoration: "none",
                color: "#333",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "6px",
                transition: "background-color 0.3s ease",
              }}
              className="settings-link"
            >
              <i className={`bi ${item.icon}`} style={{ marginRight: "10px", fontSize: "18px", color: "#666" }}></i>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsList;
