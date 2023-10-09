import { useEffect, useState } from 'react'
import { movies } from '../../../app/constaint'
import MovieCard from '../../../components/MovieCard'
import ToogleButton from '../../../components/ToogleButton'
import { useNavigate } from 'react-router-dom'
import { fetchPopularMoviesAsync, selectPopularMovies, selectPopularRenderCount, selectPopularToogle, setPopularRenderCount, setPopularToogle } from '../../../apis/home/homeSlcie'
import { useDispatch, useSelector } from 'react-redux'

function PopularMovies() {
    const leftText = "Movie"
    const rightText = "Tv"

    const popularMovies = useSelector(selectPopularMovies);
    const render = useSelector(selectPopularRenderCount)
    const toogle = useSelector(selectPopularToogle)

    const dispatch = useDispatch();
    useEffect(() => {
        const newToogle = toogle.toLowerCase();
        if (render === 1) {
            return;
        }
        dispatch(fetchPopularMoviesAsync(newToogle));
    }, [toogle])

    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(setPopularToogle(toogle === "Movie" ? "Tv" : "Movie"))
        dispatch(setPopularRenderCount(0))
    }
    const movieClick = (id) => {
        const newToogle = toogle.toLowerCase();
        return navigate(`/${newToogle}/${id}`)
    }

    return (
        <section id='popular-movies'>
            <div className="flex flex-row justify-between items-center w-full">
                <h3 className="text-4xl font-palanquin font-semibold max-sm:text-lg">What's Popular </h3>
                <div className=" self-end mb-2 sm:mb-6">
                    <ToogleButton leftText={leftText} rightText={rightText} on={toogle} handleClick={handleClick} />
                </div>

            </div>

            <div className=" scroll-container flex gap-5">
                {
                    popularMovies.map((movies) => (
                        <MovieCard key={movies.original_title} {...movies} handleClick={movieClick} />
                    ))
                }
            </div>
        </section>
    )
}

export default PopularMovies