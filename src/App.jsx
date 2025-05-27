import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//react
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectArticle from "./pages/ProjectArticle";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectArticle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
