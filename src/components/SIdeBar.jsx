"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isRecentOpen, setIsRecentOpen] = useState(false);
  const [emails, setEmails] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isSkillExpanded, setIsSkillExpanded] = useState(true)
  const [error, setError] = useState("")
  const [isOpenAgent, setisOpenAgent] = useState(false)
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);

  const validateAndAddEmail = (email) => {
    // Reset error state
    setError("")

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return false
    }

    // Check for duplicate email
    if (emails.includes(email)) {
      setError("This email has already been added")
      return false
    }

    return true
  }

  const handleEmailSubmit = (e) => {
    if (e.key === "Enter" && inputValue) {
      if (validateAndAddEmail(inputValue)) {
        setEmails([...emails, inputValue])
        setInputValue("")
      }
    }
  }

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter(email => email !== emailToRemove))
  }

  return (
    <div className="hidden md:flex flex-col bg--white top-0">
  {/* Sidebar */}
  <button
      className={`text-gray-800 ${!isCollapsed ? "pt-4 pl-4 mb-2" : "pt-4 pl-0"} ${isCollapsed && "flex items-center justify-start"}`}
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${isCollapsed && "flex items-center justify-center"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  <div
    className={`bg-white text-gray-800 font-livvic h-screen p-3 ${isCollapsed ? "w-16" : "w-52"} transition-all duration-300 ease overflow-y-auto sidebar`}
  >
    {/* Hamburger Icon */}
    



        {/* Sidebar Content */}
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
            >
              <div className="flex flex-row items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="21"
                height="21"
                fill="#4B5563"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
                Home
              </span>
              </div>
            </a>
          </li>

          {/* Recent */}
          <li>
          <div
  onClick={() => setIsRecentOpen(!isRecentOpen)}
  className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"} cursor-pointer group`}
>
  <div className="flex flex-row items-center justify-start">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="#4a4a4a"
      className="group-hover:fill-black"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h6v-2h-4z"/>
    </svg>

    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm group-hover:text-black`}>
      Recent
    </span>
  </div>

  {!isCollapsed && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="#4a4a4a"
      className={`${isCollapsed ? "pl-0" : "pl-2"} transition-transform ${isRecentOpen ? "rotate-180" : ""} group-hover:fill-black`}
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  )}
</div>

            {isRecentOpen && !isCollapsed &&(
              <ul className="pl-7">
                <li>
                  <a
                    href="#"
                    className="block hover:bg-gray-200 p-1 rounded flex flex-row items-center justify-start text-sm"
                  >
                    Option 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:bg-gray-200 p-1 rounded flex flex-row items-center justify-start text-sm"
                  >
                    Option 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:bg-gray-200 p-1 rounded flex flex-row items-center justify-start text-sm"
                  >
                    Option 3
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Pinned */}
          <li>
            <div
              onClick={() => setIsPinnedOpen(!isPinnedOpen)}
              className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"} cursor-pointer group`}
            >
                <div className="flex flex-row items-center justify-start">
                    <svg
                        fill="#4B5563" // You can change this to your desired color like gray-600
                        height="21"
                        width="21"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 489.493 489.493"
                        xmlSpace="preserve"
                        className="group-hover:fill-black"
                        >
                        <path d="M485.322,117.705c12.204-12.238-3.274-47.577-34.636-78.93c-30.99-30.99-65.76-46.396-78.401-34.941l-0.246-0.236
                            l-173.715,156.02c-32.117-27.993-80.684-27.038-111.278,3.534c-5.149,5.157-8.051,12.146-8.051,19.437
                            c0,7.292,2.901,14.283,8.051,19.431l78.808,78.801L3.902,463.627c-5.148,5.799-5.262,14.655,0.015,20.601
                            c5.689,6.403,15.497,6.992,21.916,1.294l182.575-162.137l7.84,7.829l40.601,40.603l0,0l30.336,30.329
                            c5.15,5.147,12.139,8.039,19.424,8.039c7.278,0,14.272-2.898,19.419-8.056c30.561-30.573,31.524-79.158,3.539-111.27L484.771,118.03
                            C484.927,117.892,485.177,117.861,485.322,117.705z" />
                    </svg>
                    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm group-hover:text-black`}>
                        Pinned
                    </span>
                </div>
                 
              {!isCollapsed && (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="#4a4a4a"
                className={`${isCollapsed ? "pl-0" : "pl-2"} transition-transform ${isPinnedOpen ? "rotate-180" : ""} group-hover:fill-black`}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
              )}
            </div>
            {isPinnedOpen && !isCollapsed &&(
              <ul className="pl-7">
                <li>
                  <a
                    href="#"
                    className="block hover:bg-gray-200 p-2 rounded flex flex-row items-center justify-start text-sm"
                  >
                    Option 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:bg-gray-200 p-2 rounded flex flex-row items-center justify-start text-sm"
                  >
                    Option 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:bg-gray-200 p-2 rounded flex flex-row items-center justify-start text-sm"
                  >
                    Option 3
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        {!isCollapsed && (
            <p className="font-montserrat text-sm font-bold mt-6 p-1">My Work</p>
        )}
        <ul className="space-y-1">
        <li>
  <a
    href="#"
    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
  >
    <div className="flex flex-row items-center justify-start">
    <svg width="19" height="19" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16L12 14V10L13.6569 8.34314C15.1571 6.84285 16 4.80802 16 2.68629V0H13.3137C11.192 0 9.15714 0.842855 7.65685 2.34315L6 4H2L0 6L10 16ZM10.5 7C11.3284 7 12 6.32843 12 5.5C12 4.67157 11.3284 4 10.5 4C9.67157 4 9 4.67157 9 5.5C9 6.32843 9.67157 7 10.5 7Z" fill="#444" />
      <path d="M4.9274 13.7558L2.24423 11.0726L0 15L1 16L4.9274 13.7558Z" fill="#444" />
    </svg>
    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
      Sales Accelerator
    </span>
    </div>
  </a>
</li>


          {/* Recent */}
          <li>
          <div
  className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"} cursor-pointer group`}
