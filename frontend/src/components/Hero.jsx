import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
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
    <section className="hero">
      <div className="hero-image-container">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&auto=format&fit=crop&q=80" 
          alt="Professional team meeting" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Executive Search for<br/><strong>Private Credit Leaders</strong></h1>
          <p className="hero-description">
            We identify and connect exceptional talent with premier opportunities in real estate transition lending and private credit markets.
          </p>
          <div className="hero-cta">
            <button onClick={scrollToContact} className="btn btn-outline">Explore Opportunities</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
