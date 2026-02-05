import './Focus.css'

function Focus() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="focus" className="focus section">
      <div className="container">
        <div className="focus-content">
          <div className="focus-image">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" 
              alt="Team collaboration" 
            />
          </div>
          <div className="focus-text">
            <h2>Our <strong>Focus</strong></h2>
            <p className="focus-intro">
              We specialize exclusively in executive recruitment for the private credit ecosystem, with deep expertise in real estate transition lending, direct lending, and structured finance.
            </p>
            <p>
              Our approach combines industry insight with personalized service. We understand that each placement represents a pivotal career decision and a critical hire for our clients.
            </p>
            <button onClick={scrollToContact} className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Focus
