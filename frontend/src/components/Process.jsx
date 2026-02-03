import './Process.css'

function Process() {
  const steps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We conduct in-depth conversations to understand your career aspirations, experience, and ideal next opportunity.'
    },
    {
      number: 2,
      title: 'Market Mapping',
      description: 'Leveraging our network, we identify positions that align with your expertise and professional goals.'
    },
    {
      number: 3,
      title: 'Strategic Positioning',
      description: 'We prepare and present you to select opportunities where your background creates the strongest value proposition.'
    },
    {
      number: 4,
      title: 'Partnership',
      description: 'From first conversation through offer negotiation, we advocate for your interests and ensure optimal outcomes.'
    }
  ]

  return (
    <section id="process" className="process section">
      <div className="container">
        <h2>Our <strong>Process</strong></h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
