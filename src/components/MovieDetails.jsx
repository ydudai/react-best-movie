import React from 'react'
import NumberSelector from './NumberSelector';

export default function MovieDetails(props) {
  const imagePath = '/src/images/'
  let selectedMovie = props.selectedMovie

  return (
    <div>
      <div className="flex-none bg-gray-300 p-4 border-2 min-h-96">
        <div className="flex items-center">
          <h2 className="text-sm font-medium mr-2">Movie Name:</h2>
          <h2 className="text-sm">{selectedMovie.title}</h2>
        </div>
        <div className="flex-none">
          <img src={imagePath + selectedMovie.fileName} alt={selectedMovie.fileName} width="126" height="190"></img>
          <h2 className="block text-sm font-medium text-gray-700 mb-1">Movie Description:</h2>
          <textarea value={selectedMovie.description} rows="3" cols="50" readOnly></textarea>
          <NumberSelector></NumberSelector>
        </div>
      </div>
    </div>
  )
}
