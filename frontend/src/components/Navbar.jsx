import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion"
import mainLogo from '../assets/logo.jpg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false)
  }
//  Show Donate Modal 
  const [showModal, setShowModal] = useState(false);

  const handleDonateClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  }
//End donate modal

  const handleScroll = () => {
    const section = ['home', 'about','ourwork','members','contact'];
    const scrollPosition = window.scrollY + 100;

    section.forEach(section =>{
      const element = document.getElementById(section);
      if(element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if(scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section)
        }
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior : 'smooth'
      })
    }
  }


  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('home')
          }}
          href="#home"
          className={`text-white ${activeSection === "home" ? "isActive" : ""}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#ourwork"
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('ourwork')
          }}
          className={`text-white ${
            activeSection === "ourwork" ? "isActive" : ""
          }`}
        >
          Our Work
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#about"
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('about')
          }}
          className={`text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About Us
        </motion.a>
      </li>
      
      <li>
        <motion.a
          href="#members"
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('members')
          }}
          className={`text-white ${
            activeSection === "members" ? "isActive" : ""
          }`}
        >
          Members
        </motion.a>
      </li>

      {/* <li>
        <motion.a
          href="#testimonial"
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('testimonial')
          }}
          className={`text-white ${
            activeSection === "testimonial" ? "isActive" : ""
          }`}
        >
          Testimonial
        </motion.a>
      </li> */}

      <li>
        <motion.a
          href="#contact"
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.9}}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('contact')
          }}
          className={`text-white ${
            activeSection === "contact" ? "isActive" : ""
          }`}
        >
          Contact Us
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">

        {/**  logo */}
        <div className="text-white text-lg font-semibold">
          <a href="/"><img src={mainLogo} alt="" width={42} className="rounded-full"/> </a>
        </div>

        {/* NavbarItems */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        {/* Button  */}
        <div className="hidden md:block">
          <a
            href="#"
            onClick={handleDonateClick}
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Donate Now
          </a>
        </div>

        {/* humberger menu  */}
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : " "
            }`}
          >
            <HiMenuAlt3 className="size-6" />
          </button>
        </div>
      </div>
        
      {/* Open modal donate  */}
      {showModal && (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90'>
    <div className='bg-white p-8 rounded-md shadow-lg max-w-xs w-full mx-4'>
      <h2 className='text-cyan-400 font-semibold'>We are working on this feature.</h2>
      <p className="text-gray-400">Coming Soon...</p>
      <button onClick={closeModal} className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>
        Close
      </button>
    </div>
  </div>
)}

        {/* {showModal && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
          <div className='bg-white p-8 rounded-md shadow-lg'>
            <h2 className='text-cyan-400 font-semibold'>We are working on this feature.</h2>
            <p className="text-gray-400">Coming Soon...</p>
            <button onClick={closeModal} className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>Close</button>
          </div>
        </div>
        )} */}

      {/* mobile nav items  */}
      {
        isOpen && (
          <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
            <ul className="flex flex-col p-4 space-y-3">
              {navLinks.props.children}
              <li className="py-2">
              <a href="#"
              className="text-white bg-primary hove:bg-primary/90 px-4 py-2 rounded"
              onClick={(e) => {
                e.preventDefault();
                handleCloseMenu();
              }}>Donate Now</a>
            </li>
            </ul>
          </nav>
        )
      }
      
      {/* <hr className='w-full border  text-primary border-primary'/> */}

    </header>
    
  );
};

export default Navbar;
