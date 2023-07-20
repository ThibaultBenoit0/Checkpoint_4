import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddEvent from "../pages/AddEvent";
import ModifyEvent from "../pages/ModifyEvent";
import CardDetails from "../pages/CardDetails";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddEvent />} />
      <Route path="/modify/:id" element={<ModifyEvent />} />
      <Route path="/:id" element={<CardDetails />} />
    </Routes>
  );
}

export default Router;
