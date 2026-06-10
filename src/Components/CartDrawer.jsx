// src/Components/CartDrawer.jsx

import { Link } from 'react-router-dom'
import { Close as CloseIcon, ShoppingCart as CartIcon } from '@mui/icons-material'
import { useCart } from './CartContext'
import CartItem from './cart/CartItem'

export default function CartDrawer() {
  const { isOpen, cartItems, totalPrice, totalItems, closeCart, clearCart } = useCart()

  return ( 
    <>
    
      {/* Backdrop */}
      <div 
        onClick={closeCart} 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 invisible'}`} 
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-gray-900 border-l border-gray-700 z-50 flex flex-col transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <CartIcon className="text-blue-400 text-2xl" />
            <h2 className="text-white text-lg font-bold">Your Cart</h2>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              {totalItems}
            </span>
          </div>
          <button onClick={closeCart} className="text-gray-400 hover:text-white">
            <CloseIcon />
          </button>
        </div>
        
        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <CartIcon style={{ fontSize: '60px' }} />
              <p className="mt-4">Your cart is empty</p>
              <Link 
                to="/" 
                onClick={closeCart}
                className="mt-3 text-blue-400 hover:text-blue-300 transition"
              >
                Continue Shopping →
              </Link>
            </div>
          ) : (
            cartItems.map(item => <CartItem key={item.id} item={item} />)
          )}
        </div>
        
        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gray-700">
            
            {/* Totals */}
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Total:</span>
              <span className="text-white text-lg font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Free Shipping Badge */}
            {totalPrice >= 50 && (
              <div className="bg-green-500/20 rounded-lg p-2 mb-4 text-center">
                <span className="text-green-400 text-sm">🎉 Free shipping unlocked!</span>
              </div>
            )}

            {/* ── Checkout Button ── */}
            <Link 
              to="/checkout"
              onClick={closeCart}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 
                         rounded-xl font-semibold text-center transition mb-2"
            >
              Proceed to Checkout
            </Link>

            {/* Clear Cart */}
            <button 
              onClick={clearCart} 
              className="w-full text-gray-500 hover:text-red-400 py-2 text-sm transition"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}