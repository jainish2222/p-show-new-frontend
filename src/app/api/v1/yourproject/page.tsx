"use client";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { useSession } from "next-auth/react";

// Define the structure of a project object
interface Project {
  id: string; // or number, depending on your backend implementation
  img: string;
  projectName: string;
  projectDescription: string;
}

// Define the structure of the session data
interface Session {
  user: {
    email: string;
  };
}

// Define the main component
const App: React.FC = () => {
  // Step 1: Define the initial project data and loading state
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession() as { data: Session | null; status: string };

  // Only fetch projects when the session is authenticated
  const email = session?.user?.email || ""; // Replace with the actual email for fetching projects

  // Step 2: Function to fetch projects from the server
  const fetchProjects = async () => {
    try {
      setLoading(true);
      if (email) {
        const response = await axios.get<Project[]>(`http://localhost:5000/fetch-projects/${email}`);
        setProjects(response.data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Function to delete a project
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/delete-project/${id}`);
      fetchProjects(); // Refetch projects after deletion
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("An error occurred because no project is created by you.");
    }
  };

  // Step 4: Fetch projects only when the session is authenticated
  useEffect(() => {
    if (status === "authenticated") {
      fetchProjects();
    }
  }, [status, email]); // Run this effect when the session status or email changes

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-indigo-500 mx-auto"></div>
          <h1 className="text-2xl font-semibold text-gray-700 dark:text-white mt-6">Loading...</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300 mt-2">
            Please wait while we load your content.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8 text-indigo-700 shadow-md text-center">My Projects</h1>
      <div className="space-y-6 w-full max-w-lg">
        {/* Step 5: Render the project list */}
        {projects.map((project) => (
          <div key={project.id} className="border dark:bg-indigo-100 border-indigo-300 p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src={project.img} // Use the image URL from the project data
              alt={project.projectName}
              className="object-cover rounded-lg mb-4 mx-auto w-full h-48 md:h-64" // Responsive width and height
            />
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{project.projectName}</h2>
            <p className="text-gray-600 mb-4 text-sm md:text-base">{project.projectDescription}</p>
            <button
              className="mt-2 bg-indigo-600 text-white hover:bg-indigo-700 font-semibold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
              onClick={() => handleDelete(project.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
