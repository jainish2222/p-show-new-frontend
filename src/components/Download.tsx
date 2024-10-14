import React from 'react';
import axios from 'axios';

const DownloadFile = () => {
    const downloadFile = async () => {
        try {
            const response = await axios({
                url: 'http://localhost:5000/download', // Your backend endpoint
                method: 'GET',
                responseType: 'blob', // Important for handling file downloads
            });

            // Create a link element to trigger the file download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'filename.js'); // File name for download
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    };

    return (
        <div>
            <button onClick={downloadFile}>Download File from GitHub</button>
        </div>
    );
};

export default DownloadFile;
