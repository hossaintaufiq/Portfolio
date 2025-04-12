
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
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
    link: '#',
    work: 'java',
  },
  {
    img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
    title: 'Fullstack E-commerce',
    details: 'React, Node.js, MongoDB, Express',
    link: '#',
    work: 'fullstack',
  },
  {
    img: 'https://i.ibb.co/cQK4swC/Image-1.png',
    title: 'Python Data Analysis',
    details: 'Python, Pandas, Matplotlib',
    link: '#',
    work: 'backend',
  },
  {
    img: 'https://i.ibb.co/TbQN90g/Image-2.png',
    title: 'Android App',
    details: 'Kotlin, Android Studio',
    link: '#',
    work: 'mobile',
  },
  {
    img: 'https://i.ibb.co/YRbFZbQ/Image-3.png',
    title: 'React Dashboard',
    details: 'React, Chart.js, Tailwind CSS',
    link: '#',
    work: 'frontend',
  },
  {
    img: 'https://i.ibb.co/kqkJHr5/Image-4.png',
    title: 'Node.js API',
    details: 'Node.js, Express, MongoDB',
    link: '#',
    work: 'backend',
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsPerSlide = 2;
  const initialProjects = showAll ? projects : projects.slice(0, 6);
  
  // Split projects into chunks of 2 for grid rows
  const projectChunks = [];
  for (let i = 0; i < initialProjects.length; i += projectsPerSlide) {
    projectChunks.push(initialProjects.slice(i, i + projectsPerSlide));
  }

  return (
    <div id="projects" className="max-w-[1040px] m-auto p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-6 text-gray-600 max-w-2xl mx-auto">
        Browse through some of my featured projects showcasing full-stack, frontend, backend, and Java development skills.
      </p>

      <Swiper
        key={showAll ? 'all' : 'partial'}
        modules={[Navigation, Pagination, Autoplay, Grid]}
        spaceBetween={30}
        slidesPerView={1}
        grid={{ rows: 2, fill: 'row' }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            grid: { rows: 2 }
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2 }
          }
        }}
        className="mt-10"
      >
        {projectChunks.map((chunk, idx) => (
          <SwiperSlide key={idx}>
            <div className="space-y-4">
              {chunk.map((project, index) => (
                <ProjectItems
                  key={index}
                  img={project.img}
                  title={project.title}
                  link={project.link}
                  details={project.details}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
        
        {!showAll && (
          <SwiperSlide>
            <div className="h-full flex items-center justify-center p-4">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Show More
              </button>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Projects;
