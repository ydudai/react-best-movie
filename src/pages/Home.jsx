import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import TopMovieRibbon from '../components/TopMovieRibbon'
import RandomMovies from '../components/RandomMovies'
import MovieDetails from '../components/MovieDetails'
import { AppContext } from '../AppContext.jsx'

export default function Home() {
    const { movieList } = useContext(AppContext);
    const [selectedMovie, setSelectedMovie] = useState(movieList[0]);

    return (
        <div>
            <header className="bg-gray-300 shadow-md">
                <div className="container mx-auto py-4 text-center">
                    <h1 className="text-2xl font-medium text-black">Best Movie</h1>
                </div>
            </header>
            <Navbar></Navbar>
            <TopMovieRibbon setSelectedMovie = {setSelectedMovie}></TopMovieRibbon>
            <div className="flex w-full items-start">
                <MovieDetails selectedMovie = {selectedMovie}></MovieDetails>
                <RandomMovies setSelectedMovie = {setSelectedMovie}></RandomMovies>
            </div>
        </div>
    )
}
