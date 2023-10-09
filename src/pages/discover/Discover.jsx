import React from 'react'
import Navbar from '../../components/Navbar';
import Filter from './sections/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreDataAsync, fetchMoviesByGenresAsync, selectMovies } from '../../apis/discover/discoverSlice';
import { useEffect } from 'react';
import { genres } from '../../app/constaint';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieGrid from '../../components/MovieGrid';

function Discover() {

    const [moviesGenres, setMoviesGenres] = useState([]);
    const [moviesGenresStore, setMoviesGenresStore] = useState([...genres]);
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const [page, setPage] = useState(1);
    const { toogle } = useParams();

    let queryGenres = 'genres= ';

    useEffect(() => {

        for (const genre of moviesGenres) {
            let id = genre.id;
            queryGenres = queryGenres + (id.toString() + ' , ');
        }

        dispatch(fetchMoviesByGenresAsync({ queryGenres, toogle }))
    }, [moviesGenres, toogle])

    const fetchMoreData = () => {
        for (const genre of moviesGenres) {
            let id = genre.id;
            queryGenres = queryGenres + (id.toString() + ' , ');
        }
        queryGenres = queryGenres + `&page=${page}`
        dispatch(fetchMoreDataAsync({ queryGenres, toogle }))
        setPage(page + 1);
    }

    return (
        <main className='max-container min-h-screen  bg-black text-white relative flex flex-col'>

            <section className="w-full padding-x absolute top-0 left-0 z-50"><Navbar /></section>
            <section className='padding-x padding-t pb-4 self-end max-sm:mt-8' >
                <Filter
                    moviesGenres={moviesGenres}
                    setMoviesGenres={setMoviesGenres}
                    moviesGenresStore={moviesGenresStore}
                    setMoviesGenresStore={setMoviesGenresStore}
                /></section>
            <section className='sm:padding-x mx-8'>
                <MovieGrid
                    movies={movies}
                    fetchMoreData={fetchMoreData}
                    toogle={toogle}
                ></MovieGrid></section>
            <section className='padding-x'>somthing</section>
        </main >
    )
}

export default Discover;