>
  <div className="flex flex-row items-center justify-start">
  <svg width="21" height="21" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 5.75C9.91421 5.75 10.25 5.41421 10.25 5C10.25 4.58579 9.91421 4.25 9.5 4.25V5.75ZM4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75C5.91421 11.75 6.25 11.4142 6.25 11H4.75ZM9.5 4.25C9.08579 4.25 8.75 4.58579 8.75 5C8.75 5.41421 9.08579 5.75 9.5 5.75V4.25ZM18.75 11C18.75 11.4142 19.0858 11.75 19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11H18.75ZM10.25 5C10.25 4.58579 9.91421 4.25 9.5 4.25C9.08579 4.25 8.75 4.58579 8.75 5H10.25ZM8.75 11C8.75 11.4142 9.08579 11.75 9.5 11.75C9.91421 11.75 10.25 11.4142 10.25 11H8.75ZM9.5 11.75C9.91421 11.75 10.25 11.4142 10.25 11C10.25 10.5858 9.91421 10.25 9.5 10.25V11.75ZM5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75V10.25ZM9.5 10.25C9.08579 10.25 8.75 10.5858 8.75 11C8.75 11.4142 9.08579 11.75 9.5 11.75V10.25ZM19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25V11.75ZM6.25 11C6.25 10.5858 5.91421 10.25 5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11H6.25ZM20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25C19.0858 10.25 18.75 10.5858 18.75 11H20.25ZM9.5 4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25ZM4.75 9V11H6.25V9H4.75ZM9.5 5.75H15.5V4.25H9.5V5.75ZM15.5 5.75C17.2949 5.75 18.75 7.20507 18.75 9H20.25C20.25 6.37665 18.1234 4.25 15.5 4.25V5.75ZM18.75 9V11H20.25V9H18.75ZM8.75 5V11H10.25V5H8.75ZM9.5 10.25H5.5V11.75H9.5V10.25ZM9.5 11.75H19.5V10.25H9.5V11.75ZM4.75 11V15H6.25V11H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H15.5V18.25H9.5V19.75ZM15.5 19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75ZM20.25 15V11H18.75V15H20.25Z" fill="#000000"/>
</svg>


    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm group-hover:text-black`}>
      Dashboard
    </span>
  </div>

</div>

          </li>

          {/* Pinned */}
          <li>
            <div
              className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"} cursor-pointer group`}
            >
                <div className="flex flex-row items-center justify-start">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M14 5C14 4.44772 14.4477 4 15 4H19C19.5523 4 20 4.44772 20 5V9C20 9.55228 19.5523 10 19 10C18.4477 10 18 9.55228 18 9V6H15C14.4477 6 14 5.55228 14 5ZM4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L7.5 15.0858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L8.91421 16.5L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68342 20.0976 9.29289 19.7071L7.5 17.9142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L6.08579 16.5L4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.29289 13.2929ZM6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5ZM7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11C9.433 11 11 9.433 11 7.5C11 5.567 9.433 4 7.5 4ZM16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15ZM13 16.5C13 14.567 14.567 13 16.5 13C18.433 13 20 14.567 20 16.5C20 18.433 18.433 20 16.5 20C14.567 20 13 18.433 13 16.5ZM14 11C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z" fill="#000000"/>
