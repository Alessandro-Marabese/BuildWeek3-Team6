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
    <div className="settings-container" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <div className="profile-settings" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div className="profile-image" style={{ marginRight: "10px" }}>
          <img src="path-to-linkedin-profile-image" alt="LinkedIn Profile" style={{ width: "20px", height: "20px", borderRadius: "50%" }} /> 
        </div>
        <Link
          to="/settings"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            fontSize: "20px",  
            display: "flex",
            alignItems: "center",
          }}
        >
          Settings
        </Link>
      </div>
      
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {settingsItems.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "10px 0",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
              ":hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Link
              to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
              }}
            >
              <i className={`bi ${item.icon}`} style={{ marginRight: "10px", fontSize: "18px" }}></i> {/* icona leggermente ingrandita */}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsList;
