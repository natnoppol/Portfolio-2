
import React from "react";
import ProjectList from "../components/ProjectList";


export default function Home() {
  return (
      <div className="p-4 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Project Dashboard</h1>
        <ProjectList />
    </div>
  );
}
