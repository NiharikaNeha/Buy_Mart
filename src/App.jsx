import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Index/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App