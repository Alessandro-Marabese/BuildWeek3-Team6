import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Informazioni from "./components/Informazioni";
import Esperienza from "./components/Esperienza";
import Activity from "./components/Activity";
import Formazione from "./components/Formazione";
import Competenze from "./components/Competenze";

function App() {
  return (
    <>
      <Informazioni />
      <Activity />
      <Esperienza />
      <Formazione />
      <Competenze />
    </>
  );
}

export default App;
