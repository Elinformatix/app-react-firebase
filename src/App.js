import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/cadastro">Cadastro</Link>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/login">Login</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>|{" "}
          <Link to="/marcosrivasr">Profile</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
