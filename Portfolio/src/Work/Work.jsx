import WorkSections from "./WorkSections";

const data = [
  {
    id: "1",
    year: "2023",
    title: "React Website Developer - Brooksource (Remote)",
    duration: "Apr 2023 – Sep 2024",
    details:
      "Constructed highly interactive web applications using React.js, achieving compatibility across 10+ devices. Enhanced application performance by 20% through lazy loading and code splitting. Collaborated with a team of 4 developers to implement user-friendly UI/UX designs and integrate APIs efficiently. Received over 1,000 positive user feedback submissions within the first month of launch.",
  },
  {
    id: "2",
    year: "2022",
    title: "Website Developer - Americares (Remote)",
    duration: "Nov 2022 – Jun 2023",
    details:
      "Designed and developed mobile-first web applications, significantly improving cross-platform compatibility. Engineered robust API integrations to streamline communication between the front-end and back-end systems. Consistently delivered projects ahead of deadlines while maintaining high quality and adhering to industry-standard best coding practices.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5c]">Work</h1>

      {data.map((item) => (
        <WorkSections
          key={item.id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
