import React, { useState } from 'react'
import { products } from '../data/products'
import ProductCard from './products/ProductCard'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', ...new Set(products.map(p => p.category))]
  
  const filtered = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div id="products" className="bg-gray-900 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Shop</h1>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filtered.length === 0 && (
          <p className="text-gray-500 text-center mt-10">No products found</p>
        )}
      </div>
    </div>
  )
}