import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Website</div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-4 absolute md:relative bg-gray-800 top-16 md:top-0 left-0 w-full md:w-auto md:flex-row flex-col`}
        >
          <li className="border-t border-gray-700 md:border-none">
            <Link
              to="/"
              className="block text-gray-300 hover:text-white p-4 md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-t border-gray-700 md:border-none">
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white p-4 md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="border-t border-gray-700 md:border-none">
            <Link
              to="/services"
              className="block text-gray-300 hover:text-white p-4 md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="border-t border-gray-700 md:border-none">
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-white p-4 md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <Link
          to="/join"
          className="md:inline-block bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Join Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
