import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can integrate with backend or services like EmailJS / Formspree
    console.log("Form Data:", formData);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);

    // Optionally, you can open mailto if you want direct email
    // window.location.href = `mailto:kingsley@example.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Get In Touch
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Let’s Talk About Your Next Project
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you want to collaborate, ask a question, or just say hi — my inbox is always open.  
              I’ll try to respond as soon as possible.
            </p>

            <div className="flex space-x-6 mt-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 text-2xl transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 text-2xl transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 text-2xl transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:kingsley@example.com"
                className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 text-2xl transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-md font-semibold transition-all"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 dark:text-green-400 text-center font-medium">
                ✅ Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
