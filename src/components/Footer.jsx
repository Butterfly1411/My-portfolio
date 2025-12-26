import React from 'react'

const Footer = () => {
  const icon_items = [
    {
      id: 1,
      icon: 'bi bi-github',
      link: 'https://github.com/Butterfly1411/'
    },
    {
      id: 2,
      icon: 'bi bi-envelope',
      link: 'mailto:sabohattoshpolatova72@gmail.com'
    },
    {
      id: 3,
      icon: 'bi bi-linkedin',
      link: 'https://www.linkedin.com/in/sabohat-toshpolatova-81998a388/'
    },
    {
      id: 4,
      icon: "bi bi-instagram",
      link: 'https://www.instagram.com/eunia_sbt/'
    }
  ]

  return (
    <footer className="container mx-auto px-5 py-12 border-t border-gray-300">

    {/* TOP PART */}
    <div className="flex flex-col mt-6 lg:flex-row lg:justify-between gap-12">
  
      {/* LOGO */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-semibold">
          Dev<span className="text-blue-400">/</span>
        </h2>
      </div>
  
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center lg:text-left">
  
        {/* LEFT SECTION */}
        <div>
          <p className=" leading-6 text-lg">
            Web Developer <br /> Frontend Developer
          </p>
        </div>
  
        {/* MIDDLE LINKS */}
        <div>
          <ul className="grid gap-3 text-lg">
            <li><a className="hover:text-blue-400 duration-200" href="#home">Home</a></li>
            <li><a className="hover:text-blue-400 duration-200" href="#featuresproject">My projects</a></li>
            <li><a className="hover:text-blue-400 duration-200" href="#aboutme">About me</a></li>
            <li><a className="hover:text-blue-400 duration-200" href="#contactme">Contact me</a></li>
          </ul>
        </div>
  
        {/* RIGHT SOCIAL ICONS */}
        <div>
          <p className="mb-3 text-lg font-medium">Social Media</p>
          <div className="flex justify-center lg:justify-start gap-4">
            {icon_items.map(item => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center 
                           rounded-full bg-blue-100 hover:bg-blue-200 
                           duration-200"
              >
                <i className={`${item.icon} text-xl text-gray-700`}></i>
              </a>
            ))}
          </div>
        </div>
  
      </div>
    </div>
  
    {/* BOTTOM TEXT */}
    <p className="text-center text-gray-500 mt-12 text-sm">
      © 2025 Dev. All rights reserved.
    </p>
  
  </footer>
  
  )
}

export default Footer
