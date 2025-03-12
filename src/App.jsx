import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import { AppProvider } from './AppContext';

function App() {

  return (
    <>
      <AppProvider>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
      </AppProvider>
    </>
  )
}

export default App
