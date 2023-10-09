import { useState } from 'react'
import MovieCard from '../../../components/MovieCard'
import ToogleButton from '../../../components/ToogleButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopRatedMoviesAsync, selectTopRatedMovies, selectTopRatedRederCount, selectTopRatedToogle, setTopRatedRenderCount, setTopRatedToogle } from '../../../apis/home/homeSlcie'
import { useEffect } from 'react'

function Toprated() {
    const leftText = "Movie"
    const rightText = "Tv"
    const movies = useSelector(selectTopRatedMovies);
    const toogle = useSelector(selectTopRatedToogle);
    const render = useSelector(selectTopRatedRederCount);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const newToogle = toogle.toLowerCase();
        if (render === 1) {
            return;
        }
        dispatch(fetchTopRatedMoviesAsync(newToogle));
        dispatch(setTopRatedRenderCount(1));
    }, [toogle])

    const handleClick = () => {
        dispatch(setTopRatedToogle(toogle === "Movie" ? "Tv" : "Movie"))
        dispatch(setTopRatedRenderCount(0));
    }

    const movieClick = (id) => {
        const newToogle = toogle.toLowerCase();
        return navigate(`/${newToogle}/${id}`)
    }
    return (
        <section id='popular-movies'>
            <div className="flex flex-row justify-between items-center w-full">
                <h3 className="text-4xl font-palanquin font-semibold max-sm:text-lg">Top Rated </h3>
                <div className=" self-end mb-2 sm:mb-6">
                    <ToogleButton leftText={leftText} rightText={rightText} on={toogle} handleClick={handleClick} />
                </div>

            </div>

            <div className=" scroll-container flex gap-5">
                {
                    movies.map((movies) => (
                        <MovieCard key={movies.original_title} {...movies} handleClick={movieClick} />
                    ))
                }
            </div>
        </section>
    )
}

export default Toprated;