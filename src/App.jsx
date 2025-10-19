import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes></Routes>
      </Router>
    </>
  )
}

export default App