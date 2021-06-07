import logo from "./logo.svg";
import "./App.css";
import { Signup } from "./components/Signup";
import {Login} from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/home"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
