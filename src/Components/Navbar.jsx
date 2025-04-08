import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Services" },
    { id: 4, link: "Mutual Funds" },
    { id: 5, link: "LIC Plans" },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="navbar flex bg-[#e3e6f3] justify-between items-center p-5 md:p-6 shadow-lg fixed top-0 left-0 z-[999] px-2 pr-4 md:pr-12  w-full">
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
            <ul className="menu menu-md dropdown-content bg-zinc-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute left-0">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  onClick={toggleDropdown}
                  className="hover:text-blue-600 cursor-pointer hover:scale-105 duration-200"
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
            </ul>
          )}
        </div>
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
              className="h-[5.3rem] md:w-[10.5rem] w-50"
            />
          </RouterLink>
        </div>
      </div>

      <div className="navbar-center hidden md:flex font-medium">
        <ul className="menu menu-horizontal px-1 gap-[1px]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="hover:text-blue-600 font-semibold cursor-pointer hover:scale-105 duration-200"
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
        </ul>
      </div>

      <div className="navbar-end">
        <RouterLink
          to="/contact-me"
          className="btn btn-primary bg-blue-600 text-white hover:bg-blue-800 hover:text-white hover:scale-105 duration-200"
        >
          Contact Me
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
