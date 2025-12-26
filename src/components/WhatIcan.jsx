import React from 'react'

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
        <section className='container relative mt-10' aria-labelledby="services-heading">
        
            {/* Text */}
            <div className='text-center'>
                <p className='text-[20px] text-gray-600 uppercase'>Service</p>
                <h2 id="services-heading" className='text-2xl'>What <span>I do</span>.</h2>
            </div>

            <div>
                <ul className='grid grid-cols-1 place-items-center   sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20' role="list">
                    {data_li.map(data => (
                        <li className='lg:w-[350px] h-[300px] w-[320px]  p-5 pt-9 border-2 border-[#5ed5ea] hover:bg-[#5ed5ea] hover:text-black  rounded-[10px] focus-within:ring-2 focus-within:ring-[#5ed5ea]' key={data.id} role="listitem">
                            <div className='flex justify-between items-center'>
                                <i className={`${data.icon} text-3xl`} aria-hidden="true"></i>
                                <p className='text-6xl text-gray-700' aria-hidden="true">{data.number}</p>
                            </div>
                            <div className='grid gap-2 line'>
                                <h3 className='text-2xl font-semibold'>{data.title}</h3>
                                <span className='w-20 h-0.5 border block line' aria-hidden="true"></span>
                                <p>{data.passage}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default WhatIcan