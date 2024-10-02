"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {SectionTitle} from '@/components/SectionTitle' ;
function App() {
  const [activeSection, setActiveSection] = useState("");
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionsRef = useRef([]); // Ref to store section elements

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://project-server-1-xkfw.onrender.com/fetch-form");
        setFormData(response.data);

        // Ensure all elements are loaded before setting them in the ref
        setTimeout(() => {
          sectionsRef.current = response.data.map((item) =>
            document.getElementById(item.projectName.toLowerCase().replace(/ /g, "-"))
          );
        }, 0); // Slight delay to ensure elements are in the DOM
      } catch (error) {
        console.error("Error fetching form data:", error);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleScroll = (id, event) => {
    event.preventDefault(); // Prevent default link behavior
    const section = sectionsRef.current.find((section) => section?.id === id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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

  if (loading) return (
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
  
  if (error) return <div>{error}</div>

  return (
      <div className="flex flex-row justify-center items-center">
        <main>
          <div>
            <div className="w-3/10">
              <ul className="hidden fixed z-10 v-screen overflow-y-scroll flex flex-col justify-center list-none pl-6 sm:w-88 sm:flex">
                {formData.map((item) => (
                  <li
                    key={item._id}
                    className={`my-3 font-medium text-xs uppercase cursor-pointer ${
                      activeSection === item.projectName.toLowerCase().replace(/ /g, "-")
                        ? "text-indigo-500"
                        : ""
                    }`}
                    onClick={(event) =>
                      handleScroll(item.projectName.toLowerCase().replace(/ /g, "-"), event)
                    }
                  >
                   {item.projectName.length > 30 
          ? `${item.projectName.substring(0, 30)}...`
          : item.projectName}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center px-10 sm:px-20">
              {formData.map((item) => (
                <div
                  key={item._id}
                  id={item.projectName.toLowerCase().replace(/ /g, "-")}
                  className="pt-18 sm:pt-navbar sm:h-screen flex justify-end items-center fullpage section pl-7"
                >
                  <div className="project-wrapper sm:w-5/6 flex flex-col-reverse sm:flex-row justify-center sm:items-center">
                    <div className="mt-20 sm:mt-0 sm:w-4/10 sm:pr-16">
                      <h2 className="uppercase font-black text-3xl leading-170 pb-12">
                        {item.projectName}
                      </h2>
                      <p className="text-1.5xl text-gray sm:text-base leading-160">
                        {item.projectDescription}
                      </p>
                      <div className="text-sm pt-16 flex items-center space-x-4 mb-10">
                        <a
                          href={item.liveLink}
                          rel="noreferrer noopener"
                          target="_blank"
                          className="no-underline flex flex-row max-w-[200px] bg-indigo-600 inline-block font-bold text-1.5xl sm:text-base text-white leading-none px-14 py-10 sm:py-5 border-solid border-black border-1"
                        >
                          Open App
                        </a>     
                      </div>
                    </div>
<<<<<<< HEAD
                    <div className="flex sm:pl-1 sm:w-7/10">
                      <div className="image self-center flex flex-row z-10 w-[400px] h-[250px]">
                        <img
                          src={item.img} // Correctly access the image URL from data
                          className="object-contain z-20"
                          alt={item.projectName}
                        />
                        <div className="hidden sm:block w-100 h-148 self-end"></div>
                      </div>
=======
                  </div>
                  <div className="flex sm:pl-1 sm:w-7/10">
                    <div className="image self-center flex flex-row z-10  w-[400px] h-[250px]">
                      <img
                        src={item.img}
                        className="object-contain z-20"
                        alt={item.projectName}
                      />
                      <div className="hidden sm:block w-100 h-148 self-end"></div>
>>>>>>> 9abcf62fe07c6555b6da3e26674a0f31974e9497
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
