import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        variant="contained"
      >
        Log out
      </Button>
    </div>
  );
};

export default Dashboard;
