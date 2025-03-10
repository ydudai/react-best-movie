import React from 'react'

export default function TopMovieRibbon() {
  const topRatedMovies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' }
  ];

  return (
    <div className="w-full  bg-gray-300 border-t-4 border-b-2 border-black" >
      <div className="container mx-auto flex justify-center space-x-12 py-6 hover:bg-green-200 transition-colors">
        <div className="w-32 max-h-32 bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
          <span className="text-2xl font-bold text-black">Movie 1</span>
        </div>
        <div className="w-32 h-32 bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
          <span className="text-2xl font-bold text-black">Movie 2</span>
        </div>
        <div className="w-32 h-32 bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
          <span className="text-2xl font-bold text-black">Movie 3</span>
        </div>
      </div>
    </div>
  )
}
