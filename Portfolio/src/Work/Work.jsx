// import WorkSections from "./WorkSections";

const data = [
  {
    id: "1",
    year: "2023",
    title: "React Website Developer",
    company: "Brooksource",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/React-icon.svg", // React logo as example
    duration: "Apr 2023 – Sep 2024",
    details:
      "Constructed highly interactive web applications using React.js, achieving compatibility across 10+ devices. Enhanced application performance by 20% through lazy loading and code splitting. Collaborated with a team of 4 developers to implement user-friendly UI/UX designs and integrate APIs efficiently. Received over 1,000 positive user feedback submissions within the first month of launch.",
  },
  {
    id: "2",
    year: "2022",
    title: "Website Developer",
    company: "Americares",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", // Web icon as example
    duration: "Nov 2022 – Jun 2023",
    details:
      "Designed and developed mobile-first web applications, significantly improving cross-platform compatibility. Engineered robust API integrations to streamline communication between the front-end and back-end systems. Consistently delivered projects ahead of deadlines while maintaining high quality and adhering to industry-standard best coding practices.",
  },
];

const Work = () => {
  return (
    <section id="work" className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Professional Experience</h1>
      <div className="relative border-l-2 border-primary/20 pl-6">
        {data.map((item) => (
          <div key={item.id} className="mb-12 flex flex-col md:flex-row md:items-center gap-6 relative">
            {/* Timeline Dot */}
            <span className="absolute -left-7 top-2 w-6 h-6 bg-primary/90 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <img src={item.logo} alt={item.company} className="w-4 h-4 object-contain" />
            </span>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                <span className="inline-block px-2 py-1 font-semibold text-white bg-primary rounded-md text-xs md:text-sm">{item.year}</span>
                <span className="text-lg font-semibold text-primary">{item.title}</span>
                <span className="text-gray-600 font-medium">@ {item.company}</span>
                <span className="text-xs text-gray-500 ml-2">{item.duration}</span>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mt-1">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
