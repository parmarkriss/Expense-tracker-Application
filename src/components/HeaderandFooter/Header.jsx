// src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white"> {/* Changed background color to indigo */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Expense Tracker</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-300"}
          >
            Home
          </NavLink>
          <NavLink
            to="/expense"
            className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-300"}
          >
            Expenses
          </NavLink>
          <NavLink
            to="/View-Statistics"
            className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-300"}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/Viewchart"
            className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-300"}
          >
            Charts
          </NavLink>
        
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden block focus:outline-none"
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
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-indigo-500 p-4"> {/* Changed mobile menu background color to a lighter shade of indigo */}
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-yellow-300 block py-2 font-bold" : "block py-2 hover:text-gray-300"}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/expense"
            className={({ isActive }) => isActive ? "text-yellow-300 block py-2 font-bold" : "block py-2 hover:text-gray-300"}
            onClick={() => setIsOpen(false)}
          >
            Expenses
          </NavLink>
          <NavLink
            to="/View-Statistics"
            className={({ isActive }) => isActive ? "text-yellow-300 block py-2 font-bold" : "block py-2 hover:text-gray-300"}
            onClick={() => setIsOpen(false)}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/Viewchart"
            className={({ isActive }) => isActive ? "text-yellow-300 font-bold" : "hover:text-gray-300"}
          >
            Charts
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
