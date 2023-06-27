import { Navigate } from "react-router-dom";

import { isAuthenticated } from "../lib/auth";

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
