import React, { useState } from 'react'
import { genres } from '../../../app/constaint'

function Filter({ moviesGenres, setMoviesGenres, moviesGenresStore, setMoviesGenresStore }) {

    const handleFillter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const genre = e.target.value;
        const index = moviesGenresStore.findIndex((element) => element.name === genre);


        setMoviesGenres([...moviesGenres, moviesGenresStore[index]]);
        setMoviesGenresStore((prev) => prev.filter((genre) => genre !== moviesGenresStore[index]))
    }

    const removeMovieGener = (e, value) => {
        e.preventDefault();
        e.stopPropagation();
        setMoviesGenres((prev) => prev.filter((genre) => genre !== value))
        setMoviesGenresStore([...moviesGenresStore, value]);
    }
    return (
        <section className='flex gap-5'>
            <div className='scroll-container border rounded-xl min-w-[200px] max-w-md h-12 max-sm:h-8 flex flex-wrap flex-1 px-2 py-1'>
                <div
                    className=' flex items-center justify-start h-full flex-wrap gap-2  opacity-90'>{
                        moviesGenres?.map((genre) => (
                            <p key={genre.id}
                                className='h-fit px-1 py-0.5 bg-red-500 rounded-md text-[9px] font-bold font-montserrat cursor-pointer'
                                onClick={(e) => { removeMovieGener(e, genre) }}
                            >
                                {genre?.name} x
                            </p>
                        ))}
                </div>
            </div>
            <div>
                <select
                    name=""
                    id=""
                    className='text-black w-28  h-10 max-sm:h-8 bg-gray-300 rounded-2xl font-montserrat font-semibold px-2 text-lg max-sm:font-semibold max-sm:text-[12px]'
                    onChange={(e) => handleFillter(e)}
                >
                    <option className='bg-gray-300 text-black font-montserrat font-bold max-sm:font-semibold max-sm:text-[10px] '>Genres</option>
                    {

                        moviesGenresStore?.map((genre, index) => (
                            <option
                                key={index}
                                id={index}
                                className='bg-gray-300 text-black font-montserrat font-semibold'
                            >{genre.name}</option>
                        ))
                    }
                </select>
            </div>
        </section>

    )
}

export default Filter