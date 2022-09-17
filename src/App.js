import logo from "./logo.png";
import "./App.css";
import FormJsx from "./components/elements/form.js";
import Result from "./components/elements/result.js";
import Intro from "./components/elements/intro.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main className="App-header main-container">
          <img src={logo} className="App-logo" alt="logo" />
          <Intro />
          <FormJsx />
          <Result />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
