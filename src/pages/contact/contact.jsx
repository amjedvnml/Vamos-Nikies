import React from 'react'
import Navbar from '../../components/navbar/navbar.jsx'
import Footer from '../../components/footer/footer.jsx'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with Vamos Nikies team</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 mb-6">
                  <i className="fas fa-phone text-green-500 text-2xl mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+91 9995 219061</p>
                    <p className="text-gray-600">+91 9207 182282</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 mb-6">
                  <i className="fas fa-envelope text-red-500 text-2xl mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@vamosnikies.com</p>
                    <p className="text-gray-600">support@vamosnikies.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 mb-6">
                  <i className="fas fa-map-marker-alt text-blue-500 text-2xl mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">Vamos Nikies Store<br/>Nadapuram, Kerala<br/>India - 676306</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 mb-6">
                  <i className="fas fa-clock text-purple-500 text-2xl mt-1"></i>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-600 mb-2">Sunday: 10:00 AM - 8:00 PM</p>
                    <p className="text-orange-700 bg-amber-200 p-1 rounded-sm"><i className="fas fa-info-circle mr-1"></i>Public Holidays: Closed and  Extended hours during festival seasons</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact
