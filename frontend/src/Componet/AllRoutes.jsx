import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Page/Dashboard";
import { Createproject } from "../Page/Createproject";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Createproject/:id" element={<Createproject/>} />
     
      </Routes>
    </div>
  );
};

