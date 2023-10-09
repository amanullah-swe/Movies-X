import React, { useCallback, useState } from 'react'
import { fullSizeImgUrl, movies } from '../../../app/constaint.js'
import { imgBaseURL } from '../../../app/constaint.js'
import Button from '../../../components/Button.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyLoadImageComponent from '../../../components/LazyLoadImageComponent.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTrendingMovies } from '../../../apis/home/homeSlcie.js';

function Hero() {
    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();

    const HandleOnchange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const value = e.target.value
        setInputValue(value);
    }

    const handleClick = () => {
        navigate(`/search-result?searchValue=${inputValue}`);
        setInputValue('');
    }

    const movie = useSelector(selectTrendingMovies)[Math.floor(Math.random() * 20)];

    return (
        <section id='hero' className='relative   flex items-center justify-center'>
            <div>
                <div className=' md:min-h-[600px] min-h-[300px]'>
                    <LazyLoadImageComponent url={fullSizeImgUrl + movie?.backdrop_path} alt={''} />
                </div>
                <div className=' w-full px-8 md:px-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col z-10 '>
                    <h2 className='font-bold text-5xl font-palanquin max-sm:text-2xl'>Welcome.</h2>
                    <p className='info-text max-sm:text-[12px] font-semibold mt-6 font-montserrat'>million of movies and tv show available </p>
                    <div className='w-full mt-6 border rounded-full bg-gray-200  flex flex-1'>
                        <input
                            className='input w-full m-1 md:m-3 outline-none bg-inherit px-2 text-black font-semibold font-montserrat'
                            type="text"
                            name="search"
                            id="search"
                            onChange={HandleOnchange}
                            value={inputValue} />
                        <div className='max-w-lg'>
                            <Button label={"Search"} handleClick={handleClick} />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' vignette-left vignette-bottom w-full h-full absolute top-0 left-0 '></div>
            <div className=' vignette-right vignette-bottom w-full h-full absolute top-0 left-0 '></div>
            <div className=' vignette-bottom w-full h-full absolute top-0 left-0 '></div>

        </section>
    )
}

export default Hero

