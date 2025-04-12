

const ProjectItems = ({ img, title, link, details }) => {
  return (
    <div className="relative group h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
      {/* Image Container with Hover Effects */}
      <div className="relative h-60 xs:h-72 sm:h-80 overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90" />
        
        {/* Hover Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-opacity duration-300">
          {/* Technology Stack */}
          <div className="mb-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
            {details.split(', ').map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>

          {/* Live Preview Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-white text-gray-900 rounded-lg font-semibold 
                      opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 
                      transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02]
                      border border-white/20 shadow-lg hover:shadow-xl"
          >
            Live Preview
            <svg 
              className="w-4 h-4 ml-2 -mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Static Content for Mobile */}
      <div className="p-4 bg-white sm:hidden">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{details}</p>
        <a
          href={link}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
        >
          View Project
          <svg 
            className="w-4 h-4 ml-1.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;