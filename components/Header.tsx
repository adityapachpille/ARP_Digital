'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // Optional: install lucide-react for icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div>
          <Image src="/arplogoblack.png" alt="Logo" width={85} height={50} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <nav className="flex flex-col space-y-2">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
