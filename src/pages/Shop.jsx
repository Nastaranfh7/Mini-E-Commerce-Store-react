// src/pages/Shop.jsx

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ProductGrid from '../Components/ProductGrid'
import CartDrawer from '../Components/cart/CartDrawer'

export default function Shop() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />
      <CartDrawer />
    </div>
  )
}