import React, { useState } from 'react'
import {
  TfiAlignLeft,
  TfiShoppingCart,
  TfiClose,
  TfiSearch,
} from 'react-icons/tfi'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
  const [hideSideMenu, setHideSideMenu] = useState(true)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const toggleMenu = () => {
    setHideSideMenu(!hideSideMenu)
  }

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const goToSearchPage = (e) => {
    e.preventDefault()
    navigate(`/search/${search}`)
  }

  return (
    <nav className=" relative md:sticky h-[60px] bg-orange-500 drop-shadow flex justify-between items-center p-5 lg:px-[70px] xl:px-[150px] z-50">
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
        <form
          className="flex items-center gap-2 mt-10"
          onSubmit={goToSearchPage}
        >
          <input
            type="text"
            className="w-[70%] rounded-xl px-5 py-2 outline-none"
            placeholder="Search"
            onChange={onChangeSearch}
          />
          <TfiSearch className="text-white text-2xl cursor-pointer" />
        </form>
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

      {/* Search for md and large screen*/}
      <div
        className="relative flex gap-2 items-center"
        onSubmit={goToSearchPage}
      >
        <form className="hidden relative md:flex items-center">
          <input
            type="text"
            name="product"
            className={`rounded-xl p-2 outline-none text-sm`}
            placeholder="Search"
            onChange={onChangeSearch}
          />
          <TfiSearch
            className={`absolute text-orange-500 md:text-orange-500 text-xl right-2 cursor-pointer`}
          />
        </form>

        {/* Cart Button */}
        <TfiShoppingCart className="text-2xl text-white cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navbar
