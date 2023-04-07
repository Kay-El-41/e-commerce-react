import React, { useState } from 'react'
import { TfiAlignLeft, TfiShoppingCart, TfiClose } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [hideSideMenu, setHideSideMenu] = useState(true)

  const toggleMenu = () => {
    setHideSideMenu(!hideSideMenu)
  }

  return (
    <nav className=" relative md:sticky h-[60px] bg-orange-500 drop-shadow flex justify-between items-center p-5 lg:px-[150px] z-50">
      {/* Side Menu Toggler */}
      <TfiAlignLeft
        className="text-2xl text-white md:hidden"
        onClick={toggleMenu}
      />

      {/* Show Menu */}
      <div
        className={`absolute bg-orange-500 w-[70%] h-[100vh] top-0 left-0 ${
          hideSideMenu && 'left-[-100%]'
        } transition-left ease duration-500 shadow px-5 pt-10 md:hidden`}
      >
        <TfiClose
          className="absolute text-white text-2xl top-5 right-5"
          onClick={toggleMenu}
        />
        {/* Navigation Menu */}
        <ul className="space-y-2 pt-5 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Categories</Link>
          </li>
          <li>
            <Link>Message Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <br />
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Signup</Link>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <span className="font-bold tracking-wider text-2xl text-white select-none">
        Alimazon
      </span>

      {/* Navigation after md screen and up to */}
      <div className="hidden md:block">
        <ul className="flex space-x-5 lg:space-x-10 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Categories</Link>
          </li>
          <li>
            <Link>Message Us</Link>
          </li>
          <br />
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Signup</Link>
          </li>
        </ul>
      </div>

      {/* Cart Button */}
      <TfiShoppingCart className="text-2xl text-white cursor-pointer" />
    </nav>
  )
}

export default Navbar
