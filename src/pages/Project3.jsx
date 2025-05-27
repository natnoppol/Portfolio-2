export default function Project3() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">JavaScript Frameworks Project</h1>
      <img src="/assets/jsfw-thumbnail.jpg" alt="Project Screenshot" className="mb-4 rounded-lg" />
      <p className="text-gray-700 mb-2">This project was built using React and integrated with the Noroff API.</p>

      <ul className="list-disc list-inside mb-4">
        <li><a href="https://live-project-link.com" target="_blank" className="text-blue-600 underline">Live Site</a></li>
        <li><a href="https://github.com/yourusername/jsfw-project" target="_blank" className="text-blue-600 underline">GitHub Repo</a></li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Reflections and Improvements</h2>
      <p>I improved form validation and added better accessibility based on teacher feedback. I also optimized images and made the UI responsive.</p>
    </div>
  );
}