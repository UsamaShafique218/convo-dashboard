import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function Auth() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="">
 
        <Outlet /> 
    </div>
  );
}
