import React from 'react'
// Pages
import Home from './Components/Home'
import Contact from './Components/Contact'
import Loginform from './Components/Loginform'
import Privacy from './Components/Privacy'
import Signup from './Components/Signup'
// Components
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProductGrid from './Components/ProductGrid'
import CartDrawer from './Components/CartDrawer'
import CartContext from './Components/CartContext'
import Footer from './Components/Footer'
import ProductDetail from './Components/ProductDetail'
import Checkout from './Components/Checkout'
import OrderSuccess from './Components/OrderSuccess'
import ScrollToTop from './ScrollToTop'
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <CartContext>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-900 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<><Hero /><div id="products"><ProductGrid /></div></>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/loginform" element={<Loginform />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
            </Routes>
          </main>
          <CartDrawer />
          <Footer />
        </div>
      </Router>
    </CartContext>
  )
}

export default App