import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext.jsx'

export default function DeleteMovie() {

  const { movieList, setMovieList } = useContext(AppContext);
  const [movieTitle, setMovieTitle] = useState("");

  function deleteMovie() {
    const index = movieList.findIndex(movie => movie.title === movieTitle);
    if(index == -1) {
      alert("Movie " + movieTitle + " is not found")
      return
    } 

    const newArray = [
      ...movieList.slice(0, index), // Elements before the one to delete
      ...movieList.slice(index + 1) // Elements after the one to delete
    ];
    setMovieList(newArray);
  }

  return (
    <div>
      <div className="flex-row items-center bg-gray-300 p-4 border-2 max-w-md max-h-96">
        <h2 className="text-xl font-bold mr-2 mb-8">Delete a Movie!</h2>
        <input type="text" name="name"
          onChange={e => setMovieTitle(e.target.value)}
          placeholder="Movie Name"
          className="w-full p-3 mb-8 text-sm bg-white border border-gray-300 rounded"
        />

        {/* <textarea value="" rows="3" cols="50"></textarea> */}
        <textarea
          name="description"
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          rows="2"
          className="w-full p-3 mb-24 text-sm bg-white border border-gray-300 rounded resize-none invisible"
          readOnly
        />

        <button onClick={deleteMovie} >Delete</button>
      </div>
    </div>
  )
}
