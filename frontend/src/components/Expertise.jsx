import './Expertise.css'

function Expertise() {
  const expertiseAreas = [
    { 
      title: 'Real Estate Transition Lending', 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&q=80'
    },
    { 
      title: 'Direct Lending', 
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&q=80'
    },
    { 
      title: 'Structured Finance', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80'
    },
    { 
      title: 'Special Situations', 
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop&q=80'
    },
    { 
      title: 'Asset-Based Lending', 
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&q=80'
    },
    { 
      title: 'Opportunistic Credit', 
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop&q=80'
    }
  ]

  return (
    <section id="expertise" className="expertise section">
      <div className="container">
        <h2>Areas of <strong>Expertise</strong></h2>
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-card-image">
                <img src={area.image} alt={area.title} />
              </div>
              <div className="expertise-card-label">
                <span>{area.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
