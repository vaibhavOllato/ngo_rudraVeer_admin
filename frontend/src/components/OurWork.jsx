import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ourwork1 from '../assets/ourwork-1.jpg'
// import ourwork2 from '../assets/ourwork-2.jpg'
import ourwork3 from '../assets/ourwork-3.jpg'
// import ourwork4 from '../assets/ourwork-2.jpg'
import {motion} from 'framer-motion' 
import { fadeIn } from '../../utilis/animationVariants';

const OurWork = () => {
  return (
    <div className='bg-mainColor' id='ourwork' > 
      <div className='pt-28 px-4 container mx-auto'>
        <motion.div 
          variants={fadeIn('up',0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
          className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together</h2>
          <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius sequi deleniti ex. Iste voluptatibus quam neque voluptate vero corrupti!</p>
        </motion.div>

        {/* OurWork category  */}
        <div className='py-12 md:w-4/5 mx-auto'>
        <Tabs>
          <motion.TabList 
            variants={fadeIn('up',0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
            <Tab>Old age home</Tab>
            <Tab>Children Welfare</Tab>
            <Tab>Society Welfare</Tab>
            <Tab>Medical Camp</Tab>
          </motion.TabList>

          <TabPanel>
            <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8"> 
            <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-primary mb-4'>Old age home</h3>
              <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis expedita dolorem fugit, quas alias provident.</p>
              <h4 className='text-xl font-medium text-black mb-4'>What we donate </h4>
              <ul className='list-disc list-inside space-y-3'>
                <li>Food, fruit</li>
                <li>Clothes</li>
                <li>Bed, massage machine</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={ourwork1} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover'/>
            </div>
            </motion.div>
          </TabPanel>
          
          <TabPanel >
            <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
            <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-primary mb-4'>Children Welfare</h3>
              <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis expedita dolorem fugit, quas alias provident.</p>
              <h4 className='text-xl font-medium text-black mb-4'>What we donate </h4>
              <ul className='list-disc list-inside space-y-3'>
                <li>Food</li>
                <li>Clothes, Books, Bags</li>
                <li>Cricket kit, football</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={ourwork1} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover'/>
            </div>
            </motion.div>
          </TabPanel>

          <TabPanel >
            <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8"> 
            <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-primary mb-4'>Society Welfare</h3>
              <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis expedita dolorem fugit, quas alias provident.</p>
              <h4 className='text-xl font-medium text-black mb-4'>What we donate </h4>
              <ul className='list-disc list-inside space-y-3'>
                <li>Household Items</li>
                <li>Medical Supplies</li>
                <li>Clothes, Food & Water</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={ourwork3} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover'/>
            </div>
            </motion.div>
          </TabPanel>

          <TabPanel >
            <motion.div 
              variants={fadeIn('up',0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="flex flex-col md:flex-row gap-8 mt-8">
            <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-primary mb-4'>Medical Camp</h3>
              <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis expedita dolorem fugit, quas alias provident.</p>
              <h4 className='text-xl font-medium text-black mb-4'>What we donate </h4>
              <ul className='list-disc list-inside space-y-3'>
                <li> Hygiene Products</li>
                <li>Blood pressure Checking</li>
                <li>Diabetes, Body Checkup</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={ourwork1} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover'/>
            </div>
            </motion.div>
          </TabPanel>

          
        </Tabs>

        </div>

      </div>
    </div>
  )
}

export default OurWork
