import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Use BrowserRouter instead of Router
import HomePage from "./components/HomePage";
import SettingsPage from "./components/Settings/SettingsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import CardProfile from "./components/CardProfile";
import "./App.css";
import SuggestedPeople from "./components/SuggestedPeople";
import SuggestedPeopleDesktop from "./components/SuggestedPeopleDesktop";
import MyNavBar from "./components/MyNavBar";
import EditProfileImage from "./components/EditProfileImage";
import EditProfile from "./components/EditProfle";

function App() {
  const mylocation = useLocation();
  return (
    <>
      {mylocation.pathname === "/settings" ||
      mylocation.pathname === "/edit-profile" ||
      mylocation.pathname === "/edit-profile-image" ? null : (
        <MyNavBar />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={
            <div className="container-fluid container-lg px-0">
              <div className="row">
                <div className=" col-lg-8 col-12 pe-0">
                  <div className="profile-card mb-3">
                    <CardProfile />
                  </div>

                  <div className="profile-card d-lg-none mb-3">
                    <div className="suggested-container">
                      <SuggestedPeople />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <SuggestedPeopleDesktop />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/profile/:idOther"
          element={
            <div className="container-fluid container-lg px-0">
              <div className="row">
                <div className=" col-lg-8 col-12 pe-0">
                  <div className="profile-card mb-3">
                    <CardProfile />
                  </div>

                  <div className="profile-card d-lg-none mb-3">
                    <div className="suggested-container">
                      <SuggestedPeople />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <SuggestedPeopleDesktop />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/edit-profile-image" element={<EditProfileImage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
