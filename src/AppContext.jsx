import React, { createContext, useState } from "react";
import ListService from "./services/ArrayDataServices";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    let mList = ListService.getSortedMovieList() 
    const [movieList, setMovieList] = useState(mList)
    
    const movieListIndices = ListService.randomUniqueIntArrayInRange(movieList.length - 1, 3, 5);
    const [indices, setindices] = useState(movieListIndices)

    return (
        <AppContext.Provider value={{ movieList, setMovieList, indices, setindices }}>
            {children}
        </AppContext.Provider>
    )
}
