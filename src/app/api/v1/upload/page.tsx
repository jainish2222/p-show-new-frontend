"use client"
import React, { useState } from "react";
import axios from "axios";

const UploadFolder = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });
    formData.append("folderName", "my-folder"); // Customize folder name

    try {
      const response = await axios.post("http://localhost:5000/upload-folder", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Files uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <h1>Upload Folder</h1>
      <input type="file" multiple  onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadFolder;
