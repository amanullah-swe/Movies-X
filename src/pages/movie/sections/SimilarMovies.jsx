import React from 'react'
import MovieCard from '../../../components/MovieCard'
import { useNavigate } from 'react-router-dom'

function SimilarMovies({ similarMovies, toogle }) {
    const navigate = useNavigate();
    const movieClick = (id) => {
        console.log(id,)
        return navigate(`/${toogle}/${id}`)
    }
    return (
        <section id='similar-movies' className="flex flex-col sm:h-96 h-80">
            <div className="flex flex-row justify-between items-center w-full mb-4">
                <h3 className="text-2xl font-palanquin font-semibold max-sm:text-lg">Similar Movies</h3>
            </div>

            <div className="scroll-container flex gap-5">
                {
                    similarMovies?.map((movie) => (
                        <MovieCard key={movie.original_title} {...movie} handleClick={movieClick} />
                    ))
                }
            </div>
        </section>
    )
}

export default SimilarMovies