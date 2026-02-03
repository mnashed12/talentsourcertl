import './Focus.css'

function Focus() {
  const focusAreas = [
    {
      title: 'Private Credit Platforms',
      description: 'Senior leadership positions at established and emerging private credit managers, from investment principals to C-suite executives.',
      icon: '💼',
      color: '#6366F1'
    },
    {
      title: 'RTL Specialists',
      description: 'Experienced professionals in real estate transition lending, bridge financing, and construction lending at funds and specialty finance firms.',
      icon: '🏗️',
      color: '#EC4899'
    },
    {
      title: 'Origination & Underwriting',
      description: 'Top-tier talent in deal sourcing, credit analysis, and portfolio management across diverse private credit strategies.',
      icon: '📊',
      color: '#10B981'
    },
    {
      title: 'Investment Leadership',
      description: 'Partners, managing directors, and senior investment professionals driving strategy and capital deployment.',
      icon: '🎯',
      color: '#F59E0B'
    }
  ]

  return (
    <section id="focus" className="focus section">
      <div className="container">
        <h2>Our <strong>Focus</strong></h2>
        <p className="section-intro">
          We specialize exclusively in executive recruitment for the private credit ecosystem, with deep expertise in real estate transition lending, direct lending, and structured finance.
        </p>
        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <div key={index} className="focus-card" style={{'--card-color': area.color}}>
              <div className="focus-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Focus
