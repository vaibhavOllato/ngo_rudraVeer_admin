import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const memberList = [
  {
    name: 'शुभम गाडगे',
    img: '/teamMemberOne.jpg',
    alternate: 'teamOneImg',
    description: 'संस्थापक अध्यक्ष रुद्रवीर प्रतिष्ठान',
    features: [
      'Event Management',
      '+91 8080301618',
    ],
  },
  {
    name: 'प्रशांत मोहिते',
    img: '/teamMemberTwo.jpg',
    alternate: 'teamOneImg',
    description: 'कार्यवाहक',
    features: [
      'Event Coordinator',
      '+91 9702032730',
    ],
  },
  {
    name: 'अक्षय शिर्के',
    img: '/teamMemberThree.png',
    alternate: 'teamOneImg',
    description: 'खजिनदार',
    features: [
      'Fundraising',
      '+91 8291011850',
    ],
  },
  {
    name: 'महेश जाधव',
    img: '/teamMemberFour.jpg',
    alternate: 'teamOneImg',
    description: 'सचिव',
    features: [
      'Communication Manager',
      '7080905252',
    ],
  },
  {
    name: 'वैभव तुपे',
    img: '/teamMemberFive.jpg',
    alternate: 'teamOneImg',
    description: 'सचिव',
    features: [
      'IT Specialist',
      '2547894562',
    ],
  },
  {
    name: 'जयेश',
    img: '/teamMemberSix.jpg',
    alternate: 'teamOneImg',
    description: 'सचिव',
    features: [
      'Volunteer Coordinator',
      '9874561230',
    ],
  },
]

const MeetOurMember = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? memberList.length - 3 : currentIndex - 3;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex >= memberList.length - 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 3;
    setCurrentIndex(newIndex);
  };

  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <div id='members' className=' bg-para py-12 pt-32'>
      <div className='container mx-auto px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg mb-3'>Meet Our Members</h2>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>
            Help today because tomorrow you may be the one who needs more helping!
          </p>
          <h4 className='text-3xl font-bold font-secondary text-orange-900 underline'>Managing Committee</h4>
        </div>

        {/* Navigation buttons outside the member container */}
        <div className='flex justify-between items-center pb-12'>
          {/* LEFT ARROW */}
          <div className='text-2xl rounded-full p-2 bg-primary text-white cursor-pointer' >
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          {/* Members Container */}
          <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8'>
            {memberList.slice(currentIndex, currentIndex + 3).map((member, index) => (
              <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
                <img src={member.img} alt={member.alternate} width={180} />
                <h3 className='text-2xl pt-2 font-semibold mb-4'>{member.name}</h3>
                <hr className='w-24 border text-primary border-primary' />
                <p className='text-l font-bold mb-4 pt-2 text-gray-400'>{member.description}</p>
                <ul className='list-disc list-inside space-y-2 mb-6'>
                  {member.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <div className='text-2xl rounded-full p-2 bg-primary text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetOurMember;


