// src/Components/Checkout.jsx

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ShoppingCart as CartIcon,
  LocationOn as LocationIcon,
  CreditCard as PaymentIcon,
  LocalShipping as ShippingIcon,
  ArrowBack as BackIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material'
import { CreditCard as CreditCardIcon } from '@mui/icons-material'
import { useCart } from './CartContext'

const Checkout = () => {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States'
  })

  const shippingCost = totalPrice >= 50 ? 0 : 9.99
  const tax = totalPrice * 0.08
  const grandTotal = totalPrice + shippingCost + tax

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      clearCart()
      navigate('/order-success')
    }, 2000)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <CartIcon className="text-gray-600 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    )
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
          <span>Back to Cart</span>
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ─── Left: Form ─── */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Shipping Info */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <LocationIcon className="text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Shipping Information</h2>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                 border border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                 border border-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                 border border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                 border border-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 
                               border border-gray-600"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                 border border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                 border border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                 border border-gray-600 cursor-pointer"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <PaymentIcon className="text-green-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Payment Method</h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-4 bg-gray-700/50 p-4 rounded-xl cursor-pointer border-2 border-transparent hover:border-blue-500/50 transition">
                  <input type="radio" name="payment" defaultChecked className="w-5 h-5 accent-blue-500" />
                  <CreditCardIcon className="text-gray-400" />
                  <div>
                    <span className="text-white font-medium">Credit Card</span>
                    <p className="text-gray-400 text-sm">Visa, Mastercard, Amex</p>
                  </div>
                </label>

                <label className="flex items-center gap-4 bg-gray-700/50 p-4 rounded-xl cursor-pointer border-2 border-transparent hover:border-blue-500/50 transition">
                  <input type="radio" name="payment" className="w-5 h-5 accent-blue-500" />
                  <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt="PayPal" className="h-5" />
                  <div>
                    <span className="text-white font-medium">PayPal</span>
                    <p className="text-gray-400 text-sm">Pay securely with your PayPal account</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* ─── Right: Order Summary ─── */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-lg object-cover bg-gray-700"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm truncate">{item.name}</p>
                      <p className="text-gray-400 text-xs">Qty: {item.quantity || 1}</p>
                    </div>
                    <p className="text-white font-semibold">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? <span className="text-green-400">Free</span> : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white text-lg font-bold pt-2 border-t border-gray-700">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Free Shipping Badge */}
              {shippingCost === 0 && (
                <div className="mt-4 bg-green-500/20 rounded-xl p-3 text-center">
                  <p className="text-green-400 text-sm">🎉 You got free shipping!</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 
                           disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl 
                           transition-all flex items-center justify-center gap-2
                           hover:shadow-lg hover:shadow-blue-500/30"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckIcon />
                    Place Order • ${grandTotal.toFixed(2)}
                  </>
                )}
              </button>

              {/* Security Note */}
              <p className="text-gray-500 text-xs text-center mt-4">
                🔒 Your payment information is secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout