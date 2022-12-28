import React from 'react'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Navbar from './components/Navbar'
import About from './components/About'
import Stack from './components/Stack'
import Footer from './components/Footer'

const App = () => { 
  return (
    <>
      <Navbar/>
      <Hero/>
      <Bio/>
      <About/>
      <Stack/>
      <Footer/>
    </>
  )
}

export default App