

import ProjectItems from "./ProjectItems";

const projects = [
    {
        img: 'https://i.ibb.co/cQK4swC/Image-1.png',
        title: 'Instagram Replica',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'frontend',
    },
    {
        img: 'https://i.ibb.co/TbQN90g/Image-2.png',
        title: 'Summer Sale',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'frontend',

    },
    {
        img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
        title: 'Penguin Fashion',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'frontend',
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'backend',
    },
    {
        img: 'https://i.ibb.co/TbQN90g/Image-2.png',
        title: 'Summer Sale',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'backend',

    },
    {
        img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
        title: 'Penguin Fashion',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'fullstack',
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'backend',
    },
    {
        img: 'https://i.ibb.co/TbQN90g/Image-2.png',
        title: 'Summer Sale',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'java',

    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'java',
    },
    {
        img: 'https://i.ibb.co/TbQN90g/Image-2.png',
        title: 'Summer Sale',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'java',

    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'java',
    },
    {
        img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
        title: 'Penguin Fashion',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'fullstack',
    },
    {
        img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
        title: 'Tea House',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'backend',
    }, {
        img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
        title: 'Penguin Fashion',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'fullstack',
    },
    {
        img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
        title: 'Penguin Fashion',
        details: 'ReactJs, Vite js, Html,css',
        link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
        work: 'fullstack',
    },

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


            <div className="flex justify-center w-full py-2 gap-4 ">
                <a href="#item1" className="btn  text-center p-3 bg-white rounded-lg text-gray-700 font-bold cursor-pointer text-l">FrontEnd</a>
                <a href="#item2" className="btn  text-center p-3 bg-white rounded-lg text-gray-700 font-bold cursor-pointer text-l">BackEnd</a>
                <a href="#item3" className="btn  text-center p-3 bg-white rounded-lg text-gray-700 font-bold cursor-pointer text-l">FullStack</a>
                <a href="#item4" className="btn  text-center p-3 bg-white rounded-lg text-gray-700 font-bold cursor-pointer text-l">Java</a>
            </div>


            <div className="carousel w-full h-auto">
                <div id="item1" className=" carousel-item w-full py-8">
                    {/* <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}

                    <div className="grid sm:grid-cols-2 gap-8 ">
                        {
                            projects.filter(work => work.work === 'frontend').map((info, idx) => (
                                <ProjectItems key={idx} img={info.img} title={info.title} link={info.link} details={info.details} />
                            ))
                        }
                    </div>

                </div>


                <div id="item2" className=" carousel-item w-full h-auto">
                    {/* <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" /> */}

                    <div className="grid sm:grid-cols-2 gap-8 ">
                        {
                            projects.filter(work => work.work === 'backend').map((info, idx) => (
                                <ProjectItems key={idx} img={info.img} title={info.title} link={info.link} details={info.details} />
                            ))
                        }
                    </div>


                </div>
                <div id="item3" className=" carousel-item w-full h-auto">
                    {/* <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" /> */}
                    <div className="grid sm:grid-cols-2 gap-8 ">
                        {
                            projects.filter(work => work.work === 'fullstack').map((info, idx) => (
                                <ProjectItems key={idx} img={info.img} title={info.title} link={info.link} details={info.details} />
                            ))
                        }
                    </div>


                </div>
                <div id="item4" className="carousel-item w-full h-auto">
                    {/* <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" /> */}
                    <div className="grid sm:grid-cols-2 gap-8 ">
                        {
                            projects.filter(work => work.work === 'java').map((info, idx) => (
                                <ProjectItems key={idx} img={info.img} title={info.title} link={info.link} details={info.details} />
                            ))
                        }
                    </div>

                </div>
            </div>






        </div >





    );
};

export default Projects;