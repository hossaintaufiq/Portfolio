// import { useState } from 'react';

const projects = [
    {
      img: 'https://i.ibb.co/cQK4swC/Image-1.png',
      title: 'Instagram Replica',
      details: 'ReactJs, Vite js, HTML, CSS',
      link: 'https://hossaintaufiq.github.io/Instagram-Replica/',
      work: 'frontend',
    },
    {
      img: 'https://i.ibb.co/TbQN90g/Image-2.png',
      title: 'Summer Sale',
      details: 'ReactJs, Vite js, HTML, CSS',
      link: 'https://hossaintaufiq.github.io/Summer-Sale/',
      work: 'frontend',
    },
    {
      img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
      title: 'Penguin Fashion',
      details: 'ReactJs, Vite js, HTML, CSS',
      link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
      work: 'fullstack',
    },
    {
      img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
      title: 'Tea House',
      details: 'ReactJs, Vite js, HTML, CSS',
      link: 'https://hossaintaufiq.github.io/Tea-House/',
      work: 'backend',
    },
    {
      img: 'https://i.ibb.co/TbQN90g/Image-2.png',
      title: 'Java Desktop App',
      details: 'Java, JavaFX, MySQL',
      link: 'https://example.com',
      work: 'java',
    },
    {
      img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
      title: 'Fullstack E-commerce',
      details: 'React, Node.js, MongoDB, Express',
      link: 'https://example.com',
      work: 'fullstack',
    },
  ];

const badgeColors = {
  frontend: 'bg-blue-100 text-blue-700',
  backend: 'bg-green-100 text-green-700',
  fullstack: 'bg-purple-100 text-purple-700',
  java: 'bg-yellow-100 text-yellow-700',
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my technical capabilities through these highlighted projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.03] flex flex-col overflow-hidden"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[project.work] || 'bg-gray-100 text-gray-700'}`}>{project.work}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">{project.details}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-2 bg-primary text-white rounded-lg font-medium shadow hover:bg-primary/90 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;