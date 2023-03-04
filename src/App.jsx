import React from 'react'
import { Hero, Navbar, Companies, Courses, Achievement, Categories, Feedback, CTA } from './components'
import './App.css'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      <Footer />
    </div>
  )
}

export default App