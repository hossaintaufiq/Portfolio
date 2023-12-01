// import React from 'react';

// import WorkItem from "./WorkItem";
import WorkSections from "./WorkSections";



const data = [
    {
        id: '1',
        year: '2020',
        title: 'Frontend Developer',
        duration: '2 years',
        details: 'Developed user-facing features using HTML, CSS, and JavaScript. Collaborated with design teams to translate UI/UX wireframes into code.'
    },
    {
        id: '2',
        year: '2021',
        title: 'Full Stack Developer',
        duration: '1 year and ongoing',
        details: 'Built scalable and responsive web applications using modern frameworks like React.js and Node.js. Implemented RESTful APIs for seamless communication between server and client.'
    },
    {
        id: '3',
        year: '2022',
        title: 'UI/UX Engineer',
        duration: '6 months contract',
        details: 'Optimized website performance and created intuitive user interfaces. Conducted usability tests and gathered feedback to enhance user experience.'
    },
    {
        id: '4',
        year: '2020',
        title: 'Data Analyst',
        duration: '9 months',
        details: 'Analyzed large datasets using Python and SQL to derive meaningful insights.'
    },
    {
        id: '5',
        year: '2021',
        title: 'Product Manager',
        duration: '1 year and ongoing',
        details: 'Leading a team to develop and launch a new product in the market.'
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