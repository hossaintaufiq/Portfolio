import { FaProjectDiagram, FaTasks, FaChartLine } from 'react-icons/fa';

const stats = [
  {
    icon: <FaProjectDiagram className="w-10 h-10 text-primary" />,
    title: 'Total Projects',
    value: '12+',
    desc: '21% more than last year',
    color: 'text-primary',
  },
  {
    icon: <FaChartLine className="w-10 h-10 text-secondary" />,
    title: 'Active Projects',
    value: '3',
    desc: 'Currently working on',
    color: 'text-secondary',
  },
  {
    icon: <FaTasks className="w-10 h-10 text-green-600" />,
    title: 'Tasks Completed',
    value: '86%',
    desc: '31 tasks remaining',
    color: 'text-green-600',
  },
];

const Visitors = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900">Quick Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{stat.icon}</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">{stat.title}</div>
            <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-500 text-sm">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Visitors;