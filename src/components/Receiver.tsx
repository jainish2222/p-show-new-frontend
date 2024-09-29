import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("https://share-server-tgzt.onrender.com");

const Receiver = () => {
  const [roomId, setRoomId] = useState("");
  const [fileShare, setFileShare] = useState({
    metadata: null,
    transmitted: 0,
    buffer: [],
  });
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isReceiving, setIsReceiving] = useState(false);
  const [receivedFileName, setReceivedFileName] = useState("");
  const [isFileReady, setIsFileReady] = useState(false);

  const randomIdGenerator = () => {
    return `${Math.trunc(Math.random() * 999)}-${Math.trunc(Math.random() * 999)}-${Math.trunc(Math.random() * 999)}`;
  };

  useEffect(() => {
    socket.on("fs-meta", (metadata) => {
      console.log("Received metadata:", metadata);
      setFileShare((prevFileShare) => ({
        ...prevFileShare,
        metadata,
        buffer: [],
        transmitted: 0,
      }));
      setDownloadProgress(0);
      setIsReceiving(true);
      setReceivedFileName(metadata.filename);
      setIsFileReady(false);
      socket.emit("fs-start", { uid: roomId });
    });

    socket.on("fs-share", (buffer) => {
      console.log("Buffer received:", buffer);
      setFileShare((prevFileShare) => {
        const newTransmitted = prevFileShare.transmitted + buffer.byteLength;
        const newBuffer = [...prevFileShare.buffer, buffer];
        const currentProgress = Math.trunc(
          (newTransmitted / prevFileShare.metadata.total_buffer_size) * 100
        );
        setDownloadProgress(currentProgress);

        if (newTransmitted === prevFileShare.metadata.total_buffer_size) {
          setIsReceiving(false);
          setIsFileReady(true);
        } else {
          socket.emit("fs-start", { uid: roomId });
        }

        return {
          ...prevFileShare,
          buffer: newBuffer,
          transmitted: newTransmitted,
        };
      });
    });

    return () => {
      socket.off("fs-meta");
      socket.off("fs-share");
    };
  }, [roomId]);

  const handleRoomJoin = () => {
    if (!roomId) {
      alert("Enter room ID to join");
      return;
    }

    const joinId = randomIdGenerator();
    socket.emit("receiver-join", { uid: joinId, sender_uid: roomId });
  };

  const handleDownload = () => {
    if (isFileReady && fileShare.metadata) {
      const blob = new Blob(fileShare.buffer);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileShare.metadata.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // Reset states after download
      setFileShare({ metadata: null, transmitted: 0, buffer: [] });
      setIsFileReady(false);
      setReceivedFileName("");
      setDownloadProgress(0);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
  <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">File Receiver</h2>

  <div className="mb-6 w-full">
    <label htmlFor="roomId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Enter Room ID
    </label>
    <input
      type="text"
      id="roomId"
      placeholder="Enter Room ID"
      value={roomId}
      onChange={(e) => setRoomId(e.target.value)}
      className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>

  <button
    onClick={handleRoomJoin}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
  >
    Connect
  </button>

  {isReceiving && (
    <div className="mt-4 w-full">
      <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${downloadProgress}%` }}
        />
      </div>
      <div className="text-center mt-1 text-gray-900 dark:text-gray-200">{downloadProgress}%</div>
      <div className="text-center mt-1 text-gray-900 dark:text-gray-200">
        Receiving: <span className="font-bold">{receivedFileName}</span>
      </div>
    </div>
  )}

  {isFileReady && (
    <div className="mt-4 w-full text-center">
      <p className="mb-2 text-gray-900 dark:text-gray-200">
        File received: <span className="font-bold">{receivedFileName}</span>
      </p>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
      >
        Download File
      </button>
    </div>
  )}
</div>

  );
};

export default Receiver;