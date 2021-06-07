import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
export function Login() {
  return (
    <div>
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
                    <h1>Register</h1>
                  </div>
                </div>

                <form>
                  <div class="form-group">
                    <label> Email address </label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="verify_email"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label> Password </label>
                    <input
                      type="password"
                      name="password"
                      id="verify_password"
                      class="form-control"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  <div class="col-md-12 text-center">
                    <button
                      id="check_member"
                      type="submit"
                      class="btn btn-block mybtn tx-tfm"
                      style={{ backgroundColor: "#0b8cd5", color: "white" }}
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
    </div>
  );
}
