import React, {useState} from 'react'
import './styles.css'

export function Signup() {
    const [formtype, setFormType] = useState('signup');
    return (
        <div>
            <div class="sidenav">
    <div class="login-main-text">
      <h2>
        Welcome to JADU<br />
        BLOGS
      </h2>
      <p>
        Here you get access to all the blogs of JADU fellowship program's first
        batch.<br />
        JADU is a Full-Stack Web Development program.
        <a href="https://docs.google.com/document/d/1P4mZqrziiRs6Cmp2Xy2j6nNYpYuSHIDvBUkNO5Mx8QY/edit"
          style={{color: 'black'}}>Know more</a>
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
                <h1>Register</h1>
              </div>
            </div>

            {formtype ==='signup' ?
            <form>
              <div class="form-group">
                <label> Name </label>
                <input type="name" name="name" class="form-control" id="name" placeholder="Enter name" />
              </div>
              <div class="form-group">
                <label> Email address </label>
                <input type="email" name="email" class="form-control" id="email" placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label> Password </label>
                <input type="password" name="password" id="password" class="form-control"
                  placeholder="Enter Password" />
              </div>

              <div class="col-md-12 text-center">
                <button id="add_user" type="submit" class="btn btn-block mybtn btn-primary tx-tfm"
                  style={{backgroundColor: '#0b8cd5', color:'white'}}>
                  Sign Up
                </button>
              </div>
              <div class="form-group"></div>
              <p class="text-center">
                <br />
                Already have an account?
                <a href="./login.html" id="signup">Log in here</a>
              </p>
      
          </form>
          :
          null}
        </div>
      </div>
    </div>
  </div>      
       </div> 
        </div>
    )
}
