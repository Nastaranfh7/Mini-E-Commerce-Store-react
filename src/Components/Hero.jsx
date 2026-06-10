// src/Components/Hero.jsx
import {
  LocalShipping as ShippingIcon,
  Verified as VerifiedIcon,
  SupportAgent as SupportIcon,
  KeyboardArrowRight as ArrowIcon
} from '@mui/icons-material'

const Hero = () => {
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')`
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">
                🔥 Summer Sale — Up to 50% Off
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Discover the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Best Products
              </span>
              at Great Prices
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              Shop the latest trends in fashion, electronics, and home essentials. 
              Enjoy <span className="text-blue-400 font-semibold">free shipping</span> on orders over $50 
              and 30-day easy returns.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 
                           text-white px-8 py-4 rounded-full font-semibold text-lg transition-all 
                           duration-300 transform hover:scale-105 hover:shadow-lg 
                           hover:shadow-blue-500/30"
              >
                Shop Now
                <ArrowIcon />
              </button>
              
              <button
                 onClick={() => scrollToSection('products')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 
                           backdrop-blur-sm border border-white/30 text-white px-8 py-4 
                           rounded-full font-semibold text-lg transition-all duration-300"
              >
                Browse Categories
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div 
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-gray-900 bg-gradient-to-br from-blue-400 to-purple-500"
                    />
                  ))}
                </div>
                <div className="text-white">
                  <span className="font-bold">2.5K+</span>
                  <span className="text-gray-400 text-sm block">Happy Customers</span>
                </div>
              </div>
              
              <div className="h-8 w-px bg-gray-600" />
              
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                <span className="text-gray-400 ml-2">4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ─── Features Bar ─── */}
      <section className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition cursor-default">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <ShippingIcon className="text-blue-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Free Shipping</h3>
                <p className="text-gray-400 text-sm">On orders over $50</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition cursor-default">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <VerifiedIcon className="text-green-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold">100% Authentic</h3>
                <p className="text-gray-400 text-sm">Quality guaranteed</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition cursor-default">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <SupportIcon className="text-purple-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold">24/7 Support</h3>
                <p className="text-gray-400 text-sm">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero