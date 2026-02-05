import './Process.css'

function Process() {
  return (
    <section id="process" className="process section">
      <div className="container">
        <h2>How Can We <strong>Help You?</strong></h2>
        <div className="process-content">
          <p className="process-lead">
            Whether you're an executive seeking your next leadership role or a firm looking to build your team, we provide confidential, personalized guidance throughout the entire process.
          </p>
          <div className="process-grid">
            <div className="process-block">
              <h3>For Candidates</h3>
              <p>
                We conduct in-depth conversations to understand your career aspirations, experience, and ideal next opportunity. Leveraging our network, we identify positions that align with your expertise and professional goals. From first conversation through offer negotiation, we advocate for your interests.
              </p>
            </div>
            <div className="process-block">
              <h3>For Clients</h3>
              <p>
                We take time to understand your firm's culture, strategy, and specific requirements. Our market mapping approach identifies candidates who not only have the right experience but will thrive in your environment. We handle the entire search process with discretion and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
