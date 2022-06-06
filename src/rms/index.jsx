import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/Home";
import AdminLogin from "../components/Login/AdminLogin";

import StudentLogin from "../components/Login/StudentLogin";
import AddStudent from "../components/Student/AddStudent";
import CreateClass from "../components/StudentClass/CreateClass";

export default function Rms() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login-admin" element={<AdminLogin />} />
      <Route path="/login-student" element={<StudentLogin />} />

      {/* These routes needs to be protected */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="create-class" element={<CreateClass/>}/>
        <Route path="add-student" element={<AddStudent/>}/>
      </Route>

      <Route path="*" element={<h3>No Routes Found !</h3>} />
    </Routes>
  );
}
