import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/nikeWhite.svg" alt="Logo" className="w-12 h-12" />
              <h3 className="text-xl font-bold">Vamos Nikies</h3>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Your trusted Nike partner in Nadapuram, delivering premium sneakers and sportswear for every athlete.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className='text-gray-400 text-sm'><i className="fas fa-map-marker-alt mr-2"></i>Nadapuram, Kerala</p>
              <p className="text-gray-400 text-sm"><i className="fas fa-envelope mr-2"></i>info@vamosnikies.com</p>
              <p className="text-gray-400 text-sm"><i className="fas fa-phone mr-2"></i>+91 9995 219061</p>
            </div>
          </div>

          {/* Social Media & Feedback */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Connect & Feedback</h4>
            
            {/* Social Media */}
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="https://www.facebook.com/vamosnikies/" className="text-gray-400 hover:text-white transition-colors text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/vamosnikies/" className="text-gray-400 hover:text-white transition-colors text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/vamosnikies/" className="text-gray-400 hover:text-white transition-colors text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            
            {/* Quick Feedback */}
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white text-xs border border-gray-600 focus:outline-none focus:border-white"
              />
              <textarea
                placeholder="Quick feedback..."
                rows="2"
                className="w-full px-3 py-2 rounded bg-gray-700 text-white text-xs border border-gray-600 focus:outline-none focus:border-white resize-none"
              ></textarea>
              <button className="w-full bg-white text-black px-4 py-2 rounded text-xs font-semibold hover:bg-gray-200 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Vamos Nikies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;