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
            id: '#aboutMe',
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
            link: 'malito:sabohattoshpolatova72@gmail.com'
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
            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: "url(/code-vibe.jpg)" }}
            ></div>

            {/* Gradient + light blur only on left side */}
            <div className="absolute inset-0 bg-linear-to-r from-black/10 via-black/10 to-transparent backdrop-blur-sm"></div>

            {/* NAV + CONTENT */}
            <div className="relative z-10 grid  gap-30">
                <nav className="container">
                    <div className="flex items-center justify-between mt-6">
                        <h2 className="text-2xl font-medium">Dev<span>/</span></h2>

                        {/* Desktop nav */}
                        <div className="hidden md:flex">
                            <ul className="flex justify-between gap-[60px] items-center">
                                {items_li.map(item => (
                                    <li
                                        key={item.id}
                                        className="text-[20px] md:text-[16px] font-medium border-b-2 border-transparent duration-300 hover:border-[#97bfcd] pb-1"
                                    >
                                        <a href={item.id}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Burger */}
                        <button
                            className="md:hidden text-3xl"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen
                                ? <i className="bi bi-x-lg"></i>
                                : <i className="bi bi-list"></i>}
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
                                        <a href="">{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </nav>

                {/* TEXT */}
                <div className="container">
                    <h2 className="text-[30px]  mx-auto text-center">
                        Hi, I am <span className=''>Sabohat</span>
                        <p className='text-[18px] mt-3'>A seasoned <span>Frontend Developer</span> transforming ideas into stunning <br />
                        digital experiences. Let's create something amazing!</p>
                    </h2>

                    {/* Icons */}
                    <ul className=" gap-[30px] mt-10 social">
                        {icon_items.map(icon => (
                            <li className="w-[50px] h-[50px]" key={icon.id}>
                                <a href={icon.link} target="_blank">
                                    <i className={icon.icon + " text-3xl"}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </header>

    )
}

export default Header