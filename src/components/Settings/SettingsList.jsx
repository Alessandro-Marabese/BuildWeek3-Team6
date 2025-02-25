
import { Link } from "react-router-dom";
import "./Settings.css";

const SettingsList = () => {
  const settingsItems = [
    "Data Privacy",
    "Advertising Data",
    "Notifications",
    "Help Center",
    "Professional Community Policies",
    "Privacy Policy",
    "Accessibility",
    "Recommendation Transparency",
    "User Agreement",
    "End User License Agreement",
  ];

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {settingsItems.map((item, index) => (
        <li
          key={index}
          style={{
            padding: "10px 0",
            transition: "background-color 0.3s ease",
            ":hover": {
              backgroundColor: "#f5f5f5", 
            },
          }}
        >
          <Link
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            style={{ textDecoration: "none", color: "inherit", display: "block", padding: "5px 10px" }}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SettingsList;