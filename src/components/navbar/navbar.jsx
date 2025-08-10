import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false)
  }, [location]);

  const isActiveLink = (path) => {
    return location.pathname === path
  }
  const handleLogIn = () => {
    navigate('/login')
  }
  return (
    <nav className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto p-2 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img src="/nikeWhite.svg" alt="Logo" className="w-14 h-14" />
          <h1 className="text-3xl font-bold">Vamos Nikies</h1>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className={`hover:text-gray-300 ${isActiveLink("/") ? "border-b-2 border-gray-300" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" className={`hover:text-gray-300 ${isActiveLink("/products") ? "border-b-2 border-gray-300" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
            Products
          </Link>
          <Link to="/about" className={`hover:text-gray-300 ${isActiveLink("/about") ? "border-b-2 border-gray-300" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/store" className={`hover:text-gray-300 ${isActiveLink("/store") ? "border-b-2 border-gray-300" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
            Store
          </Link>
          <Link to="/contact" className={`hover:text-gray-300 ${isActiveLink("/contact") ? "border-b-2 border-gray-300" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          
          {/* User Profile (Desktop) */}
          <div className="ml-4">
            <button className="w-9 h-9 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors flex items-center justify-center" onClick={handleLogIn}>
              <i className="fas fa-user text-white text-sm"></i>
            </button>
          </div>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <i className="fas fa-times text-xl"></i> : <i className="fas fa-bars text-xl"></i> }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-4 py-2 space-y-1">
            {/* User Profile (Mobile) */}
            <div className="flex items-center space-x-3 py-3 px-3 border-b border-gray-700 mb-2" onClick={handleLogIn}>
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                <i className="fas fa-user text-white text-sm"></i>
              </div>
              <div>
                <p className="text-white font-medium">Not Signed In</p>
                <p className="text-gray-400 text-sm">Welcome to Vamos Nikies</p>
              </div>
            </div>
            
            <Link 
              to="/" 
              className={`block py-3 px-3 rounded transition-colors border-l-4 ${
                isActiveLink('/') 
                  ? 'bg-gray-800 border-white text-white' 
                  : 'hover:bg-gray-800 border-transparent'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`block py-3 px-3 rounded transition-colors border-l-4 ${
                isActiveLink('/products') 
                  ? 'bg-gray-800 border-white text-white' 
                  : 'hover:bg-gray-800 border-transparent'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`block py-3 px-3 rounded transition-colors border-l-4 ${
                isActiveLink('/about') 
                  ? 'bg-gray-800 border-white text-white' 
                  : 'hover:bg-gray-800 border-transparent'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/store" 
              className={`block py-3 px-3 rounded transition-colors border-l-4 ${
                isActiveLink('/store') 
                  ? 'bg-gray-800 border-white text-white' 
                  : 'hover:bg-gray-800 border-transparent'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </Link>
            <Link 
              to="/contact" 
              className={`block py-3 px-3 rounded transition-colors border-l-4 ${
                isActiveLink('/contact') 
                  ? 'bg-gray-800 border-white text-white' 
                  : 'hover:bg-gray-800 border-transparent'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
