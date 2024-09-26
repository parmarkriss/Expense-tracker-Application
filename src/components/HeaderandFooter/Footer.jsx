// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-xl font-semibold">Expense Tracker</h4>
          <p className="mt-2 text-gray-300">
            Manage your expenses efficiently with visual insights.
          </p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-300">
            Terms of Service
          </a>
        </div>

        <div className="text-gray-300 text-center md:text-right">
          &copy; {new Date().getFullYear()} Expense Tracker. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
