import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = ({ isStepPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en"); // Mengambil bahasa terakhir yang dipilih atau default "en"
  const location = useLocation();

  // Fungsi untuk menangani perubahan bahasa
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage); // Simpan preferensi bahasa ke local storage
  };

  // Konten dalam berbagai bahasa
  const languageContent = {
    en: {
      home: "Home",
      searchJob: "Search Job",
      searchCompany: "Search Company",
      login: "Log in",
      signup: "Sign up",
      logout: "Logout"
    },
    id: {
      home: "Beranda",
      searchJob: "Cari Pekerjaan",
      searchCompany: "Cari Perusahaan",
      login: "Masuk",
      signup: "Daftar",
      logout: "Keluar"
    }
  };

  // Mengambil konten sesuai bahasa yang dipilih
  const content = languageContent[language];

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("adminToken");
      window.location.href = "/login";
    }
  };

  const navItems = [
    { path: "/", title: content.home },
    { path: "/home", title: content.searchJob },
    { path: "/salary", title: content.searchCompany },
  ];

  const hiddenRoutes = [
    "/",
    "/signup",
    "/login",
    "/signup-admin",
    "/login-admin",
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 fixed top-0 bg-white z-10">
      <nav className="flex justify-between items-center py-6">
        <Link to="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              fillOpacity="0.4"
            />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          <span>JobPortal</span>
        </Link>

        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className="nav-link"
                disabled={location.pathname === "/"}
                onClick={(e) => location.pathname === "/" && e.preventDefault()}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            {content.login}
          </Link>
          <Link
            to="/signup"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            {content.signup}
          </Link>
          {!hiddenRoutes.includes(location.pathname) && (
            <button
              className="py-2 px-5 border rounded bg-red-300 text-white"
              onClick={handleLogout}
            >
              {content.logout}
            </button>
          )}
        </div>

        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>

        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <select id="language" className="focus:outline-none" value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="id">Indonesia</option>
          </select>
        </div>
      </nav>

      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className="nav-link"
                disabled={
                  (isStepPage || location.pathname === "/signup") &&
                  path !== "/"
                }
                onClick={(e) =>
                  (isStepPage || location.pathname === "/signup") &&
                  path !== "/" &&
                  e.preventDefault()
                }
              >
                {title}
              </NavLink>
            </li>
          ))}

          <li className="text-white py-1">
            <Link to="/login">{content.login}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
