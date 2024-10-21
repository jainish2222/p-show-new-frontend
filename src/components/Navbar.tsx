"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const navigation = [
    "Projects",
    "Videocall",
    "ShareFile",
    "form",
    "Aboutus",
    "Contact",
  ];
  const { data: session }: any = useSession();
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                    <i className="fa-solid fa-p"></i>
                    </span>
                    <Image
                  src="/img/image.png"
                  alt="P"
                  width="32"
                  height="32"
                  className="w-8"
                />
                    <span>-Show</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={`/api/v1/${item}`} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                  {!session ? (
            <>
              <Link href="/login" className="px-6 py-2 mr-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Login
              </Link>
              <Link href="/register" className="px-6 py-2 ml-2 mr-4 text-white bg-indigo-600 rounded-md md:ml-5">
                Register
              </Link>
              <ThemeChanger />
            </>
          ) : (
            <>
   <div>
      <p
        className="text-indigo-600 text-lg mt-1 mr-4 animate-glow"
        onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
        onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when not hovering
      >
        <Link
          className="block text-center hover:underline mt-2"
          href="/api/v1/yourproject"
        >
          @{session.user?.email.split('@')[0]}
        </Link>
      </p>
      {showTooltip && (
        <div className="absolute bg-gray-700 text-white text-sm rounded p-2 mt-4">
          See your Project and you can also delete it.
        </div>
      )}
    </div>

      <div className="flex space-x-4">
        <button 
          onClick={() => signOut()}
          className="bg-indigo-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Logout
        </button>
        <ThemeChanger />
      </div>
    </>
          )}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={`/api/v1/${menu}`} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* ccccccccccccccccccccccccccccccccccccccc */}
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
        {!session ? (
            <>
              <Link href="/login" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Login
              </Link>
              <Link href="/register" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Register
              </Link>
              <ThemeChanger />
            </>
          ) : (
            <>
   <div>
      <p
        className="text-indigo-600 text-lg mt-1 mr-3 animate-glow"
        onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
        onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when not hovering
      >
        <Link
          className="block text-center hover:underline mt-2"
          href="/api/v1/yourproject"
        >
          @{session.user?.email.split('@')[0]}
        </Link>
      </p>
      {showTooltip && (
        <div className="absolute bg-gray-700 text-white text-sm rounded p-2 mt-4">
          See your Project and you can also delete it.
        </div>
      )}
    </div>

      <div className="flex space-x-4">
        <button 
          onClick={() => signOut()}
          className="bg-indigo-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Logout
        </button>
        <ThemeChanger />
      </div>
    </>
          )}
        </div> 
      </nav>
    </div>
  );
}

