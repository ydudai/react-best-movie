import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-emerald-200 py-4">
      <div className="md:container mx-auto flex justify-center space-x-12" >
        <button className="bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">Add Movie</button>
        <button className="bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">Search</button>
        <button className="bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">Delete</button>
        <button className="bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">Home</button>
      </div>
    </nav>
  )
}
