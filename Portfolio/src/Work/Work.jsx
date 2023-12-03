// import React from 'react';

// import WorkItem from "./WorkItem";
import WorkSections from "./WorkSections";



const data = [
    {
        id: '1',
        year: '2023',
        title: 'Web Developer',
        duration: '1 months and ongoing',
        details: 'Developed user-facing features using HTML, CSS, and JavaScript. Collaborated with design teams to translate UI/UX wireframes into code. Develop and maintain websites and web applications according to client needs.'
    },
    {
        id: '2',
        year: '2021',
        title: 'Full Stack Developer',
        duration: '1 year and ongoing',
        details: 'Work with cross-functional teams to meet project goals and deadlines. Built scalable and responsive web applications using modern frameworks like React.js and Node.js. Implemented RESTful APIs for seamless communication between server and client.'
    },
    {
        id: '3',
        year: '2022',
        title: 'Associate Web Developer ',
        duration: '6 months contract',
        details: 'Optimized website performance and created intuitive user interfaces. Conducted usability tests and gathered feedback to enhance user experience. Proficiency in HTML, CSS, JavaScript,React js and related frameworks.'
    },
    {
        id: '4',
        year: '2023',
        title: 'Web Developer',
        duration: '6 months contract',
        details: 'Deploy finished projects and ensure security measures are implemented. Analyzed large datasets using Python and SQL to derive meaningful insights.'
    },
    {
        id: '5',
        year: '2023',
        title: 'Senior Web Developer',
        duration: '1 year',
        details: 'Develop and maintain websites and web applications according to client needs. Leading a team to develop and launch a new product in the market. Proficiency in HTML, CSS, JavaScript,React js and related frameworks.'
    }
]

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
            <h1 className="text-4xl font-bold text-center text-[#001b5c]">Work</h1>

            {data.map(item => (
                <WorkSections key={item.id} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    );
};

export default Work;