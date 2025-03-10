import React from 'react'

export default function RandomMovies() {
  return (
    // <div className="w-40 p-2 border-2 hover:bg-green-200 transition-colors">

    <div className="w-40 min-h-96 h-full p-4 flex justify-center border-2 gap-4 space-x-2 py-2 bg-gray-300 hover:bg-green-200 transition-colors">
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-4">All Moview</h2>
        <div className="flex-1 h-20 bg-blue-400 border-2 flex items-center hover:bg-blue-500 transition-colors cursor-pointer">
          <span className="text-3xl font-normal text-black">Movie x</span>
        </div>
        <div className="flex-1  h-20 bg-blue-400 border-2 flex items-center hover:bg-blue-500 transition-colors cursor-pointer">
          <span className="text-3xl font-normal text-black">Movie y</span>
        </div>
        <div className="flex-1 h-20 bg-blue-400 border-2 flex items-center hover:bg-blue-500 transition-colors cursor-pointer">
          <span className="text-3xl font-normal text-black">Movie z</span>
        </div>
        <div className="flex-1 h-20 bg-blue-400 border-2 flex items-center hover:bg-blue-500 transition-colors cursor-pointer">
          <span className="text-3xl font-normal text-black">Movie a</span>
        </div>
        <div className="flex-1 h-20 bg-blue-400 border-2 flex items-center hover:bg-blue-500 transition-colors cursor-pointer">
          <span className="text-3xl font-normal text-black">Movie c</span>
        </div>
      </div>
    </div>
    // </div>


  )
}
