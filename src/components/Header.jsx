import { Link, NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsMenuRef = useRef(null);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold cursor-pointer"
      : "hover:text-yellow-400 transition cursor-pointer";

  // Click outside to close dropdown (Desktop)
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        projectsMenuRef.current &&
        !projectsMenuRef.current.contains(e.target)
      ) {
        setProjectsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setProjectsOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="bg-gray-900 text-gray-100 shadow relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-yellow-400">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <div className="relative" ref={projectsMenuRef}>
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex items-center hover:text-yellow-400 transition cursor-pointer select-none"
              aria-haspopup="true"
              aria-expanded={projectsOpen}
              aria-controls="desktop-projects-menu"
              type="button"
            >
              Projects
              <FaChevronDown
                className={`ml-1 text-sm transition-transform duration-300 ${
                  projectsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown menu */}
            <div
              id="desktop-projects-menu"
              className={`absolute top-full left-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg mt-2 p-3 space-y-2 min-w-[220px] z-40
                transform transition-all duration-300 origin-top
                ${
                  projectsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-3 pointer-events-none"
                }
              `}
            >
              {[
                { to: "/project/javascript-frameworks", label: "JavaScript Frameworks" },
                { to: "/project/semester-project-2", label: "Semester Project 2" },
                { to: "/project/exam-project-2", label: "Exam Project 2" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    (isActive
                      ? "text-yellow-400 font-semibold "
                      : "hover:bg-yellow-500/20") +
                    " block px-3 py-1 rounded cursor-pointer transition"
                  }
                  onClick={() => setProjectsOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-gray-800 px-4 py-4 border-t border-gray-700
          transform transition-all duration-300
          ${mobileOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}
        `}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400") +
            " block py-2 cursor-pointer transition"
          }
          onClick={toggleMobileMenu}
        >
          Home
        </NavLink>

        <button
          onClick={() => setProjectsOpen(!projectsOpen)}
          className={`flex items-center justify-between w-full py-2 px-2 rounded cursor-pointer transition
            ${projectsOpen ? "bg-yellow-500/20 font-semibold text-yellow-400" : "hover:bg-yellow-500/10"}
          `}
          aria-expanded={projectsOpen}
          aria-controls="mobile-projects-submenu"
          type="button"
        >
          Projects
          <FaChevronDown
            className={`ml-2 text-sm transition-transform duration-300 ${
              projectsOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <div
          id="mobile-projects-submenu"
          className={`ml-4 mt-2 space-y-1 overflow-hidden transition-all duration-300
            ${projectsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {[
            { to: "/project/javascript-frameworks", label: "JavaScript Frameworks" },
            { to: "/project/semester-project-2", label: "Semester Project 2" },
            { to: "/project/exam-project-2", label: "Exam Project 2" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                (isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400") +
                " block py-1 px-3 rounded cursor-pointer transition"
              }
              onClick={() => {
                toggleMobileMenu();
                setProjectsOpen(false);
              }}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
