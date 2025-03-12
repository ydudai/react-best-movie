import React, { useContext } from 'react'
import { AppContext } from '../AppContext.jsx'
import ListService from "../services/ArrayDataServices";
import MovieDetails from './MovieDetails.jsx';

export default function RandomMovies(props) {
  const imagePath = '/src/images/'
  const { movieList, indices } = useContext(AppContext);

  function handleMovieClick(movie) {
    props.setSelectedMovie(movie)
  }

  return (
    <div className="w-40 min-h-96 h-full p-4 flex justify-center border-2 gap-4 space-x-2 py-2 bg-gray-300 hover:bg-green-200 transition-colors">

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden ">
        <h2 className="text-lg font-semibold mb-0.5">All Moview</h2>

        <div className="divide-y divide-gray-200">
          {/*   1st. Random Movie */}
          <div className="relative cursor-pointer mb-0.5" onClick={() => handleMovieClick(movieList[indices[0]])}>
            <img className="w-full h-16 object-cover" src={imagePath + movieList[indices[0]].fileName} alt={movieList[0].fileName}></img>
            <div className="absolute top-0 left-0 w-full h-full  flex items-center justify-center"
              style={{ backgroundColor: 'rgba(96, 165, 250, 0.5)' }}>
              <span className="text-1xl font-mono text-white px-4">{movieList[indices[0]].title}</span>
            </div>
          </div>

          {/*   2nd. Random Movie */}
          <div className="relative cursor-pointer mb-0.5" onClick={() => handleMovieClick(movieList[indices[1]])}>
            <img className="w-full h-16 object-cover" src={imagePath + movieList[indices[1]].fileName} alt={movieList[1].fileName}></img>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(96, 165, 250, 0.5)' }} >
              <span className="text-xl font-mono text-white px-4">{movieList[indices[1]].title}</span>
            </div>
          </div>

          {/*   3rd. Random Movie */}
          <div className="relative cursor-pointer mb-0.5" onClick={() => handleMovieClick(movieList[indices[2]])}>
            <img className="w-full h-16 object-cover" src={imagePath + movieList[indices[2]].fileName} alt={movieList[2].fileName}></img>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(96, 165, 250, 0.5)' }} >
              <span className="text-1xl font-mono text-white px-4">{movieList[indices[2]].title}</span>
            </div>
          </div>

          {/*   4th. Random Movie */}
          <div className="relative cursor-pointer mb-0.5" onClick={() => handleMovieClick(movieList[indices[3]])}>
            <img className="w-full h-16 object-cover" src={imagePath + movieList[indices[3]].fileName} alt={movieList[3].fileName}></img>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(96, 165, 250, 0.5)' }}  >
              <span className="text-1xl font-mono text-white px-4">{movieList[indices[3]].title}</span>
            </div>
          </div>

          {/*   5th. Random Movie */}
          <div className="relative cursor-pointer m-0.5" onClick={() => handleMovieClick(movieList[indices[4]])}>
            <img className="w-full h-16 object-cover" src={imagePath + movieList[indices[4]].fileName} alt={movieList[4].fileName}></img>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(96, 165, 250, 0.5)' }} >
              <span className="text-1xl font-mono text-white px-4">{movieList[indices[4]].title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
