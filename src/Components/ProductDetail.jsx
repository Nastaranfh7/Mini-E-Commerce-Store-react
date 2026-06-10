// src/Components/ProductDetail.jsx

import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ShoppingCart as CartIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Star as StarIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ArrowBack as BackIcon,
  LocalShipping as ShippingIcon,
  Verified as VerifiedIcon,
  Autorenew as ReturnIcon
} from '@mui/icons-material'
import { useCart } from './CartContext'
import { products } from '../data/products'
import ProductCard from './products/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  
  const product = products.find(p => p.id === parseInt(id))
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!product.inStock) return
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition"
        >
          <BackIcon />
          <span>Back to Products</span>
        </Link>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`bg-gray-800 rounded-xl overflow-hidden border-2 transition
                    ${activeImage === index ? 'border-blue-500' : 'border-transparent hover:border-gray-600'}`}
                >
                  <img 
                    src={product.image} 
                    alt={`View ${index + 1}`} 
                    className="w-full aspect-square object-cover opacity-70 hover:opacity-100 transition"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <span className="inline-block bg-blue-500/20 text-blue-400 text-sm px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => (
                    <StarIcon key={i} style={{ fontSize: '18px' }} />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">(128 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="border-y border-gray-700 py-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-white">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through text-lg">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="bg-red-500/20 text-red-400 text-sm px-2 py-0.5 rounded">
                  20% OFF
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-white font-semibold mb-2">Description</h3>
              <p className="text-gray-400 leading-relaxed">
                Experience premium quality with our {product.name}. 
                Designed for comfort and style, this product features cutting-edge 
                materials and a modern design that fits perfectly into your lifestyle.
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 font-medium">In Stock</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-red-400 font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Quantity:</span>
              <div className="flex items-center bg-gray-800 rounded-xl border border-gray-700">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:bg-gray-700 transition text-gray-400 hover:text-white"
                >
                  <RemoveIcon />
                </button>
                <span className="w-12 text-center text-white font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => Math.min(10, q + 1))}
                  className="p-3 hover:bg-gray-700 transition text-gray-400 hover:text-white"
                >
                  <AddIcon />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-4 rounded-xl flex items-center justify-center gap-2 font-bold 
                           transition-all duration-300 transform hover:scale-[1.02]
                  ${isAdded 
                    ? 'bg-green-500 text-white' 
                    : product.inStock 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/30' 
                      : 'bg-gray-600 cursor-not-allowed text-gray-400'}`}
              >
                {isAdded ? '✓ Added to Cart!' : (
                  <>
                    <CartIcon />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 rounded-xl border transition
                  ${isWishlisted 
                    ? 'bg-red-500/20 border-red-500 text-red-400' 
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-red-400 hover:border-red-500'}`}
              >
                <FavoriteIcon className={isWishlisted ? 'fill-current' : ''} />
              </button>

              <button className="p-4 bg-gray-800 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 transition">
                <ShareIcon />
              </button>
            </div>

            {/* Features */}
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <ShippingIcon className="text-blue-400" />
                <span className="text-gray-300">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <VerifiedIcon className="text-green-400" />
                <span className="text-gray-300">100% authentic product</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <ReturnIcon className="text-purple-400" />
                <span className="text-gray-300">30-day easy returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Related <span className="text-blue-400">Products</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default ProductDetail