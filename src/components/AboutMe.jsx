import React from 'react'

const AboutMe = () => {
  return (
    <div className='container mt-20'>
      {/* Text */}
      <div className='text-center'>
        <p className='text-[20px] text-gray-600 uppercase'>My Bio</p>
        <h1 className='text-2xl'>About <span>me</span>.</h1>
      </div>
      <div className='grid grid-cols-1 place-items-center  lg:flex lg:justify-between items-center gap-30'>
        {/* Image */}
        <div className='mt-10'>
          <div className='lg:w-110 lg:h-110 w-80 h-80 border-2 border-[#5ed5ea] rounded-full relative'>
            <div>
              <img className='w-13 h-13 rounded-full absolute lg:left-6 lg:top-17 left-3 top-10' src="/html.png" alt="" />
              <img className='w-13 h-13 rounded-full absolute lg:left-81 lg:top-5 left-61 top-3' src="/js.jpg" alt="" />
              <img className='w-13 h-13 rounded-full absolute lg:left-81 lg:top-90 left-61 top-65' src="/css.png" alt="" />
              <img className='w-13 h-13 rounded-full absolute lg:left-21 lg:top-92 left-12 top-72' src="/react2.webp" alt="" />
            </div>
            <img className='lg:w-90 lg:h-90 w-70 h-70 rounded-full lg:ml-10 lg:mt-9 ml-5 mt-5 ' src='/Sabohat3.png' alt="" />
          </div>

        </div>
        {/* Text about me */}
        <div className='grid gap-6'>
          <p>Hello! I’m Sabohat, a passionate frontend developer dedicated to building clean and responsive websites.  I enjoy transforming creative ideas into functional web applications that provide great user experiences.</p>
          <p>
          Currently, I am focusing on improving my JavaScript skills and deepening my understanding of React to create efficient and scalable projects.
           I am always eager to learn new technologies and best practices in web development.
          </p>
          <p>My goal is to become a skilled software engineer who contributes to meaningful projects and continuously grows both personally
             and professionally. I believe in hard work, curiosity, and staying up-to-date with the latest trends in technology.</p>
          <button onClick={() => window.location.href = 'https://docs.google.com/document/d/1JP2c4ahXwk7BG_d7wU2XvBr_H-iTG3gJvJzSuzDmm28/edit?tab=t.0'} className='text-left  items-center-center text-gray-800 bg-[#5ed5ea] mt-4 flex gap-[7px]  rounded-2xl w-[180px] h-[55px] p-4 '>
           <p className='text-[18px]'> View Resume</p>
            <i className="bi bi-briefcase text-[19px]"></i>
          </button>
        </div>
      </div>  
    </div>
  )
}

export default AboutMe