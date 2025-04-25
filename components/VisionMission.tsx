import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="py-10 px-4 md:px-10 bg-white">
    
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <FaEye className="text-themeColor text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Our Vision</h3>
          </div>
          <p className="text-gray-600 text-md">
          To become a trusted, go-to digital partner for startups, small businesses, and enterprises by delivering measurable results, fostering innovation, and building long-term relationships.
          </p>
          <p className="text-gray-600 text-md">
          We envision a future where technology and creativity go hand-in-hand, helping businesses of all sizes succeed in a digital-first world.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <FaBullseye className="text-themeColor text-3xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Our Mission</h3>
          </div>
          <p className="text-gray-600 text-md">
          To empower brands with tailored digital marketing strategies and cutting-edge technology solutions that drive growth, boost engagement, and create meaningful impact.
          </p>
          <p className="text-gray-600 text-md">
          We aim to simplify the digital journey for our clients by providing end-to-end services—from brand building and lead generation to custom software development and automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
