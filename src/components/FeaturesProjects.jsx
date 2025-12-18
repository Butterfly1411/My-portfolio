import React from 'react'
import gallery from '../../public/gallery.png'
import flag from '../../public/Planshet-shots.png'
import globar from '../../public/globar-shots.png'

const FeaturesProjects = () => {
  const project_li = [
    {
      id: 1,
      img: gallery,
      title: 'Gallery',
      passage: 'Discover amazing photography collections'
    },
    {
      id: 2,
      img: flag,
      title: 'Flag Quiz game',
      passage: 'Interactive, educational, kid-friendly, engaging, fun. '
    },
    {
      id: 3,
      img: globar,
      title: 'GlobalTrade',
      passage: 'Modern, responsive, e-commerce, user-friendly, secure..'
    },
  ]
  return (
    <div className='container'>
      {/* Text */}
      <div className='text-center'>
        <p className='text-[20px] text-gray-600 uppercase'>Portfolio</p>
        <h1 className='text-2xl'>Featured <span>projects</span>.</h1>
      </div>
      <div>
        <ul className='grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-10  gap-6 mt-20'>
          {project_li.map(project => (
            <li className='w-[320px] lg:w-[380px] flex flex-col' key={project.id}>
              <div className='lg:w-[380px] lg:h-[310px] w-[320px] h-[290px] p-6 border-2   border-[#5ed5ea]  rounded-xl bg-[#0ff]/20 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.4)] overflow-hidden '>
                <img className='w-full h-full rounded-xl object-cover transition-transform duration-500 ease-out hover:scale-110' src={project.img} alt="" />
              </div>
              {/* Text */}
              <div className='mt-5'>
                <h3>{project.title}</h3>
                <p>{project.passage}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default FeaturesProjects