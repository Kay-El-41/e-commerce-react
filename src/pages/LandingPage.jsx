import React from 'react'
import Navbar from '../components/landingPage/Navbar'
import HeroSection from '../components/landingPage/HeroSection'
import FlashSale from '../components/landingPage/FlashSale'
import Features from '../components/landingPage/Features'
import Footer from '../components/landingPage/Footer'

const LandingPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <FlashSale />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage
