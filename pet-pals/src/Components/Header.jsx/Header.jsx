import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md flex items-center justify-between">
      <div className="text-2xl font-bold text-orange-500 dark:text-purple-400">
        MyLogo
      </div>

      <nav className="hidden md:flex gap-6 text-base font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 dark:text-purple-400"
              : "hover:text-orange-500 dark:hover:text-purple-400 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cute-list"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 dark:text-purple-400"
              : "hover:text-orange-500 dark:hover:text-purple-400 transition"
          }
        >
          Cute List
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 dark:text-purple-400"
              : "hover:text-orange-500 dark:hover:text-purple-400 transition"
          }
        >
          About Us
        </NavLink>
      </nav>

      <div className="hidden md:block">
        <select className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-purple-400 text-gray-900 dark:text-white">
          <option value="">Filter by</option>
          <option value="Dogs">Dogs</option>
          <option value="Cats">Cats</option>
          <option value="Rabbits">Rabbits</option>
        </select>
      </div>

      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-orange-500 dark:text-purple-400"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-4 flex flex-col gap-4 md:hidden shadow-md">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 dark:hover:text-purple-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/cute-list"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 dark:hover:text-purple-400"
          >
            Cute List
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500 dark:hover:text-purple-400"
          >
            About Us
          </NavLink>
          <select className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-purple-400">
            <option value="">Filter by</option>
            <option value="Dogs">Dogs</option>
            <option value="Cats">Cats</option>
            <option value="Rabbits">Rabbits</option>
          </select>
        </div>
      )}
    </header>
  );
};

export default Header;
