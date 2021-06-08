import React, {useState, useEffect} from "react";
import "./App.css";
import { Signup } from "./components/Signup";
import {Login} from "./components/Login";
import {Home} from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fire from './components/fire';

function App() {

  const [user, setUser] =useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

   //login
   const handleLogin = () => {
   // clearErrors();
    console.log("email ", email);
    console.log("password ", password);
    fire.auth().signInWithEmailAndPassword(email,password).
    catch(err => {
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
                setEmailError(err.message);
                break;
            case "auth/wrong-password":
                setPasswordError(err.message);
                break;   
        }
    })
};


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
          <Route exact path="/Home">
            <Home/>
          </Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
