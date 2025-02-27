import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Settings.css";

const SettingsHeader = () => {
  const navigate = useNavigate();
  const userprofile = useSelector((state) => state.profile.content);

  return (
    <>
      {console.log(userprofile)}

      <div className="settings-header-container">
        <button onClick={() => navigate(-1)} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" focusable="false">
            <path d="M2 12a1 1 0 01.29-.71L10.59 3l1.29 1.29L5.17 11H21v2H5.17l6.71 6.71L10.59 21l-8.3-8.29A1 1 0 012 12z"></path>
          </svg>
        </button>

        <img src={userprofile.image} alt="LinkedIn Logo" className="linkedin-logo" />

        <div className="profile-section">
          <img src={userprofile && userprofile.image} alt="Profile" className="profile-image" />

          <button onClick={() => alert("Help Center")} className="help-center-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" focusable="false">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.23c-4.538 0-8.23-3.692-8.23-8.23S7.462 3.77 12 3.77s8.23 3.692 8.23 8.23-3.692 8.23-8.23 8.23zM11 16h2v2h-2v-2zm5-6.75V10c0 1.657-1.343 2.875-3 2.875V14h-2v-1a2 2 0 012-2h.275a.85.85 0 00.85-.85v-1.3a.85.85 0 00-.85-.85h-2.55a.85.85 0 00-.85.85V10H8v-.75A3.25 3.25 0 0111.25 6h1.5A3.25 3.25 0 0116 9.25z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsHeader;
