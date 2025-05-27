import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={project.articlePage} className="block border rounded-lg overflow-hidden hover:shadow-xl transition">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </Link>
  );
}
