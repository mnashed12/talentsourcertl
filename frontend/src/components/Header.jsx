import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <svg className="logo-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="32" height="32" rx="6" fill="url(#logoGradient)" />
            <path d="M14 12L20 20L26 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 20L20 28L26 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20" cy="20" r="2" fill="white"/>
            <defs>
              <linearGradient id="logoGradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0f2027"/>
                <stop offset="50%" stopColor="#203a43"/>
                <stop offset="100%" stopColor="#2c5364"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">TalentSource<span className="logo-rtl">RTL</span></span>
        </div>
        
        <nav className="nav">
          <button onClick={() => scrollToSection('focus')} className="nav-link">Focus</button>
          <button onClick={() => scrollToSection('process')} className="nav-link">Process</button>
          <button onClick={() => scrollToSection('expertise')} className="nav-link">Expertise</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Connect</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
