<<<<<<< HEAD

import SettingsHeader from "./SettingsHeader";
import SettingsList from "./SettingsList";
import SettingsFooter from "./SettingsFooter"; 
import "./Settings.css";
=======
import SettingsHeader from "./SettingsHeader";
import SettingsList from "./SettingsList";
import SettingsFooter from "./SettingsFooter";
>>>>>>> 4c869911e5bdcfe63ec6bf3f5df66e3c784e362e

const SettingsPage = () => {
  return (
    <div style={{ width: "500px", margin: "auto", padding: "20px" }}>
      <SettingsHeader />
      <hr style={{ border: "1px solid #e0e0e0", margin: "10px 0" }} />
      <SettingsList />
      <SettingsFooter />
    </div>
  );
};

export default SettingsPage;
