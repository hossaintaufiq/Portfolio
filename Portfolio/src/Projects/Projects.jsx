// import React from 'react';

import ProjectItems from "./ProjectItems";
import project1 from "../assets/Image (1).png"
import project2 from "../assets/Image (2).png"
import project3 from "../assets/Image (3).png"
import project4 from "../assets/Image (4).png"

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">The full-stack project in my portfolio is a
             comprehensive web application designed and developed entirely by me.
             It incorporates both front-end and back-end technologies to deliver a
              seamless user experience and robust functionality.
            </p>
            <div className="grid sm:grid-cols-2 gap-12 ">
                <ProjectItems img={project1} title='Instagram Replica'/>
                <ProjectItems img={project2} title='Summer Sale'/>
                <ProjectItems img={project3} title='Penguin Fashion'/>
                <ProjectItems img={project4} title='Tea House'/>
            </div>
        </div>
    );
};

export default Projects;