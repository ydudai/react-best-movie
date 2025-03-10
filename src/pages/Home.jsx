import React from 'react'
import Navbar from '../components/Navbar'
import TopMovieRibbon from '../components/TopMovieRibbon'
import RandomMovies from '../components/RandomMovies'
import MovieDetails from '../components/MovieDetails'

export default function Home() {
    return (
        <div>
            <header className="bg-gray-300 shadow-md">
                <div className="container mx-auto py-4 text-center">
                    <h1 className="text-2xl font-medium text-black">Best Movie</h1>
                </div>
            </header>
            <Navbar></Navbar>
            <TopMovieRibbon></TopMovieRibbon>
            <div className="flex w-full items-start">
                <MovieDetails></MovieDetails>
                <RandomMovies></RandomMovies>
            </div>
        </div>
    )
}
