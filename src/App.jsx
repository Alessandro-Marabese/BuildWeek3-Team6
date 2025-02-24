import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import SettingsPage from "./components/Settings/SettingsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import CardProfile from "./components/CardProfile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<CardProfile />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
