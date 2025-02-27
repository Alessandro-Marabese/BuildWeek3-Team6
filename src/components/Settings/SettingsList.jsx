import { Link } from "react-router-dom";
import "./Settings.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const SettingsList = ({ onSelectSetting }) => {
  const settingsItems = [
    { name: "Account Preferences", icon: "bi-person", visibleOnMobile: true },
    { name: "Sign in & Security", icon: "bi-lock", visibleOnMobile: true },
    { name: "Visibility", icon: "bi-eye", visibleOnMobile: true },
    { name: "Data Privacy", icon: "bi-shield-lock", visibleOnMobile: false },
    { name: "Advertising Data", icon: "bi-newspaper", visibleOnMobile: false },
    { name: "Notifications", icon: "bi-bell", visibleOnMobile: true },
  ];

  const [selectedSetting, setSelectedSetting] = useState(""); // Stato per la selezione
  const userprofile = useSelector((state) => state.profile.content);

  const handleSettingClick = (setting) => {
    setSelectedSetting(setting);
    onSelectSetting(setting);
  };

  return (
    <div className="profile-settings-container">
      <div className="profile-settings-header">
        <div className="profile-picture">
          <Link to="/profile">
            <img
              src={userprofile.image}
              alt="Your profile photo"
              className="profile-image"
            />
          </Link>
        </div>
        <div className="profile-settings-title">Settings</div>
      </div>

      <ul className="settings-items-list">
        {settingsItems.map((item, index) => (
          <li
            key={index}
            className={`settings-item ${item.visibleOnMobile ? "settings-visible" : ""}`}
          >
            <div
              onClick={() => handleSettingClick(item.name)} // Cambia lo stato al click
              className={`settings-link ${selectedSetting === item.name ? "selected" : ""}`} // Aggiungi la classe "selected" se è selezionato
            >
              <i className={`bi ${item.icon} settings-icon`}></i>
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsList;
