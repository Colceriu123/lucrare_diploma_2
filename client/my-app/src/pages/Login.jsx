import React from "react";
import LoginForm from "../components/LoginForm";
import { isAuthenticated } from "../lib/auth";
import { Navigate } from "react-router-dom";

const Login = () => {
  return (
    <div>
      {!isAuthenticated() ? <LoginForm /> : <Navigate to={"/dashboard"} />}
    </div>
  );
};

export default Login;
