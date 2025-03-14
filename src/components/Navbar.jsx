import React from 'react'

export default function Navbar(props) {
  const setIsAddNewMovie = props.setIsAddNewMovie
  const setIsDeleteMovie = props.setIsDeleteMovie
  const setIsSerachMovie = props.setIsSerachMovie

  const selectComponent = (e) => {
    //e.preventDefault();
    if (e.target.id === "Add") {
      setIsAddNewMovie(true)
      setIsDeleteMovie(false)

    } else if (e.target.id === "Search") {
      setIsSerachMovie(true)

    } else if (e.target.id === "Delete") {
      setIsAddNewMovie(false)
      setIsDeleteMovie(true)

    } else if (e.target.id === "Home") {
      setIsAddNewMovie(false)
      setIsDeleteMovie(false)
      setIsSerachMovie(false)
    }
  }

  return (
    <nav className="bg-emerald-200 py-4">
      <div className="md:container mx-auto flex justify-center space-x-12" >
        <button id='Add' onClick={selectComponent} className="bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">Add Movie</button>
        <button id='Search' onClick={selectComponent} className="bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">Search</button>
        <button id='Delete' onClick={selectComponent} className="bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">Delete</button>
        <button id='Home' onClick={selectComponent} className="bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">Home</button>
      </div>
    </nav>
  )
}
