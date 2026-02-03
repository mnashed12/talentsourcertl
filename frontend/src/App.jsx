import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Focus from './components/Focus'
import Stats from './components/Stats'
import Process from './components/Process'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = () => {
      const nav = document.querySelector('header')
      if (window.pageYOffset > 100) {
        nav?.classList.add('scrolled')
      } else {
        nav?.classList.remove('scrolled')
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Focus />
        <Stats />
        <Process />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
