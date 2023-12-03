// import React from 'react';

const ProjectItems = ({img, title}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img src={img} alt="/" className="rounded-lg group-hover:opacity-10 h-[300px]" />
            <div className="hidden group-hover:flex flex-col justify-center items-center absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%]">
                <h3 className="text-2xl font-bold text-white tracking-wider text-center">{title}</h3>
                <p className="pb-4 pt-2 text-white text-center">React js</p>
                <a href="/">
                    <p className="text-center p-3 bg-white rounded-lg text-gray-700 font-bold cursor-pointer text-lg ">Live Website</p>
                </a>
            </div>
        </div>
    );
};

export default ProjectItems;