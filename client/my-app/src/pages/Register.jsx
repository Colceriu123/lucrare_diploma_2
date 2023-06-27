import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../lib/auth";

const Register = () => {
  return (
    <div>
      {!isAuthenticated() ? <RegisterForm /> : <Navigate to={"/dashboard"} />}
    </div>
  );
};

export default Register;
