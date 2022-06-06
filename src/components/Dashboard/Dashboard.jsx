import React, { useState, useContext, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";

import AuthContext from "../../context/AuthProvider";

export default function Dashboard() {
  const { auth } = useContext(AuthContext);
  console.log(auth);

  const navigate = useNavigate();

  //redirecting user if there is no accessToken

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/login-admin");
      alert("You are not allowed");
    }
  }, []);

  //Just for toggling the navbar
  const [togglee, setToggle] = useState(false);
  const [toggleClass, setToggleClass] = useState(true);
  const [toggleStudent, setToggleStudent] = useState(true);
  const [toggleSubject, setToggleSubject] = useState(true);
  const [toggleResult, setToggleResult] = useState(true);

  //handle logout function

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className={`sidebar ${togglee ? "" : "close"}`}>
        <div className="logo-details">
          <i className="bi bi-bootstrap-reboot"></i>
          <span className="logo_name">RMS</span>
        </div>
        <ul className="nav-links">
          {auth.isAdmin ? (
            <>
              <li>
                <Link to="/dashboard">
                  <i className="bx bx-grid-alt"></i>
                  <span className="link_name">Dashboard</span>
                </Link>
              </li>
              <li className={`${toggleClass ? "" : "showMenu"}`}>
                <div
                  className="iocn-link"
                  onClick={() => {
                    setToggleClass(!toggleClass);
                  }}
                >
                  <a href="/">
                    <i className="bi bi-file-person"></i>
                    <span className="link_name ">Classes</span>
                  </a>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu ">
                  <li>
                    <Link to="/dashboard/create-class">Create Class</Link>
                  </li>
                  <li>
                    <a href="/">Manage Class</a>
                  </li>
                </ul>
              </li>
              <li className={`${toggleStudent ? "" : "showMenu"}`}>
                <div
                  className="iocn-link "
                  onClick={() => {
                    setToggleStudent(!toggleStudent);
                  }}
                >
                  <a href="/">
                    <i className="bi bi-people-fill"></i>
                    <span className="link_name ">Students</span>
                  </a>
                  <i className="bx bxs-chevron-down arrow "></i>
                </div>
                <ul className="sub-menu ">
                  <li>
                    {/* <a href="/">Add Students</a> */}
                    <Link to="/dashboard/add-student">Add Students</Link>
                  </li>
                  <li>
                    <a href="/">Manage Students</a>
                  </li>
                </ul>
              </li>

              <li className={`${toggleSubject ? "" : "showMenu"}`}>
                <div
                  className="iocn-link"
                  onClick={() => {
                    setToggleSubject(!toggleSubject);
                  }}
                >
                  <a href="/">
                    <i className="bx bx-book"></i>
                    <span className="link_name">Subjects</span>
                  </a>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <a href="/">Add Subjects</a>
                  </li>
                  <li>
                    <a href="/">Manage Subjects</a>
                  </li>
                </ul>
              </li>

              <li className={`${toggleResult ? "" : "showMenu"}`}>
                <div
                  className="iocn-link"
                  onClick={() => {
                    setToggleResult(!toggleResult);
                  }}
                >
                  <a href="/">
                    <i className="bx bx-file"></i>
                    <span className="link_name">Results</span>
                  </a>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <a href="/">Add Result</a>
                  </li>
                  <li>
                    <a href="/">Manage Result</a>
                  </li>
                </ul>
              </li>
            </>
          ) : null}

          <li>
            <div className="profile-details">
              <div className="profile-content">
                {/* <!--<img src="image/profile.jpg" alt="profileImg">--> */}
              </div>
              <div className="name-job">
                <div className="profile_name">{auth.email}</div>
                <div className="job">{auth.user}</div>
              </div>
              <i className="bx bx-log-out" onClick={handleLogout}></i>
            </div>
          </li>
        </ul>
      </div>

      {/* Outlet section */}

      <section className="home-section">
        <div className="home-content">
          <i
            className="bx bx-menu"
            onClick={() => {
              setToggle(!togglee);
            }}
          ></i>

          <div className="content">
            {auth.accessToken ? <Outlet /> : navigate("/login-admin")}
            {/* <Outlet/> */}
          </div>
        </div>
      </section>
    </>
  );
}
