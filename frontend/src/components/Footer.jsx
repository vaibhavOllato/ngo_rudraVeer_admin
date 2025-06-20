import React from 'react'
import { FaEnvelope, FaFacebookF } from 'react-icons/fa6'
import footerLogo from '../assets/footer-logo.jpg'
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-12 bg-heroBg px-8'>

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
        <div className='space-y-6 mr-14'>
          <div className='flex items-centerspace-x-2'>
            <img src={footerLogo} alt="" width={32} className=' h-auto rounded-full'/>

            {/* <h2 className='w-32 h-auto text-white font-bold'>RudraVeer</h2> */}
          </div>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum error voluptas facere harum perferendis? Et?</p>
          <div className='flex space-x-4'>
            <a href="https://www.facebook.com/share/tz8XyhKCmZ9AV8MH/?mibextid=qi2Omg"
                target="_blank" 
                className='bg-gray-200 text-heroBg rounded-full size-10 flex items-center justify-center hover:bg-heroBg hover:text-white'>
              <FaFacebookF className='text-xl'/>

            </a>
            <a href="https://www.instagram.com/rudraveerpratishtan?igsh=MXFrNG1sbmt1N3ltZw=="
                target="_blank"
                className='bg-gray-200 text-heroBg rounded-full size-10 flex items-center justify-center hover:bg-heroBg hover:text-white'>
              <FaInstagram className='text-xl'/>
            </a>
            <a href="#" className='bg-gray-200 text-heroBg rounded-full size-10 flex items-center justify-center hover:bg-heroBg hover:text-white'>
              <FaYoutube className='text-xl'/>
            </a>
            <a href="#" className='bg-gray-200 text-heroBg rounded-full size-10 flex items-center justify-center hover:bg-heroBg hover:text-white'>
              <FaTwitter className='text-xl'/>
            </a>
          </div>
        </div>

        <div className='space-y-6'>
          <h3 className='text-white text-xl font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-3'>
            <li>
              <a href="#home" className='hover:underline text-gray-400'>Home</a>
            </li>

            <li>
            <a href="#ourwork" className='hover:underline text-gray-400'>Our Work</a>
            </li>

            <li>
            <a href="#about" className='hover:underline text-gray-400'>About Us</a>
            </li>

            <li>
            <a href="#member" className='hover:underline text-gray-400'>Members</a>
            </li>

            <li>
            <a href="#contact" className='hover:underline text-gray-400'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='space-y-6'>
          <h3 className='text-white text-xl font-semibold mb-4'>Support</h3>
          <ul className='space-y-3'>
            <li>
              <a href="#" className='hover:underline text-gray-400'>Old age home</a>
            </li>

            <li>
            <a href="#" className='hover:underline text-gray-400'>Food Supply</a>
            </li>

            <li>
            <a href="#" className='hover:underline text-gray-400'>Medicl Camp</a>
            </li>

            <li>
            <a href="#" className='hover:underline text-gray-400'>Children Welfare</a>
            </li>
          </ul>
        </div>

        <div className='space-y-6'>
          <h3 className='text-white text-xl font-semibold mb-4'>Contact Info</h3>
          <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
              <FaMapMarkerAlt className='text-primary'/>
              <p className='text-gray-400'>123 Street, Thane, India.</p>
            </li>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-primary'/>
              <p className='text-gray-400'>+91 807065024</p>
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className='text-primary'/>
              <p className='text-gray-400'>Contact@RudraVeer.in.</p>
            </li>
          </ul>
        </div>

        

      </div>
    </div>
  )
}

export default Footer
