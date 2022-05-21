import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login.png";



export default function Login() {
  return (
    <>
      <div className="login-wrapper">
        {/* <!-- blue circle background --> */}
        <div className="d-none d-md-block ball login bg-primary bg-gradient position-absolute rounded-circle"></div>

        {/* <!-- logo name --> */}
        <div className="position-absolute top-0 start-0 p-3">
          <Link to="/" className="text-decoration-none fw-bold fs-5">
            RMS HOME
          </Link>
        </div>

        {/* <!-- Login Section --> */}
        <div className="container login__form active">
          <div className="row vh-100 w-100 align-self-center">
            <div className="col-12 col-lg-6 col-xl-6 px-5">
              <div className="row vh-100">
                <div className="col align-self-center p-5 w-100">
                  <h3 className="fw-bolder">WELCOME BACK !</h3>
                  <p className="fw-lighter fs-6">
                    Don't have an account,{" "}
                    <span id="signUp" className="text-primary">
                      <Link to="/register">Register</Link>
                    </span>
                  </p>
                  {/* <!-- form login section --> */}
                  <form action="" className="mt-5">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Password
                      </label>
                      <div className="d-flex position-relative">
                        <input
                          type="password"
                          autoComplete="on"
                          className="form-control text-indent auth__password shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                        />
                        <span className="password__icon text-primary fs-4 fw-bold bi bi-eye-slash"></span>
                      </div>
                    </div>
                    <div className="col text-center">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg rounded-pill mt-4 w-100"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-6 col-xl-6 p-5">
              <div className="row vh-100 p-5">
                <div className="col align-self-center text-center">
                  <img src={login} className="bounce" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
