"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { SectionTitle } from '@/components/SectionTitle';

interface FormItem {
  _id: string;
  projectName: string;
  projectDescription: string;
  liveLink: string;
  img: string;
  name:string;
  surname:string;
  college:string;
  email:string
  branch:string;
  graduationStart:Date;
  githubLink:string

}

function App() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [formData, setFormData] = useState<FormItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://project-server-1-xkfw.onrender.com/fetch-form");
        setFormData(response.data);

        setTimeout(() => {
          sectionsRef.current = response.data.map((item: FormItem) =>
            document.getElementById(item.projectName.toLowerCase().replace(/ /g, "-"))
          );
        }, 0);
      } catch (error) {
        console.error("Error fetching form data:", error);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleScroll = (id: string, event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const section = sectionsRef.current.find((section) => section?.id === id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleDownload = (githubLink: string) => {
    const url = githubLink
    const extractedString = url.replace("https://github.com/", "").replace(".git", ""); // Remove .git extension if needed
    const link = document.createElement('a'); // Assuming you want to create an anchor element
    link.href = `https://github.com/${extractedString}/archive/refs/heads/main.zip`;
    link.download = `https://github.com/${extractedString}/archive/refs/heads/main.zip`; // Use the last part of the URL as the file name
    link.target = "_blank";
    link.click();
  };



  const handleScrollEvent = () => {
    const currentSection = sectionsRef.current.find((section) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-indigo-500 mx-auto"></div>
          <h1 className="text-2xl font-semibold text-gray-700 dark:text-white mt-6">Loading...</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300 mt-2">Please wait while we load your content.</p>
        </div>
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <main className="flex-grow">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar for larger screens */}
          <div className="lg:w-1/4">
            <ul className="hidden lg:flex fixed z-10 overflow-y-scroll flex-col justify-center list-none pl-6 sm:w-88">
              {formData.map((item) => (
                <li
                  key={item._id}
                  className={`my-3 font-medium text-xs uppercase cursor-pointer ${
                    activeSection === item.projectName.toLowerCase().replace(/ /g, "-")
                      ? "text-indigo-500"
                      : ""
                  }`}
                  onClick={(event) => handleScroll(item.projectName.toLowerCase().replace(/ /g, "-"), event)}
                >
                  {item.projectName.length > 30 ? `${item.projectName.substring(0, 30)}...` : item.projectName}
                </li>
              ))}
            </ul>
          </div>
          {/* Main content area */}
          <div className="flex-grow flex flex-col justify-center items-center pl-4 sm:pl-6 sm:px-10">
            {formData.map((item) => (
              <div
                key={item._id}
                id={item.projectName.toLowerCase().replace(/ /g, "-")}
                className="pt-8 sm:pt-12 lg:pt-18 lg:h-screen flex justify-center items-center pl-0 sm:pl-6"
              >
                <div className="project-wrapper w-full sm:w-11/12 flex flex-col sm:flex-row justify-center sm:items-center">
                  <div className="mt-5 sm:mt-0 sm:w-4/12 sm:pr-8">
                    <h2 className="uppercase font-black text-xl sm:text-2xl lg:text-3xl leading-170 pb-4">
                      {item.projectName}
                    </h2>
                    <p className="text-sm sm:text-lg leading-160">
                      {item.projectDescription}
                    </p>
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
                        onClick={() => handleDownload(item.githubLink)}  // Handle download
                        className="bg-indigo-600 text-white font-semibold text-sm sm:text-lg leading-none px-4 sm:px-6 py-2 rounded-md transition duration-300 hover:bg-gray-700"
                      >
                        Download
                      </button>

                      <div className="relative group">
                        <button className="bg-indigo-400 text-white font-semibold text-sm sm:text-lg leading-none px-4 sm:px-6 py-2 rounded-md transition duration-300">
                          Contact
                        </button>
                     
                   <div className="absolute z-50 top-full mt-2 w-72 bg-gray-800 text-white p-4 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <p><strong>Email:</strong> {item.email}</p>
                     <p><strong>Name:</strong> {item.name}</p>
                     <p><strong>Surname:</strong> {item.surname}</p>
                     <p><strong>College:</strong> {item.college}</p>
                     <p><strong>Branch:</strong> {item.branch}</p>
                     <p><strong>Graduation Start Date:</strong> {new Date(item.graduationStart).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                   </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:pl-1 sm:w-6/12 mt-4 sm:mt-0">
                    <div className="relative flex justify-center items-center" style={{ height: '40vh', width: '100%' }}>
                      <div
                        className="absolute inset-0 rounded-md"
                        style={{
                          backgroundColor: 'rgba(75, 0, 130, 0.6)',
                          filter: 'blur(30px)',
                          zIndex: 0,
                        }}
                      ></div>
                      <div className="image self-center flex flex-row z-10 w-full h-full rounded-md overflow-hidden">
                        <img
                          src={item.img}
                          className="object-contain z-20 w-full h-full rounded-md"
                          alt={item.projectName}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

