import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AddStudent() {
  const initialValues = {
    studentName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    course: "",
    semester: "",
  };

  const validationSchema = Yup.object().shape({
    studentName: Yup.string("Student Name must be string").required(
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
    phone: Yup.string()
      .min(10, "Enter valid number")
      .required("Phone number is required"),
    course: Yup.string().required("Please select course"),
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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //   console.log(errors,"errors")

  return (
    <>
      <h3>Add Students</h3>

      <form className="row g-3 mt-4" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="studentName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            placeholder="eg : Rohan Shahi"
            value={values.studentName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.studentName && errors.studentName ? (
            <small className="text-danger ms-2">{errors.studentName} *</small>
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
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.phone && errors.phone ? (
            <small className="text-danger ms-2">{errors.phone} *</small>
          ) : null}
        </div>
        <div className="col-md-6">
          <label htmlFor="course" className="form-label">
            Course
          </label>
          <select
            id="course"
            name="course"
            className="form-select"
            defaultValue="BCA"
            value={values.course}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            {/* <option selected>Choose...</option> */}
            <option>BCA</option>
            <option>CSIT</option>

            <option>BIT</option>
          </select>
          {touched.course && errors.course ? (
            <small className="text-danger ms-2">{errors.course} *</small>
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
            defaultValue="1st"
            value={values.semester}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            {/* <option selected>Choose Semeseter...</option> */}
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
