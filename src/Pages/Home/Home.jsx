import React from 'react'
import Hero from '../../Components/Hero/Hero'
import './Home.css'
import Footer from '../../Components/Footer/Footer'
import Project from '../../Components/Project/Project'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Project />

      <Footer />
    </div>
  )
}

export default Home
