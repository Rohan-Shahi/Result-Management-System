import axios from "axios";
import React, { useRef } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "./Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

export default function ManageClass() {
  const notifyDelete = () => toast.error("Class Deleted Successfully");
  const notifyUpdated = () => toast.success("Class updated Successfully");

  const [classroom, setClassroom] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState({
    id: "",
    branch: "",
    semester: "",
  });

  const submitRef = useRef(null);

  const validationSchema = Yup.object().shape({
    branch: Yup.string().required(),
    semester: Yup.string().required(),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    const id = values.id;
    delete values["id"];
    let res = await axios.patch(
      `https://result-management-system-v1.herokuapp.com/api/class/${id}/update`,
      { values }
    );
    if (res.status === 200) {
      setIsOpen(false);
      notifyUpdated();
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const getAllClass = async () => {
    let res = await axios.get(
      "https://result-management-system-v1.herokuapp.com/api/class/all"
    );
    setClassroom(res?.data?.data);
  };

  useEffect(
    () => async () => {
      getAllClass();
    },
    []
  );

  const handleEdit = (id, classData) => {
    setIsOpen(true);
    setInitialData({
      id,
      branch: classData.branch,
      semester: classData.semester,
    });
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let res = await axios.delete(
          `https://result-management-system-v1.herokuapp.com/api/class/${id}/delete`
        );
        if (res.data?.success) {
          notifyDelete();
          getAllClass();
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  //defining columns for class list

  const column = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Branch",
        accessor: "branch",
      },
      {
        Header: "Semester",
        accessor: "semester",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <>
            <AiFillEdit
              color=" #4CAF50"
              size={22}
              cursor="pointer"
              className="me-2"
              onClick={() => handleEdit(row.original.id, row.original)}
            />

            <AiFillDelete
              color="#d6352f"
              onClick={() => handleDelete(row.original.id)}
              size={22}
              cursor="pointer"
            />
          </>
        ),
      },
    ],
    []
  );
  return (
    <>
      <ToastContainer />

      <h5>Manage Classes</h5>
      {classroom.length > 0 ? (
        <Table columns={column} data={classroom} />
      ) : (
        <h2 className="mt-3">No Class to show</h2>
      )}

      {isOpen ? (
        <div>
          <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Edit Class</ModalHeader>
            <ModalBody>
              <Formik
                initialValues={initialData}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                
              >
                <Form>
                  <label htmlFor="branch">Branch</label>
                  <Field name="branch" type="text" className="form-control" />
                  <ErrorMessage name="branch">
                    {(msg) => (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {msg}*
                      </div>
                    )}
                  </ErrorMessage>

                  <br />

                  <label htmlFor="lastName">Semester</label>
                  <Field name="semester" type="text" className="form-control" />
                  <ErrorMessage name="semester">
                    {(msg) => (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {msg}*
                      </div>
                    )}
                  </ErrorMessage>

                  <button
                    type="submit"
                    ref={submitRef}
                    style={{ display: "none" }}
                  ></button>
                </Form>
              </Formik>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {
                  submitRef.current.click();
                }}
              >
                Update
              </Button>{" "}
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      ) : null}
    </>
  );
}
