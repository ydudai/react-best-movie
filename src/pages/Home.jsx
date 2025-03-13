import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import TopMovieRibbon from '../components/topMovieRibbon.jsx'
import RandomMovies from '../components/RandomMovies'
import MovieDetails from '../components/MovieDetails'
import { AppContext } from '../AppContext.jsx'
import AddNewMovie from './AddNewMovie.jsx'
import DeleteMovie from './DeleteMovie.jsx'
import SearchMovie from './SearchMovie.jsx'

export default function Home() {
    const { movieList } = useContext(AppContext);
    const [selectedMovie, setSelectedMovie] = useState(movieList[0]);
    const [isAddNewMovie, setIsAddNewMovie] = useState(false);
    const [isDeleteMovie, setIsDeleteMovie] = useState(false);
    const [isSerachMovie, setIsSerachMovie] = useState(false);

    return (
        <div>
            {/* Header message */}
            <header className="bg-gray-300 shadow-md">
                <div className="container mx-auto py-4 text-center">
                    <h1 className="text-2xl font-medium text-black">Best Movie</h1>
                </div>
            </header>

            {/* 4 Buttons Navigation bar  */}
            <Navbar setIsAddNewMovie={setIsAddNewMovie} setIsDeleteMovie={setIsDeleteMovie} setIsSerachMovie={setIsSerachMovie}></Navbar>

            {/* 3 Top Movies Components*/}
            <TopMovieRibbon setSelectedMovie={setSelectedMovie}></TopMovieRibbon>

            <div className="flex w-full items-start">

                {/* MovieDetails - AddNewMovie - DeleteMovie  Components*/}
                {isAddNewMovie ?
                    (<AddNewMovie></AddNewMovie>)
                    : isDeleteMovie ?
                        (<DeleteMovie></DeleteMovie>)
                        : (<MovieDetails selectedMovie={selectedMovie}></MovieDetails>)
                }

                {/* Random Movies & Search Components */}
                {isSerachMovie ? (<SearchMovie></SearchMovie>)
                    : <RandomMovies setSelectedMovie={setSelectedMovie} ></RandomMovies>
                }

            </div>
        </div>
    )
}
