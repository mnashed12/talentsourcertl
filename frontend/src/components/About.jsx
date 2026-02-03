import './About.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>Deep Expertise in Private Credit</h2>
          <p>
            We understand the unique demands of the private credit market and the 
            caliber of talent required to excel.
          </p>
        </div>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="card-number">15+</div>
            <h3>Years Experience</h3>
            <p>
              Deep relationships across private credit, direct lending, 
              and alternative credit markets.
            </p>
          </div>
          
          <div className="about-card">
            <div className="card-number">200+</div>
            <h3>Placements</h3>
            <p>
              Successfully placed senior professionals at tier-one 
              private credit funds and platforms.
            </p>
          </div>
          
          <div className="about-card">
            <div className="card-number">95%</div>
            <h3>Retention Rate</h3>
            <p>
              Our rigorous vetting process ensures long-term 
              successful placements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
