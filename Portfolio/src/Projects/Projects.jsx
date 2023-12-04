

import ProjectItems from "./ProjectItems";

const projects = [
    {
        img: 'https://i.ibb.co/cQK4swC/Image-1.png',
        title: 'Instagram Replica',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/TbQN90g/Image-2.png',
        title: 'Summer Sale',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
        title: 'Penguin Fashion',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/TbQN90g/Image-2.png',
        title: 'Summer Sale',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
        title: 'Penguin Fashion',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/'
    }
];

const Projects = () => {

    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">The full-stack project in my portfolio is a
                comprehensive web application designed and developed entirely by me.
                It incorporates both front-end and back-end technologies to deliver a
                seamless user experience and robust functionality.
            </p>

            {/* new code starts  */}

            <label className="cursor-pointer grid place-items-center">
                <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>



            {/* new code ends */}
            <div className="grid sm:grid-cols-2 gap-8 ">
                {
                    projects.map((info, idx) => (
                        <ProjectItems key={idx} img={info.img} title={info.title} link={info.link} details={info.details} />
                    ))
                }

            </div>
        </div>
    );
};

export default Projects;