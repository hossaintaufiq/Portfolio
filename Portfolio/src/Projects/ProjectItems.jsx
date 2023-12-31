// import React from 'react';

const ProjectItems = ({img, title ,link,details}) => {
    return (
        <div className="relative flex items-center justify-center h-[300px] w-full  rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">    
            <img src={img} alt="" className="rounded-lg group-hover:opacity-10 h-[300px]"  />
            <div className="hidden group-hover:flex flex-col justify-center items-center absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%]">
                <h3 className="text-xl font-bold text-white tracking-wider text-center">{title}</h3>
                <p className="pb-4 pt-2 text-white text-center">{details}</p>
                <a href={link} target="blank">
                    <p className="text-center p-3 bg-white rounded-lg text-gray-700 font-bold cursor-pointer text-l ">Live Website</p>
                </a>
               
            </div>
        </div>
    );
};

export default ProjectItems;