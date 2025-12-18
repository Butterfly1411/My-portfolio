import React from 'react'

const Skills = () => {
    return (
        <div className='container  grid grid-cols-1 lg:grid-cols-2 gap-20'>
            {/* Text */}
            <div> 
                <div className='mb-10'>
                    <p className='text-[20px] text-gray-600 uppercase'>Skills</p>
                    <h1 className='text-2xl'>Technical <span>skills</span>.</h1>
                </div>
                <p className='text-gray-700 mt-2 text-[20px]'>Skilled in JavaScript, React, and Tailwind CSS for building modern, responsive web applications. Experienced in using Git and GitHub for version control and collaboration. Familiar with API integration, responsive design principles, and creating clean, user-friendly interfaces. 
                    Eager to learn new technologies and improve coding practices continuously.</p>
            </div>
            <div className='place-items-center'>
                <ul className='grid gap-6'>
                    <li className='flex lg:gap-8 gap-3 items-center'>
                        <div className='lg:w-[100px] lg:h-[100px] w-[75px] h-[75px] rounded-full border-2 shadow-2xl border-[#5ed5ea] bg-gray-950'><p className='text-center md:mt-6 mt-4 text-[18px] lg:text-xl'>HTML5</p></div>
                        <div className='lg:w-[200px] lg:h-20 w-40 h-[60px] border-2 rounded-2xl shadow-2xl border-[#5ed5ea] bg-gray-950'><p className='text-center lg:mt-7 mt-4 text-[18px] lg:text-xl'>JAVASCRIPT</p></div>
                        <div className='lg:w-[100px] lg:h-[100px] w-[75px] h-[75px] rounded-full border-2 shadow-2xl border-[#5ed5ea] bg-gray-950'><p className='text-center md:mt-6 mt-4 text-[18px] lg:text-xl'>CSS3</p></div>
                    </li>
                    <li className='flex gap-8 items-center'>
                        <div className='lg:w-[170px] lg:h-20 w-[130px] h-[60px] border-2 rounded-[90px] shadow-2xl border-[#5ed5ea] bg-gray-950'><p className='text-center mt-4 lg:mt-5 text-[18px] lg:text-xl'>React</p></div>
                        <div className='lg:w-[200px] lg:h-20 w-[150px] h-[60px] border-2 rounded-2xl shadow-2xl border-[#5ed5ea] bg-gray-950'><p className='text-center mt-4 lg:mt-6 text-[18px] text-xl'>Tailwind</p></div>
                    </li>
                    <li className='flex gap-8 items-center'>
                        <div className='lg:w-[200px] lg:h-20 w-[150px] h-[60px] border-2 rounded-2xl shadow-2xl border-[#5ed5ea] bg-gray-950'><p className='text-center mt-3 lg:mt-6 text-[18px] lg:text-xl'>UI design</p></div>
                        <div className='lg:w-[170px] lg:h-20 w-[145px] h-[60px] border-2 rounded-[90px] shadow-2xl border-[#5ed5ea] bg-gray-950'><p className='text-center mt-3 lg:mt-6 text-[18px] lg:text-xl'>TYPESCRIPT</p></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills