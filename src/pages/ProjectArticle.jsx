import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectArticle() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p>Sorry, we couldn’t find the project you’re looking for.</p>
        <Link
          to="/"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-block mt-8 text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full max-w-3xl mb-4 rounded shadow"
        loading="lazy"
      />
      <p className="mb-6">{project.description}</p>

      <section className="prose max-w-none">
        <h2>Reflections & Improvements</h2>
        <p>
          Here I reflect on the development process, challenges I faced, and
          improvements made based on feedback.
        </p>
        <h3>Live Site & Repository</h3>

        <div className="flex flex-wrap gap-4 mt-2">
           {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              <FaExternalLinkAlt /> Live Site
            </a>
          )}
         {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded transition"
            >
              <FaGithub /> GitHub Repo
            </a>
          )}
        </div>
      </section>

      
    </main>
  );
}
