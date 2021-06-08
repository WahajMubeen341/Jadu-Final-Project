import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import {Home} from './Home'
import fire from './fire';
export function Login() {
  const [user, setUser] =useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
    
    const clearInputs = () =>{
        setEmail('');
        setPassword('');
    }

    const clearErrors= () =>{
        setEmailError('');
        setPasswordError('');
    }
    
    //login
    const handleLogin = () => {
        clearErrors();
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

    const handleSignup = () => {
        clearErrors();
        fire.auth().createUserWithEmailAndPassword(email,password).
        catch(err => {
            switch(err.code){
                case "auth/ email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;   
            }
        })

    };

    const handleLogout = () =>{
        fire.auth().signOut();
    };

    const authListener = ()=>{
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            }
            else{
                setUser('');
            }
        })
    };


    useEffect(()=>{
        authListener();

    },[])

  return (
    <div>
        {user ? (
            <Home/> )
            :
            (
        <>
      <div class="sidenav">
        <div class="login-main-text">
          <h2>
            Welcome to JADU
            <br />
            BLOGS
          </h2>
          <p>
            Here you get access to all the blogs of JADU fellowship program's
            first batch.
            <br />
            JADU is a Full-Stack Web Development program.
            <a
              href="https://docs.google.com/document/d/1P4mZqrziiRs6Cmp2Xy2j6nNYpYuSHIDvBUkNO5Mx8QY/edit"
              style={{ color: "black" }}
            >
              Know more
            </a>
          </p>

          <p>Login or register from here to get access.</p>
        </div>
      </div>

      <div class="main">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="myform">
                <div class="logo mb-3">
                  <div class="col-md-12 text-center">
                    <h1>Login</h1>
                  </div>
                </div>

                <form>
                  <div class="form-group">
                    <label> Email address </label>
                    <input
                      type="email"
                      name="email"
                      autoFocus
                      class="form-control"
                      id="verify_email"
                      value={email}
                      onChange={(e)=> {setEmail(e.target.value)}}
                      placeholder="Enter email"
                      required
                    />
                    <p style={{color:'red'}}>{emailError}</p>
                  </div>
                  <div class="form-group">
                    <label> Password </label>
                    <input
                      type="password"
                      name="password"
                      id="verify_password"
                      class="form-control"
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                      placeholder="Enter Password"
                      required
                    />
                    <p style={{color:'red'}}>{passwordError}</p>
                  </div>
                  <div class="col-md-12 text-center">
                    <button
                      id="check_member"
                      type="submit"
                      class="btn btn-block mybtn tx-tfm"
                      style={{ backgroundColor: "#0b8cd5", color: "white" }}
                      onClick={handleLogin}
                    >
                      Log In
                    </button>
                  </div>
                  <div class="form-group">
                    <p class="text-center">
                      <br />
                      <a href="#">Forgot password</a>
                      <br />
                      Don't have an account?
                      <br /> <br />
                      <Button
                        component={Link}
                        to="/"
                        variant="outlined"
                        type="Button"
                      >
                        Sign up here
                      </Button>
                      {/* <a component={Link} to="/"  id="signup">Sign up here</a> */}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
          </>
            )}
    </div>
  );
}
