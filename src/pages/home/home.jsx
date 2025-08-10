import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar.jsx'
import Button from '../../components/button/button.jsx'
import Footer from '../../components/footer/footer.jsx'
import Assets from '../../assets/assets.js'

const Home = () => {
    const navigate = useNavigate()

    const handleShopNow = () => {
        navigate('/products')
    }

    const handleContactUs = () => {
        navigate('/contact')
    }

    const handleFindStore = () => {
        navigate('/store')
    }
    return (
        <div className='ease-in-out duration-300 bg-gray-100 min-h-screen flex flex-col'>
            <Navbar />
            {/* Hero Section */}
            <section className='bg-gradient-to-r from-black to-gray-900 text-gray-300 h-screen flex flex-col justify-center items-center text-center'>
                <div className='w-full max-w-2xl'>
                    <h1 className='text-6xl font-bold mb-4'>Just Do It</h1>
                    <h2 className='text-xl'>Welcome to Vamos Nikies, Your Premier Nike Destination in Nadapuram</h2>
                    <p className='mt-6'>Explore our exclusive collection of Nike products, from the latest sneakers to stylish apparel.
                        Whether you're an athlete or a fashion enthusiast, we have something for everyone.</p>
                    <Button className='mt-4 ml-6 rounded-full text-black bg-white  w-10/12 md:w-2xl md:mr-6 hover:scale-105' onClick={handleShopNow}>
                        Shop Now
                    </Button>
                </div>
            </section>
            {/* Featured Product */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
                            <div className="h-64 overflow-hidden">
                                <img src={Assets[0]} alt="Nike Air Max" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Nike Air Max 270</h3>
                                <p className="text-gray-600 mb-4">Premium comfort and style for everyday wear</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold">₹8,999</span>
                                    <Button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition" onClick={handleShopNow}>View Details</Button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
                            <div className="h-64 overflow-hidden">
                                <img src={Assets[6]} alt="Nike ZoomX Vaporfly" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Nike ZoomX Vaporfly</h3>
                                <p className="text-gray-600 mb-4">Moisture-wicking technology for peak performance</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold">₹12,999</span>
                                    <Button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition" onClick={handleShopNow}>View Details</Button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
                            <div className="h-64 overflow-hidden">
                                <img src={Assets[3]} alt="Nike Football Boots" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Nike Football Boots</h3>
                                <p className="text-gray-600 mb-4">Professional-grade football equipment</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold">₹5,999</span>
                                    <Button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition" onClick={handleShopNow}>View Details</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* why Use */}
            <section className="py-12 bg-[#f8f8f8]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Vamos Nikies?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="p-6 flex flex-col items-center text-center">
                            <i className="fas fa-certificate text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                            <p className="text-gray-600">We ensure the highest quality standards in all our products with their originality.</p>
                        </div>
                        <div className="p-6 flex flex-col items-center text-center">
                            <i className="fas fa-tags text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
                            <p className="text-gray-600">Get the best value for your money with our competitive pricing.</p>
                        </div>
                        <div className="p-6 flex flex-col items-center text-center">
                            <i className="fas fa-thumbs-up text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                            <p className="text-gray-600">We prioritize our customers and strive for 100% satisfaction.</p>
                        </div>
                        <div className="p-6 flex flex-col items-center text-center">
                            <i className="fas fa-retweet text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Return Policy</h3>
                            <p className="text-gray-600">We offer hassle-free returns within 30 days of purchase.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* find the store */}
            <section className="py-12 bg-black text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Find a Store</h2>
                    <p className="text-center mb-8">Locate your nearest Vamos Nikies store for an exclusive in-person shopping experience.</p>
                    <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                        <Button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 hover:text-gray-900 transition" onClick={handleFindStore}>
                            Find Our Store
                        </Button>
                        <Button className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-full hover:bg-gray-200 hover:text-gray-900 transition" onClick={handleContactUs}>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Home
