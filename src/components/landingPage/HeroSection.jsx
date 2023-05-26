import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const nav = useNavigate()

  return (
    <section
      id="hero"
      className="  h-[300px] bg-orange-500 text-center space-y-5 w-full p-10"
    >
      <h1 className="text-2xl md:mt-10 text-white font-bold tracking-wider">
        Buy Best Products from All of The World
      </h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        nesciunt.
      </p>
      <Link to="/products/page/1">
        <button className="bg-white bg- px-5 py-1 rounded-2xl text-orange-500 hover:scale-105 ease transition-all duration-300 font-semibold shadow tracking-wide">
          Browse Now
        </button>
      </Link>
    </section>
  )
}

export default HeroSection
