import { FaCheckCircle, FaUsers, FaClock, FaChartLine } from 'react-icons/fa';

const chooseUsPoints = [
  {
    icon: <FaUsers className="text-3xl text-themeColor" />,
    title: "Experienced Team",
    description: "Our experts bring years of industry experience to deliver top-notch solutions."
  },
  {
    icon: <FaClock className="text-3xl text-themeColor" />,
    title: "Timely Delivery",
    description: "We value your time and ensure projects are delivered as promised."
  },
  {
    icon: <FaChartLine className="text-3xl text-themeColor" />,
    title: "Result Oriented",
    description: "Every strategy is crafted to maximize ROI and measurable growth."
  },
  {
    icon: <FaCheckCircle className="text-3xl text-themeColor" />,
    title: "Quality Assurance",
    description: "We follow best practices to ensure high performance and quality in every deliverable."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-14 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
        <p className="text-gray-600 mt-2">We deliver solutions with passion, precision, and performance.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {chooseUsPoints.map((point, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-center">
            <div className="mb-4 flex justify-center">
              {point.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h3>
            <p className="text-gray-600 text-sm">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
