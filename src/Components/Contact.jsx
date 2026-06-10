// src/Components/Contact.jsx

import React, { useState } from 'react'
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  AccessTime as TimeIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Page Header ─── */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Get in Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question, suggestion, or concern? We're here to help. Fill out the form below or reach us directly — we reply within 24 hours.
          </p>
        </div>

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ─── Left Column: Contact Info ─── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Card: Contact Info */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>

              <div className="space-y-5">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl shrink-0">
                    <EmailIcon className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Email</h3>
                    <p className="text-blue-400">support@mystore.com</p>
                    <p className="text-gray-400 text-sm">We reply within 24h</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-xl shrink-0">
                    <PhoneIcon className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Phone</h3>
                    <p className="text-green-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Sat–Thu, 9AM – 6PM</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl shrink-0">
                    <LocationIcon className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Address</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      123 Commerce Street,<br />
                      Downtown District,<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl shrink-0">
                    <TimeIcon className="text-yellow-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Working Hours</h3>
                    <p className="text-gray-300 text-sm">Sat – Thu: 9:00 AM – 6:00 PM</p>
                    <p className="text-gray-500 text-sm">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Social Media */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
              <p className="text-gray-400 text-sm mb-5">Stay connected on social media for updates and exclusive offers.</p>
              <div className="flex items-center gap-3">
                <a href="#" className="p-3 bg-gray-700 hover:bg-blue-600 rounded-xl transition group">
                  <FacebookIcon className="text-blue-400 group-hover:text-white transition" />
                </a>
                <a href="#" className="p-3 bg-gray-700 hover:bg-pink-500 rounded-xl transition group">
                  <InstagramIcon className="text-pink-400 group-hover:text-white transition" />
                </a>
                <a href="#" className="p-3 bg-gray-700 hover:bg-blue-500 rounded-xl transition group">
                  <TelegramIcon className="text-blue-400 group-hover:text-white transition" />
                </a>
                <a href="#" className="p-3 bg-gray-700 hover:bg-sky-500 rounded-xl transition group">
                  <TwitterIcon className="text-sky-400 group-hover:text-white transition" />
                </a>
              </div>
            </div>

            {/* Card: Map Placeholder */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
              <div 
                className="h-48 bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')`
                }}
              >
                <div className="bg-black/60 backdrop-blur-sm px-5 py-3 rounded-xl flex items-center gap-3">
                  <LocationIcon className="text-blue-400 text-2xl" />
                  <span className="text-white font-medium">View on Map</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 text-sm">
                  <span className="text-white font-semibold">Downtown District, New York</span>
                  <br />
                  <span className="text-gray-500">5 min from Central Station</span>
                </p>
              </div>
            </div>

          </div>

          {/* ─── Right Column: Contact Form ─── */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">

              {/* Form Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <SendIcon className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Send us a Message</h2>
                  <p className="text-gray-400 text-sm">Fill in the form below and we'll get back to you shortly.</p>
                </div>
              </div>

              {/* Success Message */}
              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center">
                  <div className="text-5xl mb-3">✅</div>
                  <h3 className="text-green-400 font-bold text-lg mb-1">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. We'll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-500 transition"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-500 transition appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-800">Select a subject</option>
                      <option value="order" className="bg-gray-800">Order Inquiry</option>
                      <option value="product" className="bg-gray-800">Product Question</option>
                      <option value="return" className="bg-gray-800">Returns & Refunds</option>
                      <option value="feedback" className="bg-gray-800">Feedback</option>
                      <option value="other" className="bg-gray-800">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full bg-gray-700/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-500 transition resize-none"
                    />
                    <p className="text-gray-500 text-xs mt-2 text-right">
                      {formData.message.length} / 500
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl 
                               transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg 
                               hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                  >
                    <SendIcon />
                    Send Message
                  </button>

                </form>
              )}

              {/* Bottom Note */}
              <p className="text-gray-500 text-xs text-center mt-6">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </div>

        </div>

        {/* ─── FAQ Strip ─── */}
        <div className="mt-12 bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gray-700/40 rounded-xl p-5 hover:bg-gray-700/60 transition cursor-default">
              <h3 className="text-white font-semibold mb-2">💬 How fast do you reply?</h3>
              <p className="text-gray-400 text-sm">We typically respond within 24 hours during business days.</p>
            </div>

            <div className="bg-gray-700/40 rounded-xl p-5 hover:bg-gray-700/60 transition cursor-default">
              <h3 className="text-white font-semibold mb-2">📦 Can I track my order?</h3>
              <p className="text-gray-400 text-sm">Yes! Once your order ships, you'll receive a tracking number via email.</p>
            </div>

            <div className="bg-gray-700/40 rounded-xl p-5 hover:bg-gray-700/60 transition cursor-default">
              <h3 className="text-white font-semibold mb-2">🔄 What is your return policy?</h3>
              <p className="text-gray-400 text-sm">We offer 30-day hassle-free returns on all unused items in original packaging.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact