"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuid } from 'uuid';
import useUser from '@/hooks/useUser';

const Home = () => {
  const { fullName, setFullName } = useUser();
  const [roomID, setRoomID] = useState('');
  const router = useRouter();

  useEffect(() => {
    setFullName('');
  }, []);

  return (
    <div className="mt-20 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <img className="mx-auto h-24 w-auto" src="/img/image.png" alt="Logo" />
          <h1 className="text-4xl font-extrabold text-gray-700 sm:text-5xl md:text-6xl">
            Have a smooth meeting
          </h1>
          <h2 className="mt-2 text-3xl font-extrabold text-indigo-700 sm:text-4xl md:text-5xl">
            with team members
          </h2>
          <p className="mt-3 text-xl text-gray-300">
          Live code share & discuss: Stream your code & collaborate.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <input
            type="text"
            required
            className="appearance-none rounded-lg relative block  dark:text-blue-100 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-purple-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Enter your name"
            onChange={(e) => setFullName(e.target.value)}
          />

          {fullName && fullName.length >= 3 && (
            <>
              <div className="flex items-center">
                <input
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border dark:text-blue-100 border-gray-300 placeholder-gray-500  text-purple-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter room ID to join a meeting"
                  value={roomID}
                  onChange={(e) => setRoomID(e.target.value)}
                />
                <button
                  onClick={() => router.push(`/api/v1/room/${roomID}`)}
                  disabled={!roomID}
                  className="ml-3 relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Join
                </button>
              </div>
              <div className="text-center">
                <button
                  onClick={() => router.push(`/api/v1/room/${uuid()}`)}
                  className="font-medium text-indigo-300 hover:text-indigo-200 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Or create a new meeting
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;