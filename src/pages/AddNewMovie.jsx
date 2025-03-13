import React, { useContext, useState } from 'react'

export default function AddNewMovie() {
  // return (
  //   <div>
  //     <div className="flex-none bg-gray-300 p-4 border-2 min-h-96">
  //       <div className="flex items-center">
  //         <h2 className="text-sm font-medium mr-2">Add New Movie!</h2>

  //       </div>
  //       <div className="flex-none">
  //         <textarea value="" rows="3" cols="50"></textarea>
  //       </div>
  //    </div>
  //   </div>
  // )
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

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

         <button>Add Movie</button>   
      </div>
    </div>
  )

}
