import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-gray-100 text-gray-700 px-6 py-10'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>

                {/* Logo & Social */}
                <div>
                    <div className='mb-4 w-36'>
                        <Image src="/arplogoblack.png" alt="Logo" width={150} height={50} />
                    </div>
                    
                    <p className='mb-4 text-lg'>Connect with us</p>
                    <div className='flex space-x-4'>
                        <Link href='https://www.facebook.com/profile.php?id=61574585492384' target='_blank'>
                            <FaFacebookF className='text-blue-600 hover:text-blue-800' size={24} />
                        </Link>
                        <Link href='https://wa.me/918806112331' target='_blank'>
                            <FaWhatsapp className='text-green-600 hover:text-green-800' size={24} />
                        </Link>
                        <Link href='https://www.instagram.com/arp_digital_solutions/' target='_blank'>
                            <FaInstagram className='text-pink-500 hover:text-pink-700' size={24} />
                        </Link>
                    </div>
                </div>

                {/* Important Links */}
                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Important Links</h2>
                    <ul className='space-y-2 text-lg'>
                        <li><Link href='/' className='hover:text-black'>Home</Link></li>
                        <li><Link href='#about' className='hover:text-black'>About</Link></li>
                        <li><Link href='#services' className='hover:text-black'>Services</Link></li>
                        <li><Link href='#contact' className='hover:text-black'>Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
                    <ul className='space-y-3 text-lg'>
                        <li className='flex items-center gap-3'>
                            <FiPhone size={20} /> <span>+91 8806112331</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <FiMail size={20} /> <span>connect.arpdigitalsolutions@gmail.com</span>
                        </li>


                        <li className="flex items-start gap-4">
  <div className="pt-1">
    <FiMapPin size={24} className="text-themeColor" />
  </div>
  <span>
    SNO.32/5, Sai Aangan, Navecha Road, Gangotri Nagar, Pimple Gurav, Pimpri-Chinchwad, Maharashtra 411061
  </span>
</li>

                    </ul>
                </div>

            </div>

            {/* Bottom line */}
            <div className='text-center text-xl text-gray-700 mt-10 border-t pt-4'>
                © {new Date().getFullYear()} Arp Digital Solutions. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
