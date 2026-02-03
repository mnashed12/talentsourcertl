import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css'

const API_URL = 'http://localhost:8000/api/'

function Home() {
  const [apiData, setApiData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setApiData(response.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="home">
      <h1>مرحباً بك في TalentSource</h1>
      <p>نظام إدارة المواهب</p>
      
      <div className="api-status">
        <h2>حالة الاتصال بالخادم</h2>
        {loading && <p>جاري التحميل...</p>}
        {error && <p className="error">خطأ: {error}</p>}
        {apiData && (
          <div className="success">
            <p>✓ الاتصال ناجح</p>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="about">
      <h1>حول TalentSource</h1>
      <p>نظام متكامل لإدارة المواهب والموارد البشرية</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/about">حول</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
