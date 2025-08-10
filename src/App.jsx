import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Product from './pages/product/product.jsx'
import Store from './pages/store/store.jsx'
import About from './pages/about/about.jsx'
import Contact from './pages/contact/contact.jsx'
import Login from './pages/logIn/login.jsx'
import SignIn from './pages/signIn/signIn.jsx'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </Router>
  )
}


export default App
