import React from 'react'

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[95vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl sm:text-2xl font-bold">Product Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <i className="fas fa-times text-xl sm:text-2xl"></i>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 order-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-4 sm:space-y-6 order-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{product.name}</h3>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-bold text-black">{product.price}</div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Product Features</h4>
                  <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                    <li>• Premium quality materials</li>
                    <li>• Comfortable fit for all-day wear</li>
                    <li>• Durable construction</li>
                    <li>• Available in multiple sizes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Size Guide</h4>
                  <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                    {['6', '7', '8', '9', '10', '11', '12', '13'].map(size => (
                      <button
                        key={size}
                        className="border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-colors py-2 px-2 sm:px-3 text-center rounded text-sm sm:text-base"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Available Colors</h4>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full cursor-pointer border-2 border-gray-300 hover:border-gray-600"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full cursor-pointer border-2 border-gray-300 hover:border-gray-600"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full cursor-pointer border-2 border-gray-300 hover:border-gray-600"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full cursor-pointer border-2 border-gray-300 hover:border-gray-600"></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base">
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Add to Cart
                </button>
                <button className="w-full border border-black text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  <i className="fas fa-heart mr-2"></i>
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Additional Product Information */}
          <div className="mt-8 border-t pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <i className="fas fa-shipping-fast text-2xl sm:text-3xl text-green-500"></i>
                <h5 className="font-semibold text-sm sm:text-base">Free Shipping</h5>
                <p className="text-xs sm:text-sm text-gray-600">On orders over ₹2,999</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="fas fa-undo text-2xl sm:text-3xl text-blue-500"></i>
                <h5 className="font-semibold text-sm sm:text-base">Easy Returns</h5>
                <p className="text-xs sm:text-sm text-gray-600">30-day return policy</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <i className="fas fa-certificate text-2xl sm:text-3xl text-yellow-500"></i>
                <h5 className="font-semibold text-sm sm:text-base">Authentic</h5>
                <p className="text-xs sm:text-sm text-gray-600">100% genuine Nike products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
