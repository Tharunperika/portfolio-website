import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-white py-12 px-6 text-center"
    >
      <h2
        className="text-3xl font-bold mb-6"
        data-aos="fade-down"
      >
        <span className="text-blue-700">About </span>
        <span className="text-black">Me !</span>
      </h2>

      <img
        src="/profile2.jpg"
        alt="Tharun Perika"
        className="w-40 h-40 mx-auto rounded-full border-4 border-blue-600 shadow-md mb-6"
        data-aos="zoom-in-up"
      />

      <div
        className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed"
        data-aos="fade-up"
      >
        <p className="mb-4">
          <span className="font-semibold text-black">
            I’m Tharun Perika, a passionate developer and recent graduate in Computer Science and Engineering from Guru Nanak Institutions Technical Campus (2024).
            I strongly believe that growth begins with discomfort and discipline.
          </span>{' '}
          I challenge myself every day to take one step further — to learn something new, refine my thinking, and improve how I build solutions.
          I don’t just write code; I create meaningful experiences, test new ideas, and grow through hands-on action.
          To me, technology isn’t just a career — it’s a way to make an impact.
          <span className="font-semibold text-black">
            "The harder you work for something, the greater you’ll feel when you achieve it." 
          </span>{' '}
        </p>

        {showMore && (
          <p
            className="animate__animated animate__fadeIn"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I believe in lifelong learning and see feedback as a powerful tool for growth.
            Whether it’s solving complex problems or contributing to open-source projects, I bring curiosity, consistency, and a drive to deliver.
            My focus is on building clean, scalable, and user-friendly applications that solve real-world problems.
            Outside of coding, I enjoy reading, writing, and helping others grow through knowledge-sharing and mentorship.
          </p>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
};

export default About;







