import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
function App() {

  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/' />

      </Routes>
    </>
  )
}

export default App
