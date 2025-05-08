import { FaGraduationCap, FaCertificate, FaCode, FaLanguage, FaLightbulb, FaUserFriends, FaGlobe, FaStar } from 'react-icons/fa';

const skills = [
  { icon: <FaCode className="text-blue-600" />, title: 'Programming Languages', details: 'Java, Python, JavaScript (ES6+), C++' },
  { icon: <FaCode className="text-green-600" />, title: 'Frontend', details: 'React.js, HTML, CSS, Tailwind CSS, Material-UI' },
  { icon: <FaCode className="text-yellow-600" />, title: 'Backend', details: 'Django, Node.js, Express.js, RESTful APIs, GraphQL' },
  { icon: <FaCode className="text-purple-600" />, title: 'Databases', details: 'MongoDB, SQL, Firebase' },
  { icon: <FaCode className="text-pink-600" />, title: 'Web Scraping', details: 'Beautiful Soup' },
  { icon: <FaCode className="text-indigo-600" />, title: 'Version Control', details: 'Git, GitHub' },
  { icon: <FaCode className="text-red-600" />, title: 'DevOps', details: 'Docker, CI/CD (GitHub Actions)' },
  { icon: <FaCode className="text-teal-600" />, title: 'Testing', details: 'Jest, Mocha, Chai' },
  { icon: <FaCode className="text-orange-600" />, title: 'Competitive Programming', details: 'Data Structures, Algorithms, Problem Solving' },
  { icon: <FaCode className="text-gray-600" />, title: 'Others', details: 'API Integration, Responsive Design, Web Performance Optimization' },
];

const education = [
  { icon: <FaGraduationCap className="text-blue-700" />, school: 'North South University, Dhaka', degree: 'B.Sc. in Computer Science and Engineering', date: 'Expected: Dec 2025', gpa: 'CGPA: 3.74/4.0' },
  { icon: <FaGraduationCap className="text-green-700" />, school: 'Notre Dame College, Dhaka', degree: 'HSC, Science', date: 'Jan 2020', gpa: 'GPA: 5.00/5.00' },
];

const certifications = [
  'Full-Stack Web Development (Programming Hero)',
  'Data Structures and Algorithms (Udemy, Phitron)',
  'Public Speaking (BYLC)',
  'Bash Scripting (FreeCodeCamp.org)',
  'Arduino Programming (Gobeshona Learning)',
];

const softSkills = [
  'Creativity: Crafting engaging and memorable marketing content.',
  'Collaboration: Working effectively with designers and strategists.',
  'Attention to Detail: Proofreading and editing for clarity, consistency, and engagement.',
];

const languages = [
  { icon: <FaLanguage className="text-blue-500" />, name: 'Bangla', level: 'Native' },
  { icon: <FaLanguage className="text-green-500" />, name: 'English', level: 'Fluent' },
];

const interests = [
  { icon: <FaGlobe className="text-indigo-500" />, text: 'Traveling: Enhancing adaptability and global awareness.' },
  { icon: <FaStar className="text-yellow-500" />, text: 'Fitness: Maintaining discipline and mental clarity.' },
  { icon: <FaLightbulb className="text-pink-500" />, text: 'Self-Improvement: Focused on personal growth and skill development.' },
  { icon: <FaUserFriends className="text-green-500" />, text: 'Sports: Developing teamwork and strategic thinking.' },
];

const About = () => (
  <section id="about" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900">About Me</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Skills */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaCode /> Technical Skills</h3>
        <ul className="space-y-2">
          {skills.map((skill, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700"><span>{skill.icon}</span> <span className="font-medium">{skill.title}:</span> <span>{skill.details}</span></li>
          ))}
        </ul>
      </div>
      {/* Education */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaGraduationCap /> Education</h3>
        <ul className="space-y-2">
          {education.map((edu, i) => (
            <li key={i} className="mb-2">
              <div className="flex items-center gap-2">{edu.icon} <span className="font-medium">{edu.school}</span></div>
              <div className="text-gray-700 ml-7">{edu.degree} <span className="text-xs text-gray-500">({edu.date})</span></div>
              <div className="text-gray-500 ml-7 text-sm">{edu.gpa}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* Certifications */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaCertificate /> Certifications</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          {certifications.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </div>
      {/* Soft Skills */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaLightbulb /> Soft Skills</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          {softSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
      {/* Languages */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaLanguage /> Languages</h3>
        <ul className="space-y-2">
          {languages.map((lang, i) => (
            <li key={i} className="flex items-center gap-2">{lang.icon} <span className="font-medium">{lang.name}:</span> <span>{lang.level}</span></li>
          ))}
        </ul>
      </div>
      {/* Interests */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><FaStar /> Interests</h3>
        <ul className="space-y-2">
          {interests.map((interest, i) => (
            <li key={i} className="flex items-center gap-2">{interest.icon} <span>{interest.text}</span></li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About; 