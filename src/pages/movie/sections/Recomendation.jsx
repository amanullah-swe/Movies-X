import React from 'react'
import { useNavigate } from 'react-router-dom';
import MovieCard from '../../../components/MovieCard';
import { movies } from '../../../app/constaint';

function Recomendation({ recomendation, toogle }) {
    const navigate = useNavigate();
    const movieClick = (id) => {
        return navigate(`/${toogle}/${id}`)
    }
    return (
        <section id='recomendation' className="flex flex-col">
            <div className="flex flex-row justify-between items-center w-full mb-4">
                <h3 className="text-2xl font-palanquin font-semibold max-sm:text-lg">Recomentions</h3>
            </div>
            <div className="scroll-container flex gap-5">
                {
                    recomendation.map((movie) => (
                        <MovieCard key={movie.original_title} {...movie} handleClick={movieClick} />
                    ))
                }
            </div>
        </section>
    )
}

export default Recomendation