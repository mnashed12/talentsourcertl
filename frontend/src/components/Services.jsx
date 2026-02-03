import './Services.css'

function Services() {
  const services = [
    {
      title: 'Investment Professionals',
      description: 'Credit analysts, portfolio managers, and investment committee members with deep sector expertise.',
    },
    {
      title: 'Origination & Sourcing',
      description: 'Business development professionals and relationship managers with proven deal flow.',
    },
    {
      title: 'Risk & Underwriting',
      description: 'Senior risk officers and underwriters specialized in credit assessment and portfolio monitoring.',
    },
    {
      title: 'Operations & Fund Management',
      description: 'COOs, fund administrators, and operations leaders who ensure seamless execution.',
    },
    {
      title: 'Legal & Compliance',
      description: 'In-house counsel and compliance officers with private credit regulatory expertise.',
    },
    {
      title: 'Leadership Roles',
      description: 'C-suite executives and managing directors who drive strategy and growth.',
    },
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Specialized Placement Services</h2>
          <p>
            Focused recruitment across all functions within private credit firms
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
