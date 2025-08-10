import React from 'react'
import Navbar from '../../components/navbar/navbar.jsx'
import Footer from '../../components/footer/footer.jsx'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Your trusted Nike partner in Nadapuram</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Vamos Nikies has been serving the Nadapuram community with authentic Nike products for over a decade. 
                We are passionate about bringing the latest in athletic wear, footwear, and accessories to our customers.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to quality and customer satisfaction has made us the preferred Nike dealer in the region. 
                We believe in the Nike philosophy of "Just Do It" and help our customers achieve their athletic and lifestyle goals.
              </p>
              <p className="text-gray-600">
                From professional athletes to fitness enthusiasts, we cater to everyone who values quality and performance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-medal text-yellow-500 text-xl"></i>
                  <span>Authorized Nike Dealer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-shield-alt text-green-500 text-xl"></i>
                  <span>100% Authentic Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-users text-blue-500 text-xl"></i>
                  <span>Expert Customer Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-truck text-purple-500 text-xl"></i>
                  <span>Fast & Reliable Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-heart text-red-500 text-xl"></i>
                  <span>Community Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <i className="fas fa-bullseye text-4xl text-red-500 mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To inspire and enable athletic achievement by providing authentic Nike products 
                and exceptional customer service to the Nadapuram community.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <i className="fas fa-eye text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading sports retailer in Kerala, empowering athletes and fitness 
                enthusiasts to reach their full potential through quality products and service.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Awards */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <i className="fas fa-trophy text-white text-4xl mb-4 p-3 bg-yellow-500 rounded-full"></i>
              <h3 className="text-2xl font-bold mb-4">Best Retailer Award 2022</h3>
              <p className="text-gray-600">
                Recognized as the best Nike retailer in the region for our outstanding customer service and product range.
              </p>
            </div>
            <div>
              <i className="fas fa-hands-helping text-white text-4xl mb-4 p-3 bg-green-500 rounded-full"></i>
              <h3 className="text-2xl font-bold mb-4">Community Service Award</h3>
              <p className="text-gray-600">
                Honored for our commitment to giving back to the Nadapuram community through various initiatives.
              </p>
            </div>
            <div>
              <i className="fas fa-star text-white text-4xl mb-4 p-3 bg-blue-500 rounded-full"></i>
              <h3 className="text-2xl font-bold mb-4">Excellence in Customer Care 2023</h3>
              <p className="text-gray-600">
                Awarded for maintaining the highest standards of customer satisfaction and building lasting relationships with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About
