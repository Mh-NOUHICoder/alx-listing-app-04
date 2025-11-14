// components/layout/Header.tsx
import React from "react";
import { Search, Home, Building, Mountain } from "lucide-react";
import Button from "@/components/common/Button";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/85 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="w-7 h-7 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">Listing-App</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-6 hidden md:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Button label="Sign In" className="bg-transparent border border-2 border-indigo-600 text-black hover:bg-indigo-600" />
            <Button label="Sign Up" className="bg-indigo-600 hover:bg-indigo-700 text-white" />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex justify-center space-x-6 border-t border-gray-200 py-3 text-gray-600 font-medium text-sm">
          <a href="#" className="hover:text-indigo-600 flex items-center space-x-1">
            <Home className="w-4 h-4" />
            <span>Rooms</span>
          </a>
          <a href="#" className="hover:text-indigo-600 flex items-center space-x-1">
            <Building className="w-4 h-4" />
            <span>Mansion</span>
          </a>
          <a href="#" className="hover:text-indigo-600 flex items-center space-x-1">
            <Mountain className="w-4 h-4" />
            <span>Countryside</span>
          </a>
          <a href="#" className="hover:text-indigo-600">Apartments</a>
          <a href="#" className="hover:text-indigo-600">Villas</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
