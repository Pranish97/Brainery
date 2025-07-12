import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navigation text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Brainery</h3>
          <p className="text-sm leading-6">
            Brainery is an innovative online learning management system built to
            help students and educators unlock their potential anytime,
            anywhere.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:underline">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@brainery.com</li>
            <li>Phone: +977-1234567890</li>
            <li>Address: Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © 2025 LearnAxis. Empowering learning, every day.
        </p>

        <div className="flex flex-wrap gap-6 text-sm mb-4 md:mb-0">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/courses" className="hover:underline">
            Courses
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        <Link to="/profile" className="text-sm hover:underline">
          Profile
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
