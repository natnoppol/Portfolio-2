import React from "react";
import ProjectList from "../components/ProjectList";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Project Dashboard</h1>

      <ProjectList />

      <div className="mt-6">
        <a
          href="/reflections.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          <FiDownload size={20} />
          Download Reflections PDF
        </a>
      </div>
    </div>
  );
}
