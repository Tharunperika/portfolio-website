import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMysql,
  SiOpenai,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
} from 'react-icons/si';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projectList = [
    {
      title: "Travel Agency Website",
      description:
        "A static multi-page travel website built with HTML and CSS for showcasing travel services.",
      image: "/travel.png",
      tech: [
        <FaHtml5 className="text-orange-600" />,
        <FaCss3Alt className="text-blue-600" />
      ],
      github: "https://github.com/Tharunperika/tharuntravels.git",
      live: "https://tharuntravels.netlify.app/"
    },
    {
      title: "ABC Fashions (E-commerce)",
      description:
        "An HTML/CSS/JS frontend for fashion shopping with product display and cart UI.",
      image: "/fashion.png",
      tech: [
        <FaHtml5 className="text-orange-600" />,
        <FaCss3Alt className="text-blue-600" />,
        <FaJs className="text-yellow-400" />
      ],
      github: "https://github.com/Tharunperika/Abcfashions.git",
      live: "https://abcfashion.netlify.app/"
    },
    {
      title: "sTory Ai (Story Generator)",
      description:
        "Java-based app integrating ChatGPT API and MySQL login to generate creative stories.",
      image: "/storyai.png",
      tech: [
        <FaJava className="text-red-600" />,
        <SiOpenai className="text-gray-800" />,
        <FaDatabase className="text-gray-600" />
      ],
      github: "https://github.com/Tharunperika/sToryAi.git",
      live: "http://localhost:8089/Story-AI/login.jsp"
    },
    {
      title: "Employee Task Management System",
      description:
        "Spring Boot + ReactJS + Bootstrap + MySQL app for managing tasks with role-based access.",
      image: "/taskmanagement.png",
      tech: [
        <SiSpringboot className="text-green-700" />,
        <SiMysql className="text-blue-500" />,
        <SiTailwindcss className="text-sky-400" />,
        <SiReact className="text-cyan-400" />,
        <FaDatabase className="text-gray-600" />,
        <SiBootstrap className="text-purple-600" />
      ],
      github: "https://github.com/Tharunperika/EmployeeTaskManagementSystem-.git",
      live: "http://localhost:5183"
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio site built with ReactJS and Bootstrap.",
      image: "/portfolio.png",
      tech: [
        <SiReact className="text-cyan-400" />,
        <SiBootstrap className="text-purple-600" />
      ],
      github: "https://github.com/Tharunperika/portfolio-website.git",
      live: "https://tharunperikaportfolio.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10" data-aos="fade-down">
        <span className="text-blue-700">My </span>
        <span className="text-black">Projects !</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 flex flex-col h-full shadow-md border rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-delay={`${index * 100}`}
          >
            <div className="h-48 w-full flex items-center justify-center bg-white mb-4 rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-contain rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold text-blue-700 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 mb-3 flex-grow">
              {project.description}
            </p>
            <div className="flex justify-center gap-3 text-xl mb-4">
              {project.tech.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-black transition"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;







