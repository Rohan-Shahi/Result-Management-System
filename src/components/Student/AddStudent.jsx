import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function AddStudent() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone_number: "",
    gender: "",
    branch: "",
    semester: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string("Student Name must be string").required(
      "Student name is required"
    ),
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string("Password not valid")
      .min("6", "Minimum 6 chars required")
      .required("Password is required"),
    address: Yup.string("Address must be string").required(
      "Address is required"
    ),
    phone_number: Yup.string()
      .min(10, "Enter valid number")
      .required("Phone number is required"),
    branch: Yup.string().required("Please select branch"),
    gender: Yup.string().required("Please select Gender"),
    semester: Yup.string().required("Please select Semester"),
  });

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        let res = await axios.post(
          "https://result-management-system-v1.herokuapp.com/api/users/add",
          values
        );
        console.log(res);
      } catch (e) {
        alert(e);
      }
    },
  });

  return (
    <>
      <h3>Add Students</h3>

      <form className="row g-3 mt-4" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="eg : Rohan Shahi"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.name && errors.name ? (
            <small className="text-danger ms-2">{errors.name} *</small>
          ) : null}
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="eg: rohanshahi516@gmail.com"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.email && errors.email ? (
            <small className="text-danger ms-2">{errors.email} *</small>
          ) : null}
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.password && errors.password ? (
            <small className="text-danger ms-2">{errors.password} *</small>
          ) : null}
        </div>
        <div className="col-md-6">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="eg: Kalopul"
            name="address"
            value={values.address}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.address && errors.address ? (
            <small className="text-danger ms-2">{errors.address} *</small>
          ) : null}
        </div>

        <div className="col-md-6">
          <label htmlFor="phone_number" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            name="phone_number"
            value={values.phone_number}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.phone_number && errors.phone_number ? (
            <small className="text-danger ms-2">{errors.phone_number} *</small>
          ) : null}
        </div>

        <div className="col-md-6">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="form-select"
            value={values.gender}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option selected value="none">
              Choose Gender...
            </option>

            <option>Male</option>
            <option>FeMale</option>

            <option>Other</option>
          </select>
          {touched.gender && errors.gender ? (
            <small className="text-danger ms-2">{errors.gender} *</small>
          ) : null}
        </div>

        <div className="col-md-6">
          <label htmlFor="branch" className="form-label">
            Branch
          </label>
          <select
            id="branch"
            name="branch"
            className="form-select"
            defaultValue="BCA"
            value={values.branch}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option selected value="none">
              Choose Branch...
            </option>

            <option>BCA</option>
            <option>CSIT</option>

            <option>BIT</option>
          </select>
          {touched.branch && errors.branch ? (
            <small className="text-danger ms-2">{errors.branch} *</small>
          ) : null}
        </div>
        <div className="col-md-6">
          <label htmlFor="semester" className="form-label">
            Semester
          </label>
          <select
            id="semester"
            name="semester"
            className="form-select"
            value={values.semester}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option selected value="none">
              Choose Semeseter...
            </option>
            <option>1st</option>
            <option>2nd</option>

            <option>3rd</option>
            <option>4th</option>
            <option>5th</option>
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
          </select>
          {touched.semester && errors.semester ? (
            <small className="text-danger ms-2">{errors.semester} *</small>
          ) : null}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add Student
          </button>

          <button
            type="reset"
            onClick={resetForm}
            className="btn btn-primary ms-2"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
