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
      <div className="hero-overlay"></div>
      <div className="hero-image"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Executive Search for<br/><strong>Private Credit Leaders</strong></h1>
          <p className="hero-description">
            We identify and connect exceptional talent with premier opportunities in real estate transition lending and private credit markets.
          </p>
          <div className="hero-cta">
            <button onClick={scrollToContact} className="btn btn-primary">Explore Opportunities</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
