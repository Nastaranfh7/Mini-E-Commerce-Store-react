// src/Components/OrderSuccess.jsx

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle as SuccessIcon,
  LocalShipping as ShippingIcon,
  Email as EmailIcon,
  Home as HomeIcon,
  ShoppingBag as ShopIcon
} from '@mui/icons-material'

const OrderSuccess = () => {
  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        
        {/* Success Animation */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto animate-bounce">
            <SuccessIcon className="text-green-400 text-5xl" />
          </div>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Order <span className="text-green-400">Confirmed!</span>
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        {/* Order Number */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 mb-8">
          <p className="text-gray-400 text-sm mb-2">Order Number</p>
          <p className="text-3xl font-bold text-white">#{orderNumber}</p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <EmailIcon className="text-blue-400 text-2xl" />
            </div>
            <h3 className="text-white font-semibold mb-1">Confirmation Email</h3>
            <p className="text-gray-400 text-sm">
              We've sent order details to your email address
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <ShippingIcon className="text-purple-400 text-2xl" />
            </div>
            <h3 className="text-white font-semibold mb-1">Shipping Status</h3>
            <p className="text-gray-400 text-sm">
              You'll receive tracking info soon
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 mb-8">
          <h3 className="text-white font-semibold mb-4">Order Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-white text-sm font-medium">Order Placed</p>
                <p className="text-gray-500 text-xs">Just now</p>
              </div>
            </div>
            <div className="ml-4 border-l-2 border-gray-700 h-4" />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">2</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-400 text-sm">Processing</p>
                <p className="text-gray-500 text-xs">1-2 business days</p>
              </div>
            </div>
            <div className="ml-4 border-l-2 border-gray-700 h-4" />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">3</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-400 text-sm">Shipped</p>
                <p className="text-gray-500 text-xs">3-5 business days</p>
              </div>
            </div>
            <div className="ml-4 border-l-2 border-gray-700 h-4" />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">4</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-400 text-sm">Delivered</p>
                <p className="text-gray-500 text-xs">5-7 business days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl 
                       transition flex items-center justify-center gap-2"
          >
            <HomeIcon />
            Continue Shopping
          </Link>
          
          <Link 
            to="/contact"
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl 
                       transition flex items-center justify-center gap-2"
          >
            <EmailIcon />
            Contact Support
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-8">
          Questions about your order?{' '}
          <Link to="/contact" className="text-blue-400 hover:text-blue-300">
            Contact our support team
          </Link>
        </p>

      </div>
    </div>
  )
}

export default OrderSuccess