import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateClass() {
  //for toast msg
  const notify = () => toast.success("Class Created Successfully");

  const initialValues = {
    branch: "",
    semester: "",
  };

  const validationSchema = Yup.object().shape({
    branch: Yup.string().required(),
    semester: Yup.string().required(),
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
          "https://result-management-system-v1.herokuapp.com/api/class/add",
          values
        );
        notify();
        console.log(res);
        resetForm();
      } catch (e) {
        alert(e);
      }
    },
  });
  return (
    <>
      <ToastContainer />
      <h3>Create Class</h3>

      <form className="row g-3 mt-4" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="branch" className="form-label">
            Branch
          </label>
          <input
            type="text"
            className="form-control"
            id="branch"
            name="branch"
            placeholder="eg : BCA, CSIT"
            value={values.branch}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.branch && errors.branch ? (
            <small className="text-danger ms-2">{errors.branch} *</small>
          ) : null}
        </div>
        <div className="col-md-6">
          <label htmlFor="semester" className="form-label">
            Semester
          </label>
          <input
            type="text"
            className="form-control"
            name="semester"
            id="semester"
            placeholder="eg: 1,2,3,4,.. in string"
            value={values.semester}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.semester && errors.semester ? (
            <small className="text-danger ms-2">{errors.semester} *</small>
          ) : null}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success">
            Create
          </button>

          <button
            type="reset"
            onClick={resetForm}
            className="btn btn-danger ms-2"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
