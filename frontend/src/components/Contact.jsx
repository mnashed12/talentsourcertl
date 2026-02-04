import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! We\'ll be in touch soon.' })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to send message. Please email us directly at talentsourcertl@gmail.com' })
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact-container">
        <h2>Ready to Explore <strong>Your Next Move?</strong></h2>
        <p className="contact-intro">
          Whether you're actively seeking a new opportunity or simply interested in understanding the market, we'd like to hear from you.
        </p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about yourself and what you're looking for... *"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          {status.message && (
            <div className={`form-status ${status.type}`}>
              {status.message}
            </div>
          )}
          
          <button type="submit" className="contact-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Get in Touch'}
          </button>
        </form>
        
        <p className="contact-email">
          Or email us directly: <a href="mailto:talentsourcertl@gmail.com">talentsourcertl@gmail.com</a>
        </p>
      </div>
    </section>
  )
}

export default Contact
