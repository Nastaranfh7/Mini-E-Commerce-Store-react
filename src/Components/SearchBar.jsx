// src/Components/SearchBar.jsx
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Search as SearchIcon,
  Close as CloseIcon
} from '@mui/icons-material'
import { products } from '../data/products'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef(null)

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.length < 2) {
      setSearchResults([])
      setShowResults(false)
      return
    }
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(filtered)
    setShowResults(true)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full bg-gray-800 text-white rounded-full px-5 py-3 pl-12 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     placeholder-gray-400 border border-gray-700"
        />
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        
        {searchQuery && (
          <button
            onClick={() => { setSearchQuery(''); setShowResults(false) }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full"
          >
            <CloseIcon className="text-gray-400 text-lg" />
          </button>
        )}
      </div>

      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 max-h-80 overflow-y-auto z-50">
          {searchResults.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={() => { setShowResults(false); setSearchQuery('') }}
              className="flex items-center gap-3 p-3 hover:bg-gray-700 border-b border-gray-700 last:border-0 transition"
            >
              <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-lg" />
              <div>
                <p className="text-white text-sm">{product.name}</p>
                <p className="text-blue-400 text-xs">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {showResults && searchResults.length === 0 && searchQuery.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 p-4 z-50">
          <p className="text-gray-400 text-center">No products found</p>
        </div>
      )}
    </div>
  )
}

export default SearchBar