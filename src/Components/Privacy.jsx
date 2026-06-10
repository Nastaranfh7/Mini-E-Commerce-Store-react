// src/Components/Privacy.jsx

import React from 'react'
import {
  Security as SecurityIcon,
  Shield as ShieldIcon,
  PrivacyTip as PrivacyIcon,
  Gavel as GavelIcon,
  Lock as LockIcon
} from '@mui/icons-material'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Page Header ─── */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldIcon className="text-purple-400 text-3xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy <span className="text-purple-400">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Last updated: January 2025. Your privacy is important to us. 
            This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* ─── Quick Links ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <a href="#info" className="bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition border border-gray-700">
            <SecurityIcon className="text-blue-400 text-2xl mx-auto mb-2" />
            <span className="text-white text-sm">Data Collection</span>
          </a>
          <a href="#usage" className="bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition border border-gray-700">
            <LockIcon className="text-green-400 text-2xl mx-auto mb-2" />
            <span className="text-white text-sm">Data Usage</span>
          </a>
          <a href="#protection" className="bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition border border-gray-700">
            <ShieldIcon className="text-purple-400 text-2xl mx-auto mb-2" />
            <span className="text-white text-sm">Protection</span>
          </a>
          <a href="#rights" className="bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition border border-gray-700">
            <GavelIcon className="text-yellow-400 text-2xl mx-auto mb-2" />
            <span className="text-white text-sm">Your Rights</span>
          </a>
        </div>

        {/* ─── Section 1: Information We Collect ─── */}
        <div id="info" className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <SecurityIcon className="text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Information We Collect</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="text-white">Personal Information:</span> Name, email address, phone number, shipping address, and payment information when you create an account or make a purchase.</li>
              <li><span className="text-white">Communication Data:</span> Messages and inquiries you send through our contact forms.</li>
              <li><span className="text-white">Usage Data:</span> Browser type, IP address, device information, and pages visited on our platform.</li>
              <li><span className="text-white">Cookies:</span> Small files stored on your device to improve your browsing experience.</li>
            </ul>
          </div>
        </div>

        {/* ─── Section 2: How We Use Your Information ─── */}
        <div id="usage" className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <LockIcon className="text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-white">How We Use Your Information</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and fulfill your orders, including shipping and payment confirmation.</li>
              <li>Send you order updates, promotional offers, and newsletters (with your consent).</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Respond to your questions, comments, or support requests.</li>
              <li>Detect and prevent fraud, abuse, or unauthorized access.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>
          </div>
        </div>

        {/* ─── Section 3: Data Protection ─── */}
        <div id="protection" className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <ShieldIcon className="text-purple-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Data Protection & Security</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              We take the security of your personal information seriously and implement 
              appropriate technical and organizational measures to protect it:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="text-white">Encryption:</span> All data transmitted through our site is encrypted using SSL/TLS.</li>
              <li><span className="text-white">Secure Storage:</span> Your data is stored on secure servers with access controls.</li>
              <li><span className="text-white">Regular Audits:</span> We conduct security reviews and updates regularly.</li>
              <li><span className="text-white">Limited Access:</span> Only authorized personnel can access your personal data.</li>
            </ul>
          </div>
        </div>

        {/* ─── Section 4: Your Rights ─── */}
        <div id="rights" className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <GavelIcon className="text-yellow-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Your Rights</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="text-white">Access:</span> Request a copy of the personal data we hold about you.</li>
              <li><span className="text-white">Correction:</span> Request correction of inaccurate or incomplete data.</li>
              <li><span className="text-white">Deletion:</span> Request deletion of your data ("right to be forgotten").</li>
              <li><span className="text-white">Opt-out:</span> Unsubscribe from marketing emails at any time.</li>
              <li><span className="text-white">Portability:</span> Request your data in a machine-readable format.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{' '}
              <span className="text-blue-400">privacy@mystore.com</span>
            </p>
          </div>
        </div>

        {/* ─── Section 5: Cookies ─── */}
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <PrivacyIcon className="text-orange-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Cookies Policy</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              We use cookies and similar technologies to enhance your experience:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-2">Essential Cookies</h3>
                <p className="text-gray-400 text-xs">
                  Required for basic site functionality, cannot be disabled.
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-2">Analytics Cookies</h3>
                <p className="text-gray-400 text-xs">
                  Help us understand how visitors use our site.
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-2">Marketing Cookies</h3>
                <p className="text-gray-400 text-xs">
                  Used to deliver relevant ads and track campaign performance.
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h3 className="text-white font-semibold mb-2">Preference Cookies</h3>
                <p className="text-gray-400 text-xs">
                  Remember your settings and preferences for future visits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Section 6: Third Parties ─── */}
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <SecurityIcon className="text-cyan-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Third-Party Services</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              We may share your information with trusted third-party service providers:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="text-white">Payment Processors:</span> Stripe, PayPal for secure payment processing.</li>
              <li><span className="text-white">Shipping Partners:</span> DHL, FedEx, USPS for order delivery.</li>
              <li><span className="text-white">Analytics Tools:</span> Google Analytics to improve our services.</li>
              <li><span className="text-white">Email Services:</span> Mailchimp, SendGrid for newsletters and updates.</li>
            </ul>
            <p className="mt-4 text-yellow-400/80">
              ⚠️ We only share the minimum data necessary and ensure third parties comply with data protection standards.
            </p>
          </div>
        </div>

        {/* ─── Section 7: Contact ─── */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 md:p-8 border border-blue-500/20 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <PrivacyIcon className="text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Contact Us</h2>
          </div>
          
          <div className="text-gray-300 text-sm leading-relaxed space-y-2">
            <p>
              If you have any questions about this Privacy Policy or how we handle your data:
            </p>
            <div className="mt-4 space-y-2">
              <p><span className="text-white">Email:</span> <span className="text-blue-400">privacy@mystore.com</span></p>
              <p><span className="text-white">Phone:</span> <span className="text-blue-400">+1 (555) 123-4567</span></p>
              <p><span className="text-white">Address:</span> 123 Commerce Street, New York, NY 10001</p>
            </div>
          </div>
        </div>

        {/* ─── Footer Note ─── */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>
            This Privacy Policy was last updated on January 2025. 
            We may update this policy from time to time. 
            Changes will be posted on this page with an updated revision date.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Privacy