import Rms from "./rms";
import "./assets/scss/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Rms />
      </Router>
    </>
  );
}

export default App;
