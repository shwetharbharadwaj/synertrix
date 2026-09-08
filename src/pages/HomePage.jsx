import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'
import Industries from '../components/Industries'
import Platforms from '../components/Platforms'
import Contact from '../components/Contact'

export default function HomePage() {
  return <>
    <Hero />
    <About />
    <Services />
    <Process />
    <Industries />
    <Platforms />
    <Contact />
  </>
}
