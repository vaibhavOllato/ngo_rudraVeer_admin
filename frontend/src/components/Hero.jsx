import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import {motion} from 'framer-motion' 
import { fadeIn } from '../../utilis/animationVariants';
import heroImg from '../assets/hero1.jpg'

const Hero = () => {
  return (
    <section 
      id='home' 
      className='bg-cover bg-center bg-no-repeat text-white flex items-center pt-28 md:h-screen h-auto'
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-hidden gap-12 h-auto '>
    
    {/* Left Side (Content) */}
    <motion.div 
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className='w-full md:w-1/2'>
      <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>
        Transforming Communities with Love and Support.
      </h1>
      <p className='text-lg mb-12 md:pr-8'>
        Welcome to our organization, where compassion meets action. We are dedicated to providing essential support to those in need, ensuring that everyone in our community has access to the basic necessities of life.
      </p>
      <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
        <a href="#contact" className='flex gap-1 items-center'>
          <span>Get Started</span>
          <FiArrowRightCircle />
        </a>
      </button>
    </motion.div>
    
    {/* Right Side (Image) */}
    {/* <motion.div 
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className='w-2/3 md:w-2/5 lg:w-1/4 h-full'>
      <img src={heroImg} alt="heroImg" className='w-full object-cover'/>
    </motion.div> */}
  </div>
</section>    
  )
}
export default Hero;

