import React from 'react'
import Navbar from '../../components/navbar/navbar.jsx'
import Footer from '../../components/footer/footer.jsx';

const Store = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Store</h1>
          <p className="text-xl">Visit Vamos Nikies in Nadapuram for the best Nike experience</p>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Store Information</h2>
              <div className="space-y-4">
                {/* Store Details */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                  <h3 className="font-semibold text-xl mb-4">Store Details</h3>

                  {/* Address */}
                  <div className="flex items-start space-x-3 mb-4">
                    <i className="fas fa-map-marker-alt text-red-500 text-2xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-gray-600">Vamos Nikies,<br /> Vadakara Road, Near Bus Stand,<br /> Nadapuram, Kozhikode District<br />Kerala, 673506, India</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3 mb-4">
                    <i className="fas fa-envelope text-blue-500 text-2xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">info@vamosnikies.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-phone text-green-500 text-2xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">+91 9995 219061</p>
                      <p className="text-gray-600">+91 9207 182281</p>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3 bg-white rounded-lg shadow-lg p-6 mb-6">
                  <i className="fas fa-clock text-purple-500 text-2xl mt-1"></i>
                  <div>
                    <h3 className="font-semibold">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 9:00 PM<br />Sunday: 10:00 AM - 8:00 PM</p>
                    <p className="text-orange-700 bg-amber-200 p-1 rounded-sm"><i className="fas fa-info-circle mr-1"></i>Public Holidays: Closed and  Extended hours during festival seasons</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Location */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Find Us</h3>
              <div className="h-96 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d76.123456789!3d11.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba1234567890abc%3A0x1234567890abcdef!2sVamos%20Nikies!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="p-4">
                  <p className="text-gray-700 p-1"><i className='fas fa-train text-blue-500 text-xl mr-2'></i>30 mins from Vadakara Railway Station</p>
                  <p className="text-gray-700 p-1"><i className='fas fa-bus text-green-800 text-xl mr-2'></i>5 mins from Nadapuram Bus Stand</p>
                  <p className="text-gray-700 p-1"><i className='fas fa-car text-red-500 text-xl mr-2'></i>Best Parking Facility Available</p>
                  <p className="text-gray-700 p-1"><i className='fas fa-map-marker-alt text-yellow-500 text-xl mr-2'></i>Located at the heart of Nadapuram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Store Features */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Store Features</h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {/* Feature 1 */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <div className="mb-4">
                <i className="fas fa-shopping-bag text-blue-500 text-4xl"></i>
              </div>
              <h3 className="font-semibold text-xl mb-4">Wide Range of Products</h3>
              <p className="text-gray-600">We offer a diverse selection of products to cater to all your needs.</p>
            </div>
            {/* Feature 2 */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <div className="mb-4">
                <i className="fas fa-user-tie text-green-500 text-4xl"></i>
              </div>
              <h3 className="font-semibold text-xl mb-4">Expert Staff</h3>
              <p className="text-gray-600">Our knowledgeable staff is here to assist you with any inquiries.</p>
            </div>
            {/* Feature 3 */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <div className="mb-4">
                <i className="fas fa-medal text-yellow-500 text-4xl"></i>
              </div>
              <h3 className="font-semibold text-xl mb-4">Customer Loyalty Program</h3>
              <p className="text-gray-600">Join our loyalty program and enjoy exclusive discounts and offers.</p>
            </div>
            {/* Feature 4 */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <div className="mb-4">
                <i className="fas fa-running text-red-500 text-4xl"></i>
              </div>
              <h3 className="font-semibold text-xl mb-4">Shoe Testing Area</h3>
              <p className="text-gray-600">Try before you buy with our dedicated shoe testing area.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className='py-16 bg-gray-100'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-image text-gray-400 text-6xl mb-2"></i>
                <p className="text-gray-500">Store Interior</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-image text-gray-400 text-6xl mb-2"></i>
                <p className="text-gray-500">Product Display</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-image text-gray-400 text-6xl mb-2"></i>
                <p className="text-gray-500">Customer Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Store
