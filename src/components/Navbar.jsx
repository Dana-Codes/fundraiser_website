import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname !== "/") return;

      const sections = ["home", "campaigns"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", type: "scroll", href: "#home", id: "home" },
    { name: "Campaigns", type: "scroll", href: "#campaigns", id: "campaigns" },
    { name: "About", type: "route", path: "/about" },
    { name: "Contact", type: "route", path: "/contact" },
  ];

  const handleScroll = (href, id) => {
    setIsMobileMenuOpen(false);
    setActiveLink(id);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white shadow-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* LOGO */}
          <button
            onClick={() => handleScroll("#home", "home")}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white">
              ❤️
            </div>
            <h1 className="text-xl font-bold">Rafa Foundation</h1>
          </button>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex gap-2 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.type === "scroll" ? (
                  <button
                    onClick={() => handleScroll(link.href, link.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      activeLink === link.id
                        ? "bg-amber-50 text-amber-600"
                        : "text-gray-600 hover:text-amber-600"
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-amber-600"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* DONATE BUTTON */}
          <button
            onClick={() => handleScroll("#campaigns", "campaigns")}
            className="hidden md:block bg-black text-white px-6 py-2 rounded-lg"
          >
            Donate
          </button>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        </div>

        <ul className="p-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.type === "scroll" ? (
                <button
                  onClick={() => handleScroll(link.href, link.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="p-6">
          <button
            onClick={() => handleScroll("#campaigns", "campaigns")}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Donate Now
          </button>
        </div>
      </div>
    </>
  );
}