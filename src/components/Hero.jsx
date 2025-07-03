// Hero.jsx
import React, { useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaMedium,
  FaWhatsapp,
} from 'react-icons/fa';
import 'animate.css';

const roles = ['Java Developer', 'Frontend Developer', 'Full Stack Developer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingTimeout;

    if (charIndex < roles[roleIndex].length) {
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayText('');
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, roleIndex]);

  return (
    <section
      id="hero"
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      className="bg-blue-50 py-12 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-start gap-10">
        {/* Profile Image */}
        <div className="md:w-1/3 w-full flex justify-start">
          <div className="w-64 h-64 rounded-full border-4 border-blue-600 shadow-lg overflow-hidden bg-white">
            <img
              src="/profile1.jpg"
              alt="Tharun Perika"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 w-full flex flex-col gap-3 items-start">
          <p className="text-3xl font-medium text-black">Hello, I'm</p>

          <h1 className="text-6xl font-bold text-left">
            <span className="text-blue-600">Tharun</span>{' '}
            <span className="text-black">Perika</span>
          </h1>

          <p className="text-2xl font-bold text-black">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-3xl">
            <a href="https://github.com/tharunperika" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:scale-110 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tharunperika" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/tharunperika" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/mr_tharun_perika" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="https://medium.com/@tharunperika" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:scale-110 transition">
              <FaMedium />
            </a>
            <a href="https://wa.me/919347125773" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:scale-110 transition">
              <FaWhatsapp />
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-5">
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-blue-600 text-white px-6 py-2 text-lg rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

















