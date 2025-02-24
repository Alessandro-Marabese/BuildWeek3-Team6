import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardProfile from "./components/CardProfile";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <CardProfile />
    </BrowserRouter>
  );
}

export default App;
