import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  // Array of navigation links
  const navLinks = [
    { link: "/", nav: "Home" },
    { link: "/services", nav: "Services" },
    { link: "/resume", nav: "Resume" },
    { link: "/work", nav: "Work" },
    { link: "/contact", nav: "Contact" },
    { link: "mailto:alvian.kurniawan31@gmail.com?subject=Contact from my website", nav: "Contact Me" },
  ];

  return (
    <nav className=" text-gray-text ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          MyPortfolio<span className="text-green-700">.</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-text focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex md:space-x-6 items-center">
          {navLinks.map(({ link, nav }, index) => (
            <a
              key={index}
              href={link}
              className={`hover:text-white ${
                pathname === link ? "text-green-700 border-b-2 border-green-700" : ""
              } ${nav === "Contact Me" ? "px-4 py-2 border border-green-700 text-center rounded-full hover:bg-green-700 hover:text-dark-gray" : ""}`}
            >
              {nav}
            </a>
          ))}
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-dark-gray text-gray-text shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-text focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          {navLinks.map(({ link, nav }, index) => (
            <a
              key={index}
              href={link}
              className={`block px-4 py-2 rounded hover:bg-gray-700 ${
                pathname === link ? "text-white font-semibold" : ""
              } ${nav === "Contact Me" ? "border border-green-700 text-center" : ""}`}
            >
              {nav}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
