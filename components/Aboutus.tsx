import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section id='about' className="pt-24 md:pt-10 px-4 md:px-10 bg-white">
      {/* Centered Title */}
      <div className="text-center -mt-[120px] md:mt-0 mb-10">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-700">Who We Are</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Arp Digital Solutions is a forward-thinking digital marketing and technology startup dedicated to helping businesses grow and evolve in the ever-changing digital landscape. We are not just service providers—we are your digital growth partners.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Founded with a vision to bridge the gap between innovation and execution, our team brings together creativity, technical expertise, and data-driven strategy. Whether you're a small startup looking to establish your online presence or an established brand aiming to scale, we’re here to turn your goals into reality.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            At Arp Digital Solutions, we believe in creating value that lasts. Every project we take on is powered by our commitment to excellence, transparency, and results that speak for themselves.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image 
            src="/about-img.png"
            alt="About Us"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
