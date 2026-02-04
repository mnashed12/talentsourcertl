import './Expertise.css'

function Expertise() {
  const expertiseAreas = [
    { title: 'Real Estate Transition Lending', description: 'Bridge loans, fix-and-flip, ground-up construction' },
    { title: 'Direct Lending', description: 'Middle market, sponsored finance, corporate credit' },
    { title: 'Structured Finance', description: 'CLOs, securitization, mezzanine financing' },
    { title: 'Special Situations', description: 'Distressed credit, rescue financing, workouts' },
    { title: 'Asset-Based Lending', description: 'Equipment, inventory, receivables financing' },
    { title: 'Opportunistic Credit', description: 'High-yield, crossover, flexible capital solutions' }
  ]

  return (
    <section id="expertise" className="expertise section">
      <div className="container">
        <h2>Areas of <strong>Expertise</strong></h2>
        <div className="expertise-content">
          <div className="expertise-image">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop&q=80" alt="Professional workspace" />
          </div>
          <div className="expertise-list">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="expertise-item">
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
