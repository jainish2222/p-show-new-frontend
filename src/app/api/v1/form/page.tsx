"use client";
import React, { useState,useEffect } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Container } from "@/components/Container";
import Link from "next/link";
import toast from "react-hot-toast";

function MyForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [graduationStart, setGraduationStart] = useState("");
  const [graduationEnd, setGraduationEnd] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [img, setImg] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [showGithubLink, setShowGithubLink] = useState(true); 
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      setEmail(session.user?.email || ""); // Safely set email
    }
  }, [session]); 

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const handleFileChange2 = (event) => {
    if (event.target.files.length > 0) {
      setFile2(event.target.files[0]);
    }
  };

  const toggleInput = () => {
    setShowGithubLink((prev) => !prev); // Toggle input visibility
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading state

    try {
      if (!file) {
        toast.error("Please upload an image");
        setLoading(false); // Reset loading state
        return;
      }

      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "project_file");
      formData.append("cloud_name", "dqfkbkx7k");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqfkbkx7k/image/upload",
        formData
      );

      if (response.data.secure_url) {
        const imgUrl = response.data.secure_url;
        setImg(imgUrl);

        // Submit form data to your backend
        const res = await fetch("http://localhost:5000/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            surname,
            college,
            branch,
            graduationStart,
            graduationEnd,
            projectName,
            projectDescription,
            githubLink,
            liveLink,
            img: imgUrl,
            agreeTerms,
          }),
        });

        if (res.ok) {
          setLoading(true)
          alert("Your project has been uploaded successfully");
        } else {
          alert("You cannot upload the project with the same email ID. Please use a different email ID to proceed.");
          setLoading(false)
        }
      } else {
        alert("Your project image was not uploaded to our database. Please re-upload the entire project to proceed.");
      }
    } catch (error) {
      alert("We are sorry for the inconvenience caused on our side. We are aware of the issue and are fixing it very soon.");
      toast.error("An error occurred during form submission.");
    } finally {
      setLoading(false); 
      // Reset loading state
    }
  };

  if (status === "loading") {
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

  if (!session) {
    return (
      <Container>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center p-5 max-w-xl mx-auto">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
              Kindly log in to submit your project
            </h1>
            <p className="text-lg mb-4 dark:text-white">Click the button below to log in.</p>
            <Link href="/login" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Login
            </Link>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
    <SectionTitle preTitle="FORM" title="Personal Information" />
    <div className="mb-5">
      {/* <img src={img} alt="" />// */}
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
      <input
        type="text"
        id="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
    <div className="mb-5">
      <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname</label>
      <input
        type="text"
        id="surname"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        required
      />
    </div>

    <div className="mb-5">
      <label htmlFor="college" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your college</label>
      <select
        id="college"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        required
      >
        <option>C.K. Pithawalla College of Engineering and Technology</option>
        <option>Sarvajanik College of Engineering & Technology (SCET)</option>
        <option>Bhagwan Mahavir College of Engineering and Technology</option>
        <option>P.P. Savani University</option>
        <option>Smt. S.R. Patel Engineering College</option>
        <option>Umiya College of Engineering</option>
        <option>Shree Ramkrishna Institute of Computer Education and Applied Sciences</option>
        <option>Sardar Patel College of Engineering</option>
        <option>Sardar Patel Institute of Technology</option>
        <option>R.K. College of Engineering and Technology</option>
      </select>
    </div>
    <div className="mb-5">
      <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your branch</label>
      <select
        id="branch"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        required
      >
        <option>Computer Engineering</option>
        <option>Information Technology</option>
        <option>Civil Engineering</option>
        <option>Mechanical Engineering</option>
        <option>Electrical Engineering</option>
        <option>Electronics and Communication Engineering</option>
        <option>Instrumentation and Control Engineering</option>
        <option>Chemical Engineering</option>
        <option>Structural Engineering</option>
        <option>Environmental Engineering</option>
        <option>Automobile Engineering</option>
        <option>Production Engineering</option>
        <option>Textile Engineering</option>
        <option>Industrial Engineering</option>
        <option>Bio-Medical Engineering</option>
        <option>Software Engineering</option>
        <option>Data Science</option>
        <option>Artificial Intelligence and Machine Learning</option>
        <option>Cloud Computing</option>
        <option>Cybersecurity</option>
        <option>Embedded Systems</option>
        <option>Mobile Computing</option>
      </select>
    </div>
    <div className="mb-5">
      <label htmlFor="graduation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Graduation (dd-mm-yyy)</label>
      <div id="date-range-picker" className="flex items-center">
        <div className="relative">
          <input
            id="datepicker-range-start"
            name="start"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date start"
            value={graduationStart}
            onChange={(e) => setGraduationStart(e.target.value)}
            required
          />
        </div>
        <span className="mx-4 text-gray-500">to</span>
        <div className="relative">
          <input
            id="datepicker-range-end"
            name="end"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date end"
            value={graduationEnd}
            onChange={(e) => setGraduationEnd(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
    <SectionTitle preTitle="--------------------------------------------" title="Project Information" />
    <div className="mb-5">
      <label htmlFor="projectName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
      <input
        type="text"
        id="projectName"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        required
      />
    </div>
    <div className="mb-5">
      <label htmlFor="projectDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
      <textarea
        id="projectDescription"
        rows="4"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your project description here..."
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        required
      />
    </div>
    <div>
      <div className="mb-5">
        <label className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <input
            type="checkbox"
            checked={showGithubLink}
            onChange={toggleInput}
            className="mr-2"
          />
          {showGithubLink ? 'untick if you do not use github' : 'Upload Project File'}
        </label>
      </div>

      {showGithubLink ? (
        <div className="mb-5">
          <label htmlFor="githubLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            GitHub Link
          </label>
          <input
            type="text"
            id="githubLink"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://github.com/username/repository"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            required={showGithubLink}
          />
        </div>
      ) : (
        <div className="mb-5">
          <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload your project file
          </label>
          <input
            type="file"
            id="file"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleFileChange2}
            required={!showGithubLink} // Ensure one is required
          />
        </div>
      )}
    </div>
    <div className="mb-5">
      <label htmlFor="liveLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Live Link</label>
      <input
        type="text"
        id="liveLink"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="https://live-link.com"
        value={liveLink}
        onChange={(e) => setLiveLink(e.target.value)}
        // required
      />
    </div>
    <div className="mb-5">
      <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload your project image</label>
      <input
      type="file"
      id="file"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={handleFileChange}
      required
    />
    </div>

    <div className="mb-5">
      <input
        type="checkbox"
        id="agreeTerms"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        checked={agreeTerms}
        onChange={(e) => setAgreeTerms(e.target.checked)}
        required
      />
      <label htmlFor="agreeTerms" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">I agree to the terms and conditions</label>
    </div>

    <button
        type="submit"
        className={`w-full bg-indigo-600 text-white rounded-lg py-2.5 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
         {loading ? "Submitting..." : "Submit"}
      </button>
  </form>
  );
}

export default MyForm;
