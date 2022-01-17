import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Form } from "./Pages/Form";
import { Navbar } from "./Components/Navbar";
export const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/form/:id" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
};
