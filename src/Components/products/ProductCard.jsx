// src/components/products/ProductCard.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart as CartIcon } from '@mui/icons-material'
import { useCart } from '../CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!product.inStock) return
    
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1000)
  }

  return (
    // ❌ قبل: کل کارت Link بود
    // ✅ بعد: فقط بخش‌های مشخص Link هستند
    
    <div 
      className="bg-gray-800 rounded-2xl overflow-hidden 
                 hover:ring-2 hover:ring-blue-500/50 transition-all hover:-translate-y-1"
    >
      
      {/* ─── Image: کلیک → رفتن به صفحه محصول ─── */}
      <Link to={`/product/${product.id}`}>
        <div className="relative cursor-pointer">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full aspect-square object-cover" 
          />
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="text-white font-bold">Out of Stock</span>
            </div>
          )}
          
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </Link>

      {/* ─── Info ─── */}
      <div className="p-4">
        
        {/* نام محصول: کلیک → رفتن به صفحه محصول */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-white font-semibold truncate hover:text-blue-400 transition cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-blue-400 text-xl font-bold mt-1">
          ${product.price.toFixed(2)}
        </p>

        {/* ─── دکمه Add to Cart ─── */}
        {/* کلیک → فقط اضافه به سبد، بدون رفتن به صفحه محصول */}
        <button
          onClick={handleAdd}
          disabled={!product.inStock}
          className={`w-full mt-3 py-2.5 rounded-lg flex items-center justify-center 
                      gap-2 font-medium transition
            ${isAdded 
              ? 'bg-green-500' 
              : product.inStock 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-gray-600 cursor-not-allowed'}`}
        >
          {isAdded ? '✓ Added!' : (
            <>
              <CartIcon style={{ fontSize: '18px' }} />
              Add to Cart
            </>
          )}
        </button>
        
      </div>
    </div>
  )
}