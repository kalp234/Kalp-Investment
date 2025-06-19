import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Logo from "../images/logo-1.png";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile dropdown
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false); // desktop dropdown
  const location = useLocation();
  const navigate = useNavigate();
  const servicesRef = useRef(null);

  const links = ["Home", "About", "Services"];
  const servicesItems = [
    { name: "Mutual Funds", id: "Mutual Funds" },
    { name: "LIC Plans", id: "LIC Plans" },
    { name: "Mediclaim", id: "Mediclaim" },
  ];

  const getOffset = () => (window.innerWidth >= 768 ? -20 : -10);

  const handleNavigationAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true, state: { scrollTo: id } });
    } else {
      scroller.scrollTo(id, {
        smooth: true,
        duration: 500,
        offset: getOffset(),
      });
    }
    // close dropdown after scroll
    setDesktopDropdownOpen(false);
  };

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (location.pathname === "/" && scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          smooth: true,
          duration: 500,
          offset: getOffset(),
        });
      }, 50);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="navbar bg-[#e3e6f3] font-semibold justify-between items-center p-5 md:p-0 lg:p-6 shadow-lg fixed top-0 left-0 z-[999] px-2 pr-4 md:pr-6 lg:pr-12 w-full">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-black font-extrabold "
            onClick={() => setIsOpen(!isOpen)}
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
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border-2 border-gray-500 bg-[#e3e6f3] rounded-box z-50 mt-3 w-52 p-2 gap-2 shadow text-black"
            >
              {links.map((link, idx) => (
                <li key={idx} /* remove border classes here, so no lines */>
                  {location.pathname === "/" ? (
                    <ScrollLink
                      to={link}
                      smooth
                      duration={500}
                      offset={getOffset()}
                      onClick={() => setIsOpen(false)}
                    >
                      {link}
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        handleNavigationAndScroll(link);
                      }}
                    >
                      {link}
                    </button>
                  )}
                </li>
              ))}

              <li>
                <details>
                  <summary>Products</summary>
                  <ul className="p-2">
                    {servicesItems.map(({ name, id }, idx) => (
                      <li
                        key={id}
                        className={`${
                          idx !== servicesItems.length - 1
                            ? "border-b border-gray-300"
                            : ""
                        }`}
                      >
                        {location.pathname === "/" ? (
                          <ScrollLink
                            to={id}
                            smooth
                            duration={500}
                            offset={getOffset()}
                            onClick={() => setIsOpen(false)}
                          >
                            {name}
                          </ScrollLink>
                        ) : (
                          <button
                            onClick={() => {
                              setIsOpen(false);
                              handleNavigationAndScroll(id);
                            }}
                          >
                            {name}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              <li>
                <RouterLink to="/sip" onClick={() => setIsOpen(false)}>
                  SIP Calculator
                </RouterLink>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <RouterLink
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="btn btn-ghost text-xl hover:bg-transparent hover:scale-110 duration-200 ease-out"
        >
          <img
            src={Logo}
            alt="Logo"
            className="h-[6.2rem] md:h-[5.5rem] lg:h-[6.2rem] md:w-[6rem] lg:w-[9.2rem] w-50 md:pb-4 md:mt-[-0.2rem] pb-2 mt-[-0.2rem]"
          />
        </RouterLink>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex" ref={servicesRef}>
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li
              key={link}
              className="hover:bg-blue-600 hover:text-white text-black rounded-md"
            >
              <button onClick={() => handleNavigationAndScroll(link)}>
                {link}
              </button>
            </li>
          ))}

          {/* Products Hover Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-black hover:bg-blue-600 hover:text-white rounded-md">
              Products
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {desktopDropdownOpen && (
              <ul className="p-2 absolute bg-[#e3e6f3] border-2 border-gray-500 shadow-md rounded-md mt-[2.2rem] ml-[-0.2rem] z-50 w-40">
                {servicesItems.map(({ name, id }, idx) => (
                  <li
                    key={id}
                    className={`hover:bg-blue-600 hover:text-white text-black  ${
                      idx !== servicesItems.length - 1
                        ? "border-b border-gray-400"
                        : ""
                    }`}
                  >
                    <button onClick={() => handleNavigationAndScroll(id)}>
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="hover:bg-blue-600 hover:text-white text-black rounded-md">
            <RouterLink to="/sip">SIP Calculator</RouterLink>
          </li>
        </ul>
      </div>

      {/* Contact Button */}
      <div className="navbar-end">
        <RouterLink
          to="/contact-me"
          className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700"
        >
          Contact Me
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
