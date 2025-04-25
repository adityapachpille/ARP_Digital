import Image from 'next/image';

const servicesData = [
  {
    title: "Web Development",
    image: "/services/web2.jpg",
    description: "We build responsive, high-performance websites tailored to your brand."
  },
  {
    title: "E-commerce Solutions",
    image: "/services/ecommerce.jpg",
    description: "Custom online stores that convert visitors into loyal customers."
  },

  {
    title: "Mobile App Development",
    image: "/services/mobile.jpg",
    description: "Robust mobile applications for both iOS and Android platforms."
  },
  {
    title: "UI/UX Design",
    image: "/services/uiux.jpg",
    description: "User-centered design for seamless digital experiences."
  },
  {
    title: "Search Engine Optimization (SEO)",
    image: "/services/seo.jpg",
    description: "Improve rankings, drive organic traffic, and increase visibility."
  },

  {
    title: "Social Media Management",
    image: "/services/social.jpg",
    description: "Grow and engage your audience on major social platforms."
  },

  {
    title: "Graphic Design",
    image: "/services/design.jpg",
    description: "Creative visuals and branding that communicate and convert."
  },
  
 
  {
    title: "Content Creation",
    image: "/services/content.jpg",
    description: "Engaging content strategies that drive traffic and engagement."
  },
 
  {
    title: "Pay-Per-Click (PPC)",
    image: "/services/ppc.jpg",
    description: "Target the right audience with high-converting ad campaigns"
  },
];

const Services = () => {
  return (
    <section id='services' className="py-12 px-4 md:px-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
