import React from 'react'

const FeaturesProjects = () => {
  const project_li = [
    {
      id: 1,
      img: '/gallery.png',
      title: 'Gallery',
      passage: 'Discover amazing and beautiful photography collections.'
    },
    {
      id: 2,
      img: '/Planshet-shots.png',
      title: 'Flag Quiz game',
      passage: 'Interactive, educational, kid-friendly, engaging, fun. '
    },
    {
      id: 3,
      img: '/globar-shots.png',
      title: 'GlobalTrade',
      passage: 'Modern, responsive, e-commerce, user-friendly, secure..'
    },
  ]
  return (
    <section className='container' aria-labelledby="projects-heading">
      {/* Text */}
      <div className='text-center'>
        <p className='text-[20px] text-gray-600 uppercase'>Portfolio</p>
        <h2 id="projects-heading" className='text-2xl'>Featured <span>projects</span>.</h2>
      </div>
      <div>
        <ul className='grid grid-cols-1 place-content-center  items-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-15  gap-6 mt-20' role="list">
          {project_li.map(project => (
            <li className='w-[320px] lg:w-[380px] flex flex-col' key={project.id} role="listitem">
              <div className='lg:w-[380px] lg:h-[310px] w-[320px] h-[290px] p-6 border-2   border-[#5ed5ea]  rounded-xl bg-[#0ff]/20 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.4)] overflow-hidden '>
                <img 
                  className='w-full h-full rounded-xl object-cover transition-transform duration-500 ease-out hover:scale-110' 
                  src={project.img} 
                  alt={`${project.title} project screenshot`}
                  loading="lazy"
                  width="380"
                  height="310"
                />
              </div>
              {/* Text */}
              <div className='mt-5'>
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <p className='text-gray-400'>{project.passage}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default FeaturesProjects