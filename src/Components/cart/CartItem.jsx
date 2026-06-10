// src/components/cart/CartItem.jsx

import { Add as AddIcon, Remove as RemoveIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useCart } from '../CartContext'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex gap-4 p-4 bg-gray-800 rounded-xl">
      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
      
      <div className="flex-1">
        <h4 className="text-white text-sm">{item.name}</h4>
        <p className="text-blue-400 font-bold">${item.price.toFixed(2)}</p>
        
        <div className="flex items-center gap-3 mt-2">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 bg-gray-700 rounded hover:bg-gray-600">
            <RemoveIcon className="text-white text-sm" />
          </button>
          <span className="text-white">{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 bg-gray-700 rounded hover:bg-gray-600">
            <AddIcon className="text-white text-sm" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col justify-between">
        <span className="text-white font-bold">${(item.price * item.quantity).toFixed(2)}</span>
        <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-400">
          <DeleteIcon />
        </button>
      </div>
    </div>
  )
}