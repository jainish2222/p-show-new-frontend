"use client";
import React, { useState } from 'react';
import { SectionTitle } from '@/components/SectionTitle';

function MyForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('');
  const [graduationStart, setGraduationStart] = useState('');
  const [graduationEnd, setGraduationEnd] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [liveLink, setLiveLink] = useState('');
  const [file, setFile] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('college', college);
    formData.append('branch', branch);
    formData.append('graduationStart', graduationStart);
    formData.append('graduationEnd', graduationEnd);
    formData.append('projectName', projectName);
    formData.append('projectDescription', projectDescription);
    formData.append('githubLink', githubLink);
    formData.append('liveLink', liveLink);
    if (file) formData.append('file', file);
    formData.append('agreeTerms', agreeTerms);

    // Handle form submission logic here (e.g., send formData to an API)
    // console.log('email:', email);
    // console.log('name:', name);
    // console.log('surname:', surname);
    // console.log('college:', college);
    // console.log('branch:', branch);
    // console.log('graduationStart:', graduationStart);
    // console.log('graduationEnd:', graduationEnd);
    // console.log('projectName:', projectName);
    // console.log('projectDescription:', projectDescription);
    // console.log('githubLink:', githubLink);
    // console.log('liveLink:', liveLink);
    // console.log('file:', file);
    // console.log('agreeTerms:', agreeTerms);
    console.log("formdata is ",formData)
    
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <SectionTitle preTitle="FORM" title="Personal Information" />
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date start"
              value={graduationStart}
              onChange={(e) => setGraduationStart(e.target.value)}
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="relative">
            <input
              id="datepicker-range-end"
              name="end"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date end"
              value={graduationEnd}
              onChange={(e) => setGraduationEnd(e.target.value)}
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
        />
      </div>
      <div className="mb-5">
        <label htmlFor="githubLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GitHub Link</label>
        <input
          type="text"
          id="githubLink"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="https://github.com/username/repository"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
        />
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
        />
      </div>
      <div className="mb-5">
        <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload your file</label>
        <input
          type="file"
          id="file"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleFileChange}
        />
      </div>
      <div className="mb-5">
        <input
          type="checkbox"
          id="agreeTerms"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
        />
        <label htmlFor="agreeTerms" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">I agree to the terms and conditions</label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}

export default MyForm;
