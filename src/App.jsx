//react
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/javascript-frameworks" element={<Project1 />} />
        <Route path="/project/semester-project-2" element={<Project2 />} />
        <Route path="/project/exam-project-2" element={<Project3 />} />
      </Routes>
    </Router>
  );
}
