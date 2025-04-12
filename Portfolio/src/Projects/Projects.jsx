
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/grid';
// import ProjectItems from './ProjectItems';

// const projects = [
//   {
//     img: 'https://i.ibb.co/cQK4swC/Image-1.png',
//     title: 'Instagram Replica',
//     details: 'ReactJs, Vite js, HTML, CSS',
//     link: 'https://hossaintaufiq.github.io/Instagram-Replica/',
//     work: 'frontend',
//   },
//   {
//     img: 'https://i.ibb.co/TbQN90g/Image-2.png',
//     title: 'Summer Sale',
//     details: 'ReactJs, Vite js, HTML, CSS',
//     link: 'https://hossaintaufiq.github.io/Summer-Sale/',
//     work: 'frontend',
//   },
//   {
//     img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
//     title: 'Penguin Fashion',
//     details: 'ReactJs, Vite js, HTML, CSS',
//     link: 'https://hossaintaufiq.github.io/Penguin-Fashion/',
//     work: 'fullstack',
//   },
//   {
//     img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
//     title: 'Tea House',
//     details: 'ReactJs, Vite js, HTML, CSS',
//     link: 'https://hossaintaufiq.github.io/Tea-House/',
//     work: 'backend',
//   },
//   {
//     img: 'https://i.ibb.co/TbQN90g/Image-2.png',
//     title: 'Java Desktop App',
//     details: 'Java, JavaFX, MySQL',
//     link: 'https://example.com',
//     work: 'java',
//   },
//   {
//     img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
//     title: 'Fullstack E-commerce',
//     details: 'React, Node.js, MongoDB, Express',
//     link: 'https://example.com',
//     work: 'fullstack',
//   }
// ];

// const Projects = () => {
//   return (
//     <div id="projects" className="max-w-[1040px] m-auto p-4 py-16">
//       <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
//       <p className="text-center py-6 text-gray-600 max-w-2xl mx-auto">
//         Browse through some of my featured projects showcasing full-stack, frontend, backend, and Java development skills.
//       </p>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, Grid]}
//         spaceBetween={30}
//         slidesPerView={1}
//         grid={{ rows: 2, fill: 'row' }}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         breakpoints={{
//           768: {
//             slidesPerView: 2,
//             grid: { rows: 2 }
//           },
//           1024: {
//             slidesPerView: 3,
//             grid: { rows: 2 }
//           }
//         }}
//         className="mt-10"
//       >
//         {projects.map((project, idx) => (
//           <SwiperSlide key={idx}>
//             <ProjectItems
//               img={project.img}
//               title={project.title}
//               link={project.link}
//               details={project.details}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Projects;



import { useState } from 'react';
import ProjectItems from './ProjectItems';

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
      }
  ];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div id="projects" className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my technical capabilities through these highlighted projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {visibleProjects.map((project, idx) => (
          <ProjectItems
            key={idx}
            img={project.img}
            title={project.title}
            link={project.link}
            details={project.details}
            className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          />
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg 
                     hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 
                     shadow-lg hover:shadow-xl font-medium flex items-center mx-auto"
        >
          {showAll ? (
            <>
              <span>Show Less</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </>
          ) : (
            <>
              <span>Show More</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Projects;