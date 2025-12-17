import React from 'react'
import StarsBackground from './StartsBackground'

const WhatIcan = () => {
    const data_li = [
        {
            id: 1,
            number: '01',
            icon: 'bi bi-code-slash',
            title: 'Web Development',
            passage: 'I use my knowledge of various programming languages such as HTML5 , CSS3 , JAVASCRIPT , TAILWIND to build digital solutions for users.'
        },
        {
            id: 2,
            number: '02',
            icon: 'bi bi-palette',
            title: 'UI Design',
            passage: 'Crafting user-centric digital experiences that seamlessly blend aesthetics and functionality. Expert in user-centered deisgn and responsive interfaces. '
        },
        {
            id: 3,
            number: '03',
            icon: 'bi bi-pen',
            title: 'Content Writing',
            passage: 'I often write about technology, education, and personal development on my personal channel. I enjoy sharing the knowledge I gain from my learning.'
        },
    ]
    return (
        <div className='container relative  mt-10'>
        
            {/* Text */}
            <div className='text-center'>
                <p className='text-[20px] text-gray-600 uppercase'>Service</p>
                <h1 className='text-2xl'>What <span>I do</span>.</h1>
            </div>

            <div>
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>
                    {data_li.map(data => (
                        <li className='lg:w-[350px] h-[300px] w-[320px]  p-5 pt-9 border-2 border-[#5ed5ea] hover:bg-[#5ed5ea] hover:text-black  rounded-[10px]' key={data.id}>
                            <div className='flex justify-between items-center'>
                                <i className={`${data.icon} text-3xl`}></i>
                                <p className='text-6xl text-gray-700'>{data.number}</p>
                            </div>
                            <div className='grid gap-2 line'>
                                <h1 className='text-2xl'>{data.title}</h1>
                                <span className='w-20 h-0.5 border block line'></span>
                                <p>{data.passage}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default WhatIcan