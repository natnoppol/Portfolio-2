import { Link } from "react-router-dom";
import { projects } from "../data/projects"; 
//react
import React from "react";

export default function ProjectList() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map(({ id, title, description, image, articlePage }) => (
          <Link
            key={id}
            to={articlePage}
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={image}
              alt={`${title} thumbnail`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
