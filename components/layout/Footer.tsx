// components/layout/Footer.tsx
import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">AlxListing</h2>
            <p className="text-sm">
              Discover amazing places to stay — from city rooms to countryside
              mansions. Book your perfect getaway with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Accommodation Types */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Accommodation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Rooms</a></li>
              <li><a href="#" className="hover:text-indigo-400">Mansions</a></li>
              <li><a href="#" className="hover:text-indigo-400">Countryside</a></li>
              <li><a href="#" className="hover:text-indigo-400">Apartments</a></li>
              <li><a href="#" className="hover:text-indigo-400">Villas</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram /></a>
              <a href="#" className="hover:text-indigo-400"><Github /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AlxListing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
