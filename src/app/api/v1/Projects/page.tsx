"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { SectionTitle } from "@/components/SectionTitle"; // Assuming this is a valid import

// Define the interface for form items
interface FormItem {
  _id: string;
  projectName: string;
  projectDescription: string;
  liveLink: string;
  img: string;
  name: string;
  surname: string;
  college: string;
  email: string;
  branch: string;
  graduationStart: Date;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get("http://localhost:5000/fetch-form");
=======
        const response = await axios.get("https://pshow1.onrender.com/fetch-form");
>>>>>>> aa3cc2550d7f9b1c75338df2e22da8e109f450b7
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownload = (githubLink: string) => {
    const repoPath = githubLink.replace("https://github.com/", "").replace(".git", "");
    const downloadUrl = `https://github.com/${repoPath}/archive/refs/heads/main.zip`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = downloadUrl;
    link.click();
  };

  // Filter form data based on search term
  const filteredData = formData.filter(item => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.projectName.toLowerCase().includes(searchLower) ||
      item.projectDescription.toLowerCase().includes(searchLower) ||
      item.name.toLowerCase().includes(searchLower) ||
      item.surname.toLowerCase().includes(searchLower) ||
      item.college.toLowerCase().includes(searchLower) ||
      item.branch.toLowerCase().includes(searchLower)||
      item.email.toLowerCase().includes(searchLower)
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-indigo-500 mx-auto"></div>
          <h1 className="text-2xl font-semibold text-gray-700 dark:text-white mt-6">Loading...</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300 mt-2">Please wait while we load your content.</p>
        </div>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <main className="flex-grow">
        <div className="flex">
          {/* Sidebar for larger screens */}
          <div className="lg:w-1/6 w-[7%]">
            <ul className="hidden lg:flex fixed z-10 flex-col justify-center list-none pl-6">
              {filteredData.map((item) => (
                <li
                  key={item._id}
                  className="my-3 font-medium text-xs uppercase cursor-pointer hover:text-indigo-500 transition-colors"
                >
                  <a href={`#${item.projectName.toLowerCase().replace(/ /g, "-")}`}>
                    {item.projectName.length > 30 ? `${item.projectName.substring(0, 30)}...` : item.projectName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main content area */}
          <div className="flex-grow flex flex-col justify-center items-center w-full px-4 sm:px-1">
            {/* Search Input */}
            <div className="w-full mb-4">
            <input
  type="text"
  placeholder="Search projects..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-80 max-w-xs border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 mx-auto block"
/>

            </div>
            {filteredData.map((item) => (
              <section
                key={item._id}
                id={item.projectName.toLowerCase().replace(/ /g, "-")}
                className="pt-8 sm:pt-12 lg:pt-18 lg:h-screen flex justify-center items-center"
              >
                <div className="project-wrapper w-full sm:w-11/12 flex flex-col sm:flex-row justify-center sm:items-center">
                  <div className="mt-5 sm:mt-0 sm:w-full sm:pr-8">
                    <h2 className="uppercase font-black text-xl sm:text-2xl lg:text-3xl leading-170 pb-4">
                      {item.projectName}
                    </h2>
                    <p className="text-sm sm:text-lg leading-160">{item.projectDescription}</p>
                    <div className="text-sm pt-8 flex items-center space-x-2 sm:space-x-4 mb-8">
                      <a
                        href={item.liveLink}
                        rel="noreferrer noopener"
                        target="_blank"
                        className="no-underline bg-indigo-950 text-white font-bold text-sm sm:text-lg leading-none px-4 sm:px-6 py-2 rounded-md transition duration-300 hover:bg-gray-700"
                      >
                        Open App
                      </a>

                      <button
                        onClick={() => handleDownload(item.githubLink)}
                        className="bg-indigo-600 text-white font-semibold text-sm sm:text-lg leading-none px-4 sm:px-6 py-2 rounded-md transition duration-300 hover:bg-gray-700"
                      >
                        Download
                      </button>

                      <div className="relative group">
                        <button className="bg-indigo-400 text-white font-semibold text-sm sm:text-lg leading-none px-4 sm:px-6 py-2 rounded-md transition duration-300">
                          Contact
                        </button>

                        <div className="absolute z-50 top-full mt-2 w-72 bg-gray-800 text-white p-4 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p>
                            <strong>Email:</strong> {item.email}
                          </p>
                          <p>
                            <strong>Name:</strong> {item.name}
                          </p>
                          <p>
                            <strong>Surname:</strong> {item.surname}
                          </p>
                          <p>
                            <strong>College:</strong> {item.college}
                          </p>
                          <p>
                            <strong>Branch:</strong> {item.branch}
                          </p>
                          <p>
                            <strong>Graduation Start Date:</strong>{" "}
                            {new Date(item.graduationStart).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:pl-1 sm:w-full mt-4 sm:mt-0">
                    <div className="relative flex justify-center items-center w-full">
                      <div
                        className="absolute inset-0 rounded-md"
                        style={{
                          backgroundColor: "rgba(75, 0, 130, 0.6)",
                          filter: "blur(30px)",
                          zIndex: 0,
                        }}
                      ></div>
                      <div className="image self-center flex flex-row z-10 w-full h-auto rounded-md overflow-hidden">
                        <img
                          src={item.img}
                          className="object-contain z-20 w-full h-full rounded-md"
                          alt={item.projectName}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
