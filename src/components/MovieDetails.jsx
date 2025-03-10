import React from 'react'
import NumberSelector from './NumberSelector';

export default function MovieDetails() {
  let movieName = "The Shawshank Redemption";
  let movieDescription = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency"
  return (
    <div>
      <div className="flex-none bg-gray-300 p-4 border-2 max-h-96">
        <div className="flex items-center">
          <h2 className="text-sm font-medium mr-2">Movie Name:</h2>
          <h2 className="text-sm">{movieName}</h2>
        </div>
        <div className="flex-none">
          <img src='/src/images/Showshank-redemption.jpg' alt="Showshank-redemption" width="126" height="190"></img>
          <h2 className="block text-sm font-medium text-gray-700 mb-1">Moview Description:</h2>
          <textarea value={movieDescription} rows="3" cols="50" readOnly></textarea>
          <NumberSelector></NumberSelector>
          
        </div>
     </div>
    </div>
  )
}
