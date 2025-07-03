import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiSpringboot,
  SiEclipseide,
  SiMysql,
  SiPostman,
} from 'react-icons/si';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-700" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'ReactJS', icon: <FaReact className="text-cyan-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'Linux', icon: <FaLinux className="text-black" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'Eclipse', icon: <SiEclipseide className="text-indigo-700" /> },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-down">
        <span className="text-blue-700">Technical </span>
        <span className="text-black">Skills !</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-base font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;



