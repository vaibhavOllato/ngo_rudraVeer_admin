import React from 'react'
import { BsFillChatQuoteFill } from "react-icons/bs";
import review1 from '../assets/review1.png'
import review2 from '../assets/review2.png'
// import review3 from '../assets/review3.png'
import {motion} from 'framer-motion' 
import { fadeIn } from '../../utilis/animationVariants';


const  testimonials =[
  {
    name: 'Jane Doe',
    company: 'New York, NY',
    review: 'Supporting RudraVeer Pratishtan has been one of the most rewarding experiences of my life. Im always impressed by their dedication and the real difference they make.',
    image: review1,
  },
  {
    name: 'John Smith',
    company: 'Los Angeles, CA',
    review: 'Their innovative approach to addressing complex challenges is unparalleled, and together, we have been able to achieve remarkable results that are making a real difference in the lives of those who need it most.',
    image: review2,
  },
]

const Testimonial = () => {
  return (
    <div  className='py-12 bg-mainColor' id='testimonial'>
      <motion.div 
        variants={fadeIn('down',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='container mx-auto pb-20'>
      <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg mb-3'>What People Say About Us</h2>
          <p className='text-lg mb-12 md:w-1/2 mx-auto'>
            Help today because tomorrow you may be the one who needs more helping!
          </p>
        </div>

        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
          {
            testimonials.map ((testimonial, index) => (
              <div key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                <BsFillChatQuoteFill className='size-12 text-primary'/>
                </div>
                <div className='flex flex-col space-y-3 mb-4'>
                  <p className='text-lg mb-2'>{testimonial.review}</p>
                  <div className='flex gap-1'>
                    <img src={testimonial.image} alt="reviewer img" className='size-16 rounded-full object-cover mr-4'/>
                    <div>
                      <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-gray-600'>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </motion.div>
    </div>
  )
}

export default Testimonial
