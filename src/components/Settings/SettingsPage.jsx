import SettingsHeader from "./SettingsHeader";
import SettingsList from "./SettingsList";
import SettingsFooter from "./SettingsFooter"; 
import "./Settings.css";

const SettingsPage = () => {
  return (
    <div style={{ width: "100%", padding: "20px", backgroundColor: "white" }}>
      <SettingsHeader />
      <hr style={{ border: "1px solid #e0e0e0", margin: "10px 0" }} />
      <SettingsList />
      <SettingsFooter />
    </div>
  );
};

export default SettingsPage;
