import React, { useContext } from 'react'
import { AppContext } from '../AppContext.jsx'

export default function TopMovieRibbon(props) {
  const { movieList, setMovieList } = useContext(AppContext);
  const imagePath = '/src/images/'

  function handleMovieClick(movie) {
    props.setSelectedMovie(movie)
  }

  return (
    <div className="w-full  bg-gray-300 border-t-4 border-b-2 border-black" >
      <div className="container mx-auto flex justify-center space-x-12 py-6 hover:bg-green-200 transition-colors">
        <div className="w-32 max-h-32 bg-blue-400 flex-none items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"
          onClick={() => handleMovieClick(movieList[0])}>
          <span className="text-1xl font-semibold text-black">{movieList[0].title}</span>
          <img src={imagePath + movieList[0].fileName} alt={movieList[0].fileName} width="126" height="190"></img>
        </div>
        <div className="w-32 h-32 bg-blue-400 flex-none items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"
          onClick={() => handleMovieClick(movieList[1])}>
          <span className="text-1xl font-semibold text-black">{movieList[1].title}</span>
          <img src={imagePath + movieList[1].fileName} alt={movieList[1].fileName} width="126" height="190"></img>
        </div>
        <div className="w-32 h-32 bg-blue-400 flex-none items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"
          onClick={() => handleMovieClick(movieList[2])}>
          <span className="text-1xl font-semibold text-black">{movieList[2].title}</span>
          <img src={imagePath + movieList[2].fileName} alt={movieList[2].fileName} width="126" height="190"></img>
        </div>
      </div>
    </div>
  )
}
