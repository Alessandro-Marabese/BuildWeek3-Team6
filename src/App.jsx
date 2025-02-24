import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Informazioni from "./component/Informazioni";
import Esperienza from "./component/Esperienza";
import Activity from "./component/Activity";
import Formazione from "./component/Formazione";
import Competenze from "./component/Competenze";
import Contatti from "./component/Contatti";

function App() {
  return (
    <>
      <Informazioni />
      <Activity />
      <Esperienza />
      <Formazione />
      <Competenze />
      <Contatti />
    </>
  );
}

export default App;
