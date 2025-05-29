import React from "react";
import ProjectList from "../components/ProjectList";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-gradient-to-br from-indigo-50 via-white to-indigo-100 min-h-screen rounded-lg shadow-lg">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">
          Welcome to the Project Dashboard
        </h1>
        <p className="text-indigo-500 text-lg">
          Here you can explore all my projects and download reflections.
        </p>
      </header>

      <main>
        {/* Project List with card container */}
        <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
          <ProjectList />
        </section>

        {/* Download Reflections PDF Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/reflections.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            <FiDownload size={24} />
            Download Reflections PDF
          </a>
        </div>
      </main>
    </div>
  );
}
