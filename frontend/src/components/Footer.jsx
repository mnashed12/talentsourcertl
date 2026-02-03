import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {currentYear} TalentSourceRTL. Executive Search for Private Credit.</p>
        <p className="footer-tagline">Confidential | Professional | Specialized</p>
      </div>
    </footer>
  )
}

export default Footer
