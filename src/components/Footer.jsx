import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* ---------- COL 1: COLLEGE INFO ---------- */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* LOGO */}
            <div className="bg-white p-2 rounded-lg shadow-md">
              <img
                src="/assets/images/logo/logo1.png"
                alt="Dr. Sudhakarrao Jadhavar Institute of Management and Technology"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <span className="font-semibold text-white text-lg leading-tight">
              Dr. Sudhakarrao Jadhavar Institute of Management & Technology
            </span>
          </div>

          <p className="text-sm flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-primary" />
            Narhe, Pune – Maharashtra, India
          </p>

          <p className="text-sm flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-primary" />
            +91 9270798590
          </p>

          <p className="text-sm flex items-center gap-2 mt-2">
            <FaEnvelope className="text-primary" />
            jadhavarmca@gmail.com
          </p>
        </div>

        {/* ---------- COL 2: QUICK LINKS ---------- */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-primary transition">
                Academics
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-primary transition">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/facilities" className="hover:text-primary transition">
                Facilities
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- COL 3: PROGRAMS ---------- */}
        <div>
          <h4 className="text-white font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-secondary transition">
              Master of Computer Applications(MCA) /
              Master of Business Administration(MBA)
            </li>
            <li className="hover:text-secondary transition">
              AICTE Approved Program
            </li>
            <li className="hover:text-secondary transition">
              Affiliated to SPPU, Pune
            </li>
          </ul>
        </div>

        {/* ---------- COL 4: SOCIAL & SUBSCRIBE ---------- */}
        <div>
          <h4 className="text-white font-semibold mb-4">Find Us At</h4>

          {/* Social Icons */}
          <div className="flex gap-3 mb-4">
            <a
              href="https://www.facebook.com/share/1DwDVQby36/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/jadhavar_institute_mngt_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/dr-sudhakarrao-jadhavar-institute-of-management-and-technology-pune"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Subscribe */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <p>
            © {new Date().getFullYear()} Dr. Sudhakarrao Jadhavar Institute of Management and Technology. All rights reserved.
          </p>
          <p>
            Designed & Developed by{" "}
            <span className="text-white">
              Trijja Media & Works, Pune
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
