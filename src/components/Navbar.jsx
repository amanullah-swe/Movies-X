import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();
    const handleLogoClick = (e) => {
        navigate('/');
    }
    const discoverMovies = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate('/discover/movie');
    }
    const discoverTvShows = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate('/discover/tv');
    }
    return (

        <div className='w-full flex justify-between items-center mt-2'>
            <h1 onClick={handleLogoClick} className='text-4xl w-[150px] font-bold font-palanquin max-sm:text-lg cursor-pointer text-orange-600'>Movies-X</h1>
            <div className='flex gap-4'>
                <button className='border py-1 px-2 rounded-md max-sm:text-[12px]' onClick={discoverMovies}>Movies</button>
                <button className='border py-1 px-2 rounded-md max-sm:text-[12px]' onClick={discoverTvShows}>Tv Shows</button>
            </div>
        </div>
    )
}

export default Navbar;