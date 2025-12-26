import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const items_li = [
        {
            id: '#home',
            title: 'Home'
        },
        {
            id: '#featuresproject',
            title: 'Features projects'
        },
        {
            id: '#aboutme',
            title: 'About me'
        },
        {
            id: '#contactme',
            title: 'Contact me'
        },
    ]
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
        <header className="relative min-h-screen overflow-hidden border-b rounded-b-[200px]">

            {/* Background image */}
            <picture className="absolute inset-0">
              <source srcSet="/code-vibe.jpg" type="image/jpeg" />
              <img
                src="/code-vibe.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                aria-hidden="true"
              />
            </picture>

            {/* Gradient + light blur only on left side */}
            <div className="absolute inset-0 bg-linear-to-r from-black/10 via-black/10 to-transparent backdrop-blur-sm"></div>

            {/* NAV + CONTENT */}
            <div className="relative z-10 grid  gap-30">
                <nav className="container" aria-label="Main navigation">
                    <div className="flex items-center justify-between mt-6">
                        <h1 className="text-2xl font-medium">Dev<span>/</span></h1>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex" aria-label="Desktop navigation">
                            <ul className="flex justify-between gap-[60px] items-center">
                                {items_li.map(item => (
                                    <li
                                        key={item.id}
                                        className="text-[20px] md:text-[16px] font-medium border-b-2 border-transparent duration-300 hover:border-[#97bfcd] pb-1"
                                    >
                                        <a href={item.id} className="focus:outline-none focus:ring-2 focus:ring-[#5ed5ea] focus:ring-offset-2 rounded" aria-label={`Navigate to ${item.title} section`}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Burger */}
                        <button
                            className="md:hidden text-3xl"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen
                                ? <i className="bi bi-x-lg" aria-hidden="true"></i>
                                : <i className="bi bi-list" aria-hidden="true"></i>}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className="md:hidden grid animate-[slideDown_0.4s_ease] items-center">
                            <ul className="grid justify-center gap-10">
                                {items_li.map(item => (
                                    <li
                                        key={item.id}
                                        className="text-[18px] font-medium text-center hover:border-[#97bfcd]"
                                    >
                                        <a href={item.id} onClick={() => setIsMenuOpen(false)} aria-label={`Navigate to ${item.title} section`}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </nav>

                {/* TEXT */}
                <div className="container">
                    <div className="text-[30px]  mx-auto text-center">
                        <h2 className="text-[30px]">Hi, I am <span className=''>Sabohat</span></h2>
                        <p className='text-[18px] mt-3'>A seasoned <span>Frontend Developer</span> transforming ideas into stunning <br />
                        digital experiences. Let's create something amazing!</p>
                    </div>

                    {/* Icons */}
                    <ul className=" gap-[30px] mt-10 social">
                        {icon_items.map(icon => {
                            const socialNames = {
                                1: 'GitHub',
                                2: 'Email',
                                3: 'LinkedIn',
                                4: 'Instagram'
                            }
                            return (
                                <li className="w-[50px] h-[50px]" key={icon.id}>
                                    <a 
                                        href={icon.link} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        aria-label={`Visit ${socialNames[icon.id]} profile`}
                                    >
                                        <i className={icon.icon + " text-3xl"} aria-hidden="true"></i>
                                        <span className="sr-only">{socialNames[icon.id]}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </header>

    )
}

export default Header