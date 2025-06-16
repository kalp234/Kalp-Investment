import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import Logo from "../images/logo-1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
  ];

  const servicesItems = [
    { name: "Mutual Funds", id: "Mutual Funds" },
    { name: "LIC Plans", id: "LIC Plans" },
    { name: "Mediclaim", id: "Mediclaim" },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    }

    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="navbar flex bg-[#e3e6f3] justify-between items-center p-5 md:p-0 lg:p-6 shadow-lg fixed top-0 left-0 z-[999] px-2 pr-4 md:pr-6 lg:pr-12 w-full">
      {/* Mobile Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown relative">
          <button
            onClick={toggleDropdown}
            className="btn btn-ghost lg:hidden md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {isOpen && (
           <ul className="menu menu-md dropdown-content border-2 border-gray-400 bg-[#e3e6f3] z-50 rounded-box mt-4 w-52 p-2 shadow absolute left-2">
           {links.map(({ id, link }, index) => (
             <li
               key={id}
               onClick={toggleDropdown}
               className={`hover:text-blue-600 cursor-pointer hover:scale-105 duration-200 font-semibold ${
                 index !== links.length - 1 || servicesItems.length > 0 ? "border-b border-gray-500" : ""
               }`}
             >
               {location.pathname === "/" ? (
                 <ScrollLink to={link} smooth duration={500} onClick={toggleDropdown}>
                   {link}
                 </ScrollLink>
               ) : (
                 <RouterLink to="/" onClick={toggleDropdown}>
                   {link}
                 </RouterLink>
               )}
             </li>
           ))}
         
           {servicesItems.map(({ name, id }, index) => (
             <li
               key={id}
               onClick={toggleDropdown}
               className={`hover:text-blue-600 cursor-pointer hover:scale-105 duration-200 font-semibold ${
                 index !== servicesItems.length  ? "border-b border-gray-500" : ""
               }`}
             >
               {location.pathname === "/" ? (
                 <ScrollLink to={id} smooth duration={500} onClick={toggleDropdown}>
                   {name}
                 </ScrollLink>
               ) : (
                 <RouterLink to="/" onClick={toggleDropdown}>
                   {name}
                 </RouterLink>
               )}
             </li>
           ))}
         
           <RouterLink
             to="/sip"
             onClick={toggleDropdown}
             className={`px-2 py-1 ml-[-3rem] rounded bg-transparent mt-[0.2rem] font-semibold`}
           >
             SIP Calculator
           </RouterLink>
         </ul>
         
          )}
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <RouterLink
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="btn btn-ghost text-xl flex items-center hover:bg-slate-300"
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-[6.2rem] md:h-[5.5rem] lg:h-[6.2rem] md:w-[6rem] lg:w-[9.2rem] w-50 md:pb-4 md:mt-[-0.2rem] pb-2 mt-[-0.2rem]"
            />
          </RouterLink>
        </div>
      </div>

      {/* Desktop Navbar Center */}
      <div className="navbar-center hidden md:flex font-medium" ref={servicesRef}>
        <ul className="menu menu-horizontal px-1 gap-[1px]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="font-semibold cursor-pointer hover:scale-105 duration-200 hover:bg-blue-600 hover:text-white rounded-md"
            >
              {location.pathname === "/" ? (
                <ScrollLink to={link} smooth duration={500}>
                  {link}
                </ScrollLink>
              ) : (
                <RouterLink to="/">{link}</RouterLink>
              )}
            </li>
          ))}

          {/* Desktop Services Dropdown */}
          <li
            className="relative font-semibold text-inherit"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`reset-focus hover:scale-105 duration-200 flex hover:bg-blue-600 hover:text-white items-center px-3 py-2 rounded-md ${
                servicesOpen ? "" : ""
              }`}
            >
              Services
              <svg
                className="w-4 h-4 ml-0 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {servicesOpen && (
             <ul className="absolute bg-[#e3e6f3] border-2 border-gray-500 shadow-md rounded-md mt-[2.2rem] ml-[-0.2rem] z-50 w-30">
             {servicesItems.map(({ name, id }, index) => (
               <li
                 key={id}
                 className={`${index !== servicesItems.length - 1 ? "border-b border-gray-500" : ""}`}
               >
                 <ScrollLink
                   to={id}
                   smooth
                   duration={500}
                   onClick={() => setServicesOpen(false)}
                   className="block px-4 pr-2 mr-2 my-1 py-1 cursor-pointer rounded hover:bg-blue-600 hover:text-white"
                 >
                   {name}
                 </ScrollLink>
               </li>
             ))}
           </ul>
           
            )}
          </li>
          <RouterLink
  to="/sip"
  className={`px-3 py-1 text-md rounded-md font-semibold mt-[0.3rem] text-inherit relative overflow-hidden transition-all duration-300 ease-in-out
    ${location.pathname === "/sip" ? " " : " hover:bg-blue-600 hover:text-white"}
  `}
>
  <span className="relative z-20">SIP Calculator</span>
</RouterLink>
        </ul>
      </div>

      {/* Contact Me Button */}
      <div className="navbar-end pr-2 md:pr-0">
        <RouterLink
          to="/contact-me"
          className="btn btn-primary bg-blue-600 text-white hover:bg-blue-600 hover:text-white  hover:scale-105 duration-200"
        >
          Contact Me
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
