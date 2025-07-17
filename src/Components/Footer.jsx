import React from 'react';
import logo from '../assets/logo11.png';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 mt-7">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-0 py-2 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <img src={logo} alt="ShareBite Logo" className="w-28 mb-4" />
          <h2 className="text-2xl font-bold text-black">ShareBite</h2>
          <p className="text-sm mt-2 text-gray-500">
            A platform to reduce food waste and share what matters. Together, we can make a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><a href="#" className="hover:text-primary">About Us</a></li>
            <li><a href="#" className="hover:text-primary">Request Food</a></li>
            <li><a href="#" className="hover:text-primary">Donate</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Banani, Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +880 1234 567 890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@sharebite.org
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Stay Connected</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-blue-600 transition"><Facebook size={24} /></a>
            <a href="#" className="hover:text-sky-500 transition"><Twitter size={24} /></a>
            <a href="#" className="hover:text-pink-500 transition"><Instagram size={24} /></a>
          </div>
          <p className="text-sm text-gray-500">
            Join our mission to fight hunger and reduce waste. #ShareTheBite
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 border-t border-gray-200 py-4">
        © {new Date().getFullYear()} ShareBite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
