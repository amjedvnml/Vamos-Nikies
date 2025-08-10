import React, { useState } from 'react'
import Navbar from '../../components/navbar/navbar.jsx';
import Button from '../../components/button/button.jsx';
import Footer from '../../components/footer/footer.jsx';
import Modal from '../../components/modal/modal.jsx';
import products from '../../assets/product.js';

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products by search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nike Products</h1>
          <p className="text-xl mb-8">Discover our exclusive collection at Vamos Nikies, Nadapuram</p>
          
         
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Our Products</h2>
            
            {/* Search Bar */}
            <div className="max-w-md bg-gray-400 rounded-full">
              <input
                type="text"
                placeholder="Search Your Wish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-400 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-black">{product.price}</span>
                    <Button 
                      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                      onClick={() => handleViewDetails(product)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">Oopps!.No products found</h3>
              <p className="text-gray-500">Try searching for something else.</p>
            </div>
          )}
        </div>
      </section>
      {/* Stay Tuned */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-white">Stay Tuned</h2>
          <p className="text-gray-400 text-center mb-8">
            Get notified about upcoming releases and exclusive offers!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full bg-white text-black" />
            <Button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Subscribe</Button>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
      
      {/* Modal */}
      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default Product
