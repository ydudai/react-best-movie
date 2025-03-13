import React from 'react'

export default function DeleteMovie() {
  return (
    <div>
      <div className="flex-none bg-gray-300 p-4 border-2 min-h-96">
        <div className="flex items-center">
          <h2 className="text-sm font-medium mr-2">Delete Movie!</h2>
        </div>
        <div className="flex-none">
          <textarea value="" rows="3" cols="50"></textarea>
        </div>
     </div>
    </div>
  )
}