</svg>

                    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm group-hover:text-black`}>
                        Activities
                    </span>
                </div>
                 

            </div>

          </li>
        </ul>
        {!isCollapsed && (
            <p className="text-sm font-bold font-montserrat mt-6 p-1">Customers</p>
        )}

        <ul className="space-y-1">
        <li>
  <a
    href="#"
    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
    >
        <div className="flex flex-row items-center justify-start">
        <svg width="24px" height="24px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path fill="#444" d="M4 9h4v2h-4v-2z"></path>
      <path fill="#444" d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path>
    </svg>

    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
      Accounts
    </span>
        </div>
    
  </a>
</li>

            <li>
                <a
                    href="#"
                    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
                    >
                    <div className="flex flex-row items-center justify-start">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.68629 2 6 4.68629 6 7C6 9.31371 8.68629 12 12 12C15.3137 12 18 9.31371 18 7C18 4.68629 15.3137 2 12 2ZM12 13C9.23858 13 6 15.2386 6 18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18C18 15.2386 14.7614 13 12 13Z" fill="#000000"/>
                    </svg>

                    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
                    Contacts
                    </span>
                    </div>
                </a>
            </li>


        </ul>

        {!isCollapsed && (
            <p className="text-md font-montserrat font-bold mt-6 p-1">Sales</p>
        )}
        <ul className="space-y-1">
        <li className="flex flex-row items-center">
          {!isCollapsed && (
            <div className="bg-blue-600 text-blue-600 border-blue-600 rounded-md mr-3">|</div>
          )}
  <a
    href="#"
    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
    >
        <div className="flex flex-row items-center justify-start">
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
      Leads
    </span>
        </div>
    
  </a>
</li>

            <li>
                <a
                    href="#"
                    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
                    >
                    <div className="flex flex-row items-center justify-start">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.68629 2 6 4.68629 6 7C6 9.31371 8.68629 12 12 12C15.3137 12 18 9.31371 18 7C18 4.68629 15.3137 2 12 2ZM12 13C9.23858 13 6 15.2386 6 18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18C18 15.2386 14.7614 13 12 13Z" fill="#000000"/>
                    </svg>

                    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
                    Opportunities
                    </span>
                    </div>
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
                    >
                    <div className="flex flex-row items-center justify-start">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11C21 9.57143 23 9.57143 23 8.07792C23 6.93032 22.1222 6 21 6C20.0532 6 19.2256 6.66222 19 7.55844M21 13V13.01M6.5 21.0001H17.5C18.8807 21.0001 20 19.8808 20 18.5001C20 14.4194 14 14.5001 12 14.5001C10 14.5001 4 14.4194 4 18.5001C4 19.8808 5.11929 21.0001 6.5 21.0001ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
                    Competitors
                    </span>
                    </div>
                </a>
            </li>


        </ul>

        {!isCollapsed && (
            <p className="text-md font-montserrat font-bold mt-6 p-1">Collateral</p>
        )}
        <ul className="space-y-1">
        <li>
  <a
    href="#"
    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
    >
        <div className="flex flex-row items-center justify-start">
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.18 8.03933L18.6435 7.57589C19.4113 6.80804 20.6563 6.80804 21.4241 7.57589C22.192 8.34374 22.192 9.58868 21.4241 10.3565L20.9607 10.82M18.18 8.03933C18.18 8.03933 18.238 9.02414 19.1069 9.89309C19.9759 10.762 20.9607 10.82 20.9607 10.82M18.18 8.03933L13.9194 12.2999C13.6308 12.5885 13.4865 12.7328 13.3624 12.8919C13.2161 13.0796 13.0906 13.2827 12.9882 13.4975C12.9014 13.6797 12.8368 13.8732 12.7078 14.2604L12.2946 15.5L12.1609 15.901M20.9607 10.82L16.7001 15.0806C16.4115 15.3692 16.2672 15.5135 16.1081 15.6376C15.9204 15.7839 15.7173 15.9094 15.5025 16.0118C15.3203 16.0986 15.1268 16.1632 14.7396 16.2922L13.5 16.7054L13.099 16.8391M13.099 16.8391L12.6979 16.9728C12.5074 17.0363 12.2973 16.9867 12.1553 16.8447C12.0133 16.7027 11.9637 16.4926 12.0272 16.3021L12.1609 15.901M13.099 16.8391L12.1609 15.901" stroke="#1C274C" strokeWidth="1.5"/>
<path d="M8 13H10.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M8 9H14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M8 17H9.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157M21 14C21 17.7712 21 19.6569 19.8284 20.8284M4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284M19.8284 20.8284C20.7715 19.8853 20.9554 18.4796 20.9913 16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
      Quotes
    </span>
        </div>
    
  </a>
</li>

            <li>
                <a
                    href="#"
                    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
                    >
                    <div className="flex flex-row items-center justify-start">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6.00002V6.75002H18.75V6.00002H18ZM15.7172 2.32614L15.6111 1.58368L15.7172 2.32614ZM4.91959 3.86865L4.81353 3.12619H4.81353L4.91959 3.86865ZM5.07107 6.75002H18V5.25002H5.07107V6.75002ZM18.75 6.00002V4.30604H17.25V6.00002H18.75ZM15.6111 1.58368L4.81353 3.12619L5.02566 4.61111L15.8232 3.0686L15.6111 1.58368ZM4.81353 3.12619C3.91638 3.25435 3.25 4.0227 3.25 4.92895H4.75C4.75 4.76917 4.86749 4.63371 5.02566 4.61111L4.81353 3.12619ZM18.75 4.30604C18.75 2.63253 17.2678 1.34701 15.6111 1.58368L15.8232 3.0686C16.5763 2.96103 17.25 3.54535 17.25 4.30604H18.75ZM5.07107 5.25002C4.89375 5.25002 4.75 5.10627 4.75 4.92895H3.25C3.25 5.9347 4.06532 6.75002 5.07107 6.75002V5.25002Z" fill="#1C274D"/>
<path d="M8 12H16" stroke="#1C274D" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M8 15.5H13.5" stroke="#1C274D" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M4 6V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V14M4 6V5M4 6H17C18.6569 6 20 7.34315 20 9V10" stroke="#1C274D" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

                    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
                    Orders
                    </span>
                    </div>
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
                    >
                    <div className="flex flex-row items-center justify-start">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11C21 9.57143 23 9.57143 23 8.07792C23 6.93032 22.1222 6 21 6C20.0532 6 19.2256 6.66222 19 7.55844M21 13V13.01M6.5 21.0001H17.5C18.8807 21.0001 20 19.8808 20 18.5001C20 14.4194 14 14.5001 12 14.5001C10 14.5001 4 14.4194 4 18.5001C4 19.8808 5.11929 21.0001 6.5 21.0001ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
                    Invoices
                    </span>
                    </div>
                </a>
            </li>

            <li className="pb-10" onClick={() => setisOpenAgent(true)}>
                <a
                    href="#"
                    className={`block hover:bg-gray-200 p-2 rounded flex flex-row items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
                    >
                    <div className="flex flex-row items-center justify-start">
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z" fill="#000000"/>
</svg>

                    <span className={`${isCollapsed ? "hidden" : "inline"} ${isCollapsed ? "pl-0" : "pl-2"} text-sm`}>
                      Agent Skill
                    </span>
                    </div>
                </a>
            </li>


        </ul>

      </div>

      {isOpenAgent && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl p-6 relative mx-4">
        <button
          onClick={() => setisOpenAgent(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          {/* Agent Skill Section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img src="/copilot.jpeg" alt="Copilot" style={{ width: 20, height: 24, objectFit: 'contain'}}/>
              </div>
              <h2 className="text-lg font-semibold text-black">Agent skill</h2>
            </div>
            
            <div 
              className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded"
              onClick={() => setIsSkillExpanded(!isSkillExpanded)}
            >
              <span className="text-sm text-gray-600">
                Check if on-hand inventory will allow all sales orders to ship without delay
              </span>
              {isSkillExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            
            {isSkillExpanded && (
              <div className="mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                <p className="mb-2">When <span className="text-blue-500">any vendor</span> sends an email with changes to <span className="text-blue-500">confirmed purchase orders</span>, check if the resulting</p>
                <p className="mb-2"><span className="text-blue-500">on-hand inventory</span> will allow <span className="text-blue-500">all sales orders</span> to <span className="text-blue-500">ship without delay</span>. If so,</p>
                <p><span className="text-blue-500">update the purchase order</span> to reflect the change.</p>
              </div>
            )}
          </div>

          {/* Email Access Section */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Enable email access</h3>
            <p className="text-sm text-gray-600 mb-4">
              Allow the agent to access email inboxes to read mail from known vendors
            </p>2
            
            <div className="space-y-3">
              <div>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                    setError("") // Clear error when typing
                  }}
                  onKeyDown={handleEmailSubmit}
                  className={`w-full ${error ? 'border-red-500' : ''} text-gray-600`}
                />
                {error && (
                  <p className="text-sm text-red-500 mt-1">{error}</p>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {emails.map((email) => (
                  <div
                    key={email}
                    className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    <span>{email}</span>
                    <button
                      onClick={() => removeEmail(email)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setisOpenAgent(false)}>
              Close
            </Button>
            <Button onClick={() => setisOpenAgent(false)}>
              Activate
            </Button>
          </div>
        </div>
      </div>
    </div>
      )}

    </div>
  );
}
