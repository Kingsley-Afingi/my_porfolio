import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ====== About Section ====== */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Kings Code</h2>
          <p className="text-sm leading-relaxed mb-6">
            Building high-performance fullstack web apps with React.js, Next.js,Node.js Express.js, TypeScript, PostgreSQL and Supabase.
            I help businesses grow with modern digital solutions.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1Ah3xA1eWc/?mibextid=wwXIfr" className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Kingsley-Afingi" className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* ====== Quick Links ====== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
            <li><a href="#testimonials" className="hover:text-indigo-400 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
            <li><a href="#about" className="hover:text-indigo-400 transition">About Me</a></li>
          </ul>
        </div>

        {/* ====== Contact Info ====== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <HiOutlineLocationMarker className="text-indigo-500 text-xl" />
              <span>Abuja, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="text-indigo-500 text-xl" />
              <a href="mailto:kingsley@example.com" className="hover:text-indigo-400">
                kingsleyafingi6@example.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="text-indigo-500 text-xl" />
              <a href="tel:+2348123456789" className="hover:text-indigo-400">
                +234 9046347422
              </a>
            </li>
          </ul>
        </div>

        {/* ====== Newsletter Subscription ====== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Join my newsletter for tech insights, project updates, and exclusive content.
          </p>
          <form onSubmit={handleSubscribe} className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm text-gray-200 bg-transparent focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ====== Bottom Bar ====== */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        <p>
          © 2023 {""}<span className="font-semibold text-white">Kings.Code</span>. 
          All rights reserved.
        </p>
        <p className="mt-2 text-gray-500">
          Built with <span className="text-indigo-400">React.js</span> • <span className="text-indigo-400">TypeScript</span> • <span className="text-indigo-400">Supabase</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
