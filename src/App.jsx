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
      <Header />
      <main>
        <section id="whatIcan"><WhatIcan /></section>
        <section id="featuresproject"><FeaturesProjects /></section>
        <section id="aboutme"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="contactme"><ContactMe /></section>
      </main>
      <Footer />
    </>
  )
}

export default App