"use client"
import React from "react";
import axios from "axios";

const DownloadFolder = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:5000/download-folder/my-folder", {
        responseType: "blob", // Important for downloading files
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "my-folder.zip"); // File name
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error(error);
      alert("Download failed!");
    }
  };

  return (
    <div>
      <h1>Download Folder</h1>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadFolder;
