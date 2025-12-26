import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FeaturesProjects from './components/FeaturesProjects'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import WhatIcan from './components/WhatIcan'
import Skills from './components/Skills'

const App = () => {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main">
        <section id="whatIcan" aria-label="Services section"><WhatIcan /></section>
        <section id="featuresproject" aria-label="Featured projects section"><FeaturesProjects /></section>
        <section id="aboutme" aria-label="About me section"><AboutMe /></section>
        <section id="skills" aria-label="Skills section"><Skills /></section>
        <section id="contactme" aria-label="Contact me section"><ContactMe /></section>
      </main>
      <Footer />
    </>
  )
}

export default App