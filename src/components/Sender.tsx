import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("https://share-server-tgzt.onrender.com");

const Sender = () => {
  const [roomId, setRoomId] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [receiverId, setReceiverId] = useState(null);
  const [progress, setProgress] = useState(0);

  const randomIdGenerator = () => {
    return `${Math.trunc(Math.random() * 999)}-${Math.trunc(Math.random() * 999)}-${Math.trunc(Math.random() * 999)}`;
  };

  const createRoom = () => {
    const newRoomId = randomIdGenerator();
    setRoomId(newRoomId);
    socket.emit("sender-join", { uid: newRoomId });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const shareFile = () => {
    if (!selectedFile || !receiverId) return;

    const reader = new FileReader();
    reader.onload = function () {
      let buffer = new Uint8Array(reader.result);
      const metadata = {
        filename: selectedFile.name,
        total_buffer_size: buffer.length,
        buffer_size: 2048,
      };

      socket.emit("file-meta", { uid: receiverId, metadata });
      let offset = 0; // Keep track of the offset to send chunks

      // Send chunks until the whole file is sent
      const sendChunk = () => {
        if (offset < buffer.length) {
          let chunk = buffer.slice(offset, offset + metadata.buffer_size);
          offset += chunk.length;

          socket.emit("file-raw", { uid: receiverId, buffer: chunk });
          setProgress(Math.round((offset / metadata.total_buffer_size) * 100));

          // Call sendChunk again for the next chunk
          setTimeout(sendChunk, 100); // Delay for better control
        }
      };

      sendChunk(); // Start sending chunks
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  useEffect(() => {
    socket.on("init", (uid) => {
      setReceiverId(uid);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("init");
    };
  }, []);

  return (
<div className="p-6 rounded-lg shadow-md flex flex-col items-center " style={{ boxShadow: '0px 0px 10px rgba(67, 56, 202, 0.7)' }}>
  <h2 className="text-2xl font-semibold text-indigo-600 mb-4">File Sender</h2>
  <button
    onClick={createRoom}
    className="mb-4 px-4 py-2  rounded bg-indigo-500 hover:bg-blue-600 transition duration-200"
  >
    Create Room
  </button>
  <div className="mb-4 text-lg text-gray-800 dark:text-gray-200 ">
    Room ID: <span className="font-bold dark:text-cyan-300 text-cyan-800">{roomId}</span>
  </div>

  <input
    type="file"
    onChange={handleFileSelect}
    className="mb-4 border border-gray-300 dark:border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-200"
  />
  {selectedFile && (
    <button
      onClick={shareFile}
      className="px-4 py-2 bg-green-500  rounded hover:bg-green-600 transition duration-200"
    >
      Share File
    </button>
  )}

  <div className="mt-4 text-lg ">
    Progress: <span className="font-bold ">{progress}%</span>
  </div>
</div>

  );
};

export default Sender;
