// src/Components/Navbar.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ShoppingCart as CartIcon,
  Person as PersonIcon
} from '@mui/icons-material'
import { useCart } from './CartContext'
import SearchBar from './SearchBar'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Main Row ─── */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <CartIcon className="text-blue-500 text-3xl" />
            <span className="text-xl font-bold text-white">MyStore</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link to="/privacy" className="hover:text-blue-400 transition">Privacy</Link>
            <Link to="/loginform" className="hover:text-blue-400 transition">Login</Link>
            <Link to="/signup" className="hover:text-blue-400 transition">Sign Up</Link>
            <Link 
              to="/checkout" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-sm font-medium"
            >
              Checkout
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-700 rounded-full transition"
            >
              <SearchIcon />
            </button>
            <button 
              onClick={toggleCart}
              className="p-2 hover:bg-gray-700 rounded-full transition relative"
            >
              <CartIcon />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Link to="/loginform" className="p-2 hover:bg-gray-700 rounded-full transition">
              <PersonIcon />
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:bg-gray-700 rounded-full transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        
        {/* ─── Search Bar ─── */}
        {searchOpen && (
          <div className="hidden md:block pb-4 animate-slide-down">
            <SearchBar />
          </div>
        )}
        
        {/* ─── Mobile Menu ─── */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700 pt-2">
            <SearchBar />  {/* ← Use same component in mobile */}
            
            <div className="space-y-1">
              <Link to="/" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-800 rounded-lg transition" onClick={() => setIsOpen(false)}>
                <span>🏠</span><span>Home</span>
              </Link>
              <Link to="/contact" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-800 rounded-lg transition" onClick={() => setIsOpen(false)}>
                <span>📞</span><span>Contact</span>
              </Link>
              <Link to="/privacy" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-800 rounded-lg transition" onClick={() => setIsOpen(false)}>
                <span>🔒</span><span>Privacy</span>
              </Link>
              <Link to="/loginform" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-800 rounded-lg transition" onClick={() => setIsOpen(false)}>
                <span>🔑</span><span>Login</span>
              </Link>
              <Link to="/signup" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-800 rounded-lg transition" onClick={() => setIsOpen(false)}>
                <span>📝</span><span>Sign Up</span>
              </Link>
              <Link 
                to="/checkout" 
                className="flex items-center gap-3 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                <span>💳</span><span>Checkout</span>
                {totalItems > 0 && (
                  <span className="ml-auto bg-blue-500 text-xs px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-700">
              <button 
                onClick={toggleCart}
                className="p-2 hover:bg-gray-800 rounded-full relative"
              >
                <CartIcon />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <Link to="/loginform" className="p-2 hover:bg-gray-800 rounded-full">
                <PersonIcon />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar