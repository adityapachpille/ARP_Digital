'use client'; // Required for components using React hooks or client-side libraries in Next.js

// React and other necessary imports
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'; // EmailJS for sending emails without a backend
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa"; // Icons

// Main ContactUs component
const ContactUs = () => {
  // useRef to access the form DOM element directly
  const form = useRef<HTMLFormElement>(null);

  // State to store form submission status message
  const [status, setStatus] = useState("");

  // Function to handle form submission
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on submit

    // EmailJS: send form values to the configured template and service
    emailjs
      .sendForm('service_4xnv4oa', 'template_xyka04n', form.current!, {
        publicKey: 'plTv-s8aDwbuNsbJX', // Your public API key from EmailJS
      })
      .then(
        () => {
          // If email sent successfully
          setStatus("Message sent successfully!");
          form.current?.reset(); // Reset the form fields
        },
        (error) => {
          // If sending fails, log error and update status
          console.error("Email sending error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  // JSX returned by the component
  return (
    <section id='contact' className="bg-white py-14 px-4 md:px-10">
      {/* Section title and intro */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you! Fill out the form below to get in touch.
        </p>
      </div>

      {/* Two-column grid layout: form + contact info */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column: Contact form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name and Email fields in grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name input */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Email input */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Phone number input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Mobile No</label>
              <input
                type="number"
                name="form_no"
                placeholder="+91 9898989898"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message textarea */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>

            {/* Show status (success or error message) */}
            {status && <p className="text-green-600 font-medium mt-4">{status}</p>}
          </form>
        </div>

        {/* Right column: Contact details */}
        <div className="space-y-8">
          {/* Office address */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Office</h3>
            <p className="text-gray-600 mt-2">
              SNO.32/5, SaI AANGAN, NAVECHA ROAD, Gangotri Nagar, PIMPLE GURAV,
              Pimpri-Chinchwad, Maharashtra 411061
            </p>
          </div>

          {/* Contact methods */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Phone:</strong> +91 8806112331</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:connect.arpdigitalsolutions@gmail.com" className="text-blue-600">
                  connect.arpdigitalsolutions@gmail.com
                </a>
              </li>
              <li>
                <strong>Support:</strong>{" "}
                <a href="mailto:connect.arpdigitalsolutions@gmail.com" className="text-blue-600">
                  connect.arpdigitalsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social media links */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
            <div className="flex space-x-4 text-blue-600 mt-2 text-xl">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61574585492384"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/918806112331"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/arp_digital_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the component so it can be used elsewhere
export default ContactUs;
