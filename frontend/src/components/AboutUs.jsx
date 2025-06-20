import React, { useState } from 'react'
import posterImg from '../assets/posterImg.jpg'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import {motion} from 'framer-motion' 
import { fadeIn } from '../../utilis/animationVariants';


const AboutUs = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
  }


  return (
    <div id='about' className='bg-mainColor pb-16 pt-20'>
      <motion.div 
        variants={fadeIn('down',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
        {/* left side  */}
        <div className='md:w-1/2 w-full mb-8 md:mb-0'>
          {
            ! isVideoPlaying ? (
              <div className='relative'>
                <img src={posterImg} alt="videoImage" className='w-full md:h-[446px] h-auto rounded-lg object-cover'/>
                <button
                  onClick={handleVideoPlay} 
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-3 rounded-full shadow-lg cursor-pointer'><FaRegCirclePlay className='size-12 text-white'/></button>
              </div>
            ) : (null)
          }
        </div>

        {/* right side  */}
        <div className='md:w-1/2 w-full'>
        <h2 className='text-4xl text-white font-secondary font-bold mb-4 leading-snug'>Our Approach: Creating Change Across All Levels</h2>
          <p className='text-lg text-gray-800 mb-12 md:pr-8'>Welcome to our organization, where compassion meets action. We are dedicated to providing essential support to those in need, ensuring that everyone in our community has access to the basic necessities of life.</p>
          <p className='text-lg text-gray-800 mb-4 md:pr-8'>Registration no:<span className='text-red-600'> महा/362/2020</span></p>
          <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
            <a href="#contact" className='flex gap-1 items-center'>
              <span>Get Started</span>
              <FiArrowRightCircle />
            </a>
          </button>
          </div>
      </div>

      {
        isVideoPlaying && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
            <div className='relative w-full h-full flex items-center justify-center'>

            <iframe width="560" height="315" src="https://www.youtube.com/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <button onClick={handleCloseVideo} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
                X
            </button>
          </div>
          </div>
        )
      }
      </motion.div>
    </div>
  )
}

export default AboutUs
