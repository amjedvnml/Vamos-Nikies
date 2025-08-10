import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
    // For now, redirect to home page
    navigate('/')
  }

  const handleSignUpRedirect = () => {
    navigate('/sign-in')
  }

  const handleClose = () => {
    navigate(-1) // Go back to previous page
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Close Bar */}
      <div className="bg-black text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/nikeWhite.svg" alt="Nike Logo" className="w-8 h-8" />
            <span className="font-bold text-lg">Vamos Nikies</span>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full transition-colors"
            title="Close and go back"
          >
            <i className="fas fa-times text-xl text-gray-100"></i>
          </button>
        </div>
      </div>
      
      {/* Login Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-black to-gray-900 text-white p-6 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <img src="/nikeWhite.svg" alt="Nike Logo" className="w-10 h-10" />
                <h2 className="text-2xl font-bold">Vamos Nikies</h2>
              </div>
              <h3 className="text-xl">Welcome Back</h3>
              <p className="text-gray-300">Sign in to your account</p>
            </div>

            {/* Login Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="fas fa-envelope mr-2 text-gray-500"></i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="fas fa-lock mr-2 text-gray-500"></i>
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                    >
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <button type="button" className="text-sm text-black hover:underline">
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="mt-6 mb-6 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Social Login Options */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <i className="fab fa-google text-red-500 mr-3"></i>
                  Continue with Google
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <i className="fab fa-facebook text-blue-600 mr-3"></i>
                  Continue with Facebook
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={handleSignUpRedirect}
                    className="text-black font-semibold hover:underline"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Join the Vamos Nikies community and enjoy:</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <i className="fas fa-shipping-fast text-green-500 mr-2"></i>
                Fast Delivery
              </div>
              <div className="flex items-center">
                <i className="fas fa-tags text-blue-500 mr-2"></i>
                Exclusive Offers
              </div>
              <div className="flex items-center">
                <i className="fas fa-crown text-yellow-500 mr-2"></i>
                Member Benefits
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login