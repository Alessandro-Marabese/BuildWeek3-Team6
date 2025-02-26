import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Use BrowserRouter instead of Router
import HomePage from "./components/HomePage";
import SettingsPage from "./components/Settings/SettingsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import CardProfile from "./components/CardProfile";
import "./App.css";
import SuggestedPeople from "./components/SuggestedPeople";
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
            <>
              <CardProfile />
              <SuggestedPeople />
            </>
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
