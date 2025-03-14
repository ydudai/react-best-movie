import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext.jsx'

export default function SearchMovie(props) {
  const { movieList, setMovieList } = useContext(AppContext);
  const [movieTitle, setMovieTitle] = useState("");

  function search() {
    const index = movieList.findIndex(movie => movie.title === movieTitle);
    if (index == -1) {
      alert("Movie " + movieTitle + " is not found")
      return
    }

    const movie = movieList.find(movie => movie.title === movieTitle);
    console.log(movie)
    props.setSelectedMovie(movie)
  }

  return (
    <div className="w-40 min-h-96 h-full p-4 flex justify-center border-2 gap-4 space-x-2 py-2 bg-gray-300 hover:bg-green-200 transition-colors">

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden ">
        <h2 className="text-lg font-semibold mb-0.5">Search Moview</h2>
        <input type="text" name="name"
          onChange={e => setMovieTitle(e.target.value)}
          placeholder="Movie Name"
          className="w-full p-3 mb-8 text-sm bg-white border border-gray-300 rounded "
        />
        <button className="bg-blue-500" onClick={search} >Search</button>
      </div>
    </div>

  )
}
