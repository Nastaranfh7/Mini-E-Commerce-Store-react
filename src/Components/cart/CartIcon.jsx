// src/components/cart/CartIcon.jsx

import { ShoppingCart as CartIcon } from '@mui/icons-material'
import { useCart } from './CartContext'

export default function CartIcon() {
  const { totalItems, toggleCart } = useCart()

  return (
    <button onClick={toggleCart} className="relative p-2 hover:bg-gray-700 rounded-full transition">
      <CartIcon className="text-white" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  )
}