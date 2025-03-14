import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext.jsx'

export default function AddNewMovie(props) {
  const setIsAddNewMovie = props.setIsAddNewMovie
  const setIsDeleteMovie = props.setIsDeleteMovie
  const setIsSerachMovie = props.setIsSerachMovie
  const setSelectedMovie = props.setSelectedMovie

  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const { movieList, setMovieList } = useContext(AppContext);

  function addMovie() {
    movieList.sort((a, b) => a.id - b.id);
    let lastId = movieList[movieList.length - 1].id
    let newMovie = {
      "id": lastId + 1,
      "title": name,
      "rating": parseFloat(rating),
      "description": description,
      "fileName": pictureUrl
    }
    movieList.sort((a, b) => b.rating - a.rating);
    setMovieList([...movieList, newMovie]);
    movieList.sort((a, b) => b.rating - a.rating);

    setIsAddNewMovie(false)
    setIsDeleteMovie(false)
    setIsSerachMovie(false)
    setSelectedMovie(newMovie)

  }

  return (
    <div>
      <div className="flex-row items-center bg-gray-300 p-4 border-2 max-w-md max-h-96">
        <h2 className="text-xl font-bold mr-2 ">Add New Movie!</h2>
        <input type="text" name="name"
          onChange={e => setName(e.target.value)}
          placeholder="Movie Name"
          className="w-full p-3 mb-4 text-sm bg-white border border-gray-300 rounded"
          required
        />

        <input
          type="text"
          name="pictureUrl"
          onChange={e => setPictureUrl(e.target.value)}
          placeholder="Movie picture url"
          className="w-full p-3 mb-4 text-sm bg-white border border-gray-300 rounded"
          required
        />

        {/* <textarea value="" rows="3" cols="50"></textarea> */}
        <textarea
          name="description"
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          rows="2"
          className="w-full p-3 mb-4 text-sm bg-white border border-gray-300 rounded resize-none"
          required
        />
        <input
          type="number"
          name="rating"
          onChange={e => setRating(e.target.value)}
          placeholder="Rating"
          className="w-full p-3 mb-6 text-sm bg-white border border-gray-300 rounded"
          required
        />

        <button onClick={addMovie} >Add Movie</button>
      </div>
    </div>
  )

}
