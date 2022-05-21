import React from "react";
import showcase from "../../assets/images/showcase.svg";
import { GiSpeedBoat } from "react-icons/gi";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* homepage navbar */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand">
            Result Management System
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Get Started
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Go to Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* show case */}

      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 mt-5 text-center ">
        <div className="container text-sm-start">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                What is<span className="text-warning"> RMS ? </span>
              </h1>
              <p className="lead my-4">
                The main objective of the Result Management System is to manage
                the details of Result,Pogress,Student,Course,Exam. It manages
                all the information about Result, Activity, Exam, Result.
              </p>
              <button className="btn btn-primary btn-sm">
                <Link to="register" className="nav-link">
                  Register Here
                </Link>
              </button>

              <button className="btn btn-success ms-2 btn-sm">
                <Link to="login" className="nav-link">
                  Login Here
                </Link>
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={showcase}
              alt="showcase image"
            />
          </div>
        </div>
      </section>

      {/* Box section */}
      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <MdVisibility />
                  </div>
                  <h3 className="card-title mb-3">Accurate Insight</h3>
                  <p className="card-text">
                    The online system can generate a student report with
                    analytics reports which will provide the weakness of the
                    student.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <GiSpeedBoat />
                  </div>
                  <h3 className="card-title mb-3">Faster Results</h3>
                  <p className="card-text">
                    With an online system, the test results are calculated
                    automatically and then results are ready to view or email
                    within minutes.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <BsFileEarmarkCheckFill />
                  </div>
                  <h3 className="card-title mb-3">Error Free</h3>
                  <p className="card-text">
                    While handling the manual exam papers, there is a high
                    chance of losing them, damaging them due to situations.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
