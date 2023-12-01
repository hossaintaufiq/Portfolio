// import React from 'react';

import ProjectItems from "./ProjectItems";
import project1 from "../assets/Image (1).png"
import project2 from "../assets/Image (2).png"
import project3 from "../assets/Image (2).png"
import project4 from "../assets/Image (4).png"

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aut
                excepturi perferendis iusto maiores nulla culpa id omnis aliquam autem eaque sapiente inventore quod tempore soluta,
                commodi, dolore adipisci! Voluptatem autem magni tempora laudantium,
                molestiae maiores accusamus minus doloremque, harum saepe sit optio labore,
                ipsum velit nesciunt reprehenderit dolor? Quae.
            </p>
            <div className="grid sm:grid-cols-2 gap-12  ">
                <ProjectItems img={project1} title='Instagram Replica'/>
                <ProjectItems img={project2} title='Summer Sale'/>
                <ProjectItems img={project3} title='Penguin Fashion'/>
                <ProjectItems img={project4} title='Tea House'/>
            </div>
        </div>
    );
};

export default Projects;