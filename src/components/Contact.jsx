import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="bg-blue-50 py-12 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-3xl font-bold mb-6"
          data-aos="fade-down"
        >
          <span className="text-blue-700">Contact </span>
          <span className="text-black">Me!</span>
        </h2>

        {/* Social Icons - Moved Above Form */}
        <div
          className="flex justify-center gap-6 text-3xl mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="https://github.com/tharunperika"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="text-gray-800 hover:scale-110 transition transform duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:tharunperika@gmail.com"
            aria-label="Email"
            title="Email"
            className="text-red-600 hover:scale-110 transition transform duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/tharunperika"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="text-blue-700 hover:scale-110 transition transform duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/919347125773"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="text-green-600 hover:scale-110 transition transform duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://twitter.com/tharunperika"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter"
            className="text-sky-500 hover:scale-110 transition transform duration-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Gmail"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;





