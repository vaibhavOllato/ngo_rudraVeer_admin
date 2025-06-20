import React, { useState } from 'react'
import { AiFillMessage } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [showModal, setShowModal] = useState(false)

  const handleSumbit = (e) => {
    e.preventDefault();
    const data = {
      name,phone, message
    }
    // console.log(data);
    if(!data){
      alert("Please fill all fields")
      return;
    }
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setName("")
    setPhone("")
    setMessage("")
  }

  return (
    <div className='bg-para flex items-center justify-center py-28 px-8' id='contact'>
      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 text-white'>

           {/* left side  */}
            <div className='space-y-8'>
              <h2 className='text-4xl flex font-bold font-secondary mb-4 text-white'>Send us a message  <AiFillMessage className='size-10 text-primary'/>
              </h2>
              <p className='text-gray-500'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our NGO community.</p>
              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <RiMessage3Fill className='text-primary'/>
                </div>
                <div className='space-y-1 cursor-pointer'>
                  {/* <h3 className='text-lg font-medium'>Mail To:</h3> */}
                  <p className='text-black'>Contact@RudraVeer.in</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaPhone className='text-primary'/>
                </div>
                <div className='space-y-1 cursor-pointer'>
                  <p className='text-black'>+91 9020301546</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaLocationDot className='text-primary'/>
                </div>
                <div className='space-y-1 cursor-pointer'>
                  <p className='text-black'>Kaseli office, Thane 400600.</p>
                </div>
              </div>
            </div>

            {/* right side  */}
            <div className='space-y-8 p-8 bg-white shadow-2xl rounded-md'>
              <h3 className='text-2xl text-primary font-bold mb-4'>Fill a form</h3>
              <form onSubmit={handleSumbit} className='space-y-8'>
                <div >
                  <input onChange={e=> setName(e.target.value)} type="text" placeholder='Enter your name' required className='w-full p-4 text-black rounded-md focus-outline-none focus:ring-2 focus:ring-primary shadow'/>
                </div>
                <div>
                  <input onChange={e=> setPhone(e.target.value)} type="tel" placeholder='Contact number' required className='w-full p-4 text-black rounded-md focus-outline-none focus:ring-2 focus:ring-primary shadow'/>
                </div>
                <textarea onChange={e=> setMessage(e.target.value)} rows={5} placeholder='Write your message...' className='w-full p-4 text-black rounded-md focus-outline-none focus:ring-2 focus:ring-primary shadow'></textarea>
                <button type='submit' className='w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80'>Send message...</button>
              </form>
            </div>
        </div>
      </div>

      {/* Show Modal  */}
      {
        showModal && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
            <div className='bg-white p-8 rounded-md shadow-lg'>
              <h2 className='text-2xl font-bold mb-4'>Thank you...😀</h2>
              <p>Thank You <span className='text-cyan-400 font-semibold'>{name}</span> , for submitting your response.</p>
              <button onClick={closeModal} className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>Close</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Contact
