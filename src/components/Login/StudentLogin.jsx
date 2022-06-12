import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import register from "../../assets/images/register.png";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email")
      .max("255", "Email is too long")
      .required("Email is required"),
    password: Yup.string("Password not valid")
      .min("6", "Minimum 6 chars required")
      .required("Password is required"),
  });

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        let res = await axios.post(
          "https://result-management-system-v1.herokuapp.com/api/users/login",
          values
        );
        localStorage.setItem("credentials", JSON.stringify(res?.data?.data));
        navigate("/dashboard");
        resetForm();
      } catch (e) {
        alert(e);
      }

      setSubmitting(false);
    },
  });
  return (
    <>
      {/* <!-- Register Section --> */}
      <div className="register-wrapper">
        <div className="d-none d-md-block ball register bg-primary bg-gradient position-absolute rounded-circle"></div>

        {/* <!-- logo name --> */}
        <div className="position-absolute top-0 start-0 p-3">
          <Link to="/" className="text-decoration-none fw-bold fs-5">
            RMS HOME
          </Link>
        </div>

        <div className="container register__form">
          <div className="row vh-100 w-100 align-self-center">
            <div className="d-none d-lg-block col-lg-6 col-xl-6 p-5">
              <div className="row vh-100 p-5">
                <div className="col align-self-center pt-4 me-5 text-center ">
                  <img src={register} className="bounce" alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 px-5">
              <div className="row vh-100">
                <div className="col align-self-center p-5 w-100">
                  <h3 className="fw-bolder">WELCOME STUDENT!</h3>
                  <p className="fw-lighter fs-6">
                    Admin ?,{" "}
                    <span id="signIn" role="button" className="text-primary">
                      <Link to="/login-admin">Login</Link>
                    </span>
                  </p>
                  {/* <!-- form register section --> */}
                  <form action="" className="mt-5" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                        placeholder="name@example.com"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {touched.email && errors.email ? (
                        <small className="text-danger ms-2">
                          {errors.email} *
                        </small>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Password
                      </label>
                      <div className="d-flex position-relative">
                        <input
                          type="password"
                          autoComplete="on"
                          name="password"
                          className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        {/* <span className="password__icon text-primary fs-4 fw-bold bi bi-eye-slash"></span> */}
                      </div>
                      {touched.password && errors.password ? (
                        <small className="text-danger ms-2">
                          {errors.password} *
                        </small>
                      ) : null}
                    </div>
                    <div className="col text-center">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg rounded-pill mt-4 w-100"
                        disabled={isSubmitting}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
