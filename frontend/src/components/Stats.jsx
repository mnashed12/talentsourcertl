import './Stats.css'

function Stats() {
  const stats = [
    { number: '$45B+', label: 'AUM represented by our placements' },
    { number: '150+', label: 'Executive placements completed' },
    { number: '95%', label: 'Candidate retention after 2 years' }
  ]

  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
