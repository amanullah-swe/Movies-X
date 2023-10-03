import React from 'react'
import { movies } from '../../../app/constaint.js'
import { imgBaseURL } from '../../../app/constaint.js'
import Button from '../../../components/Button.jsx'
function Hero() {
    const movie = movies[Math.floor(Math.random() * 20)]
    return (
        <section id='hero' className='relative display flex items-center justify-center'>
            <div>
                <div className=''>
                    <img
                        src={imgBaseURL + movie.backdrop_path}
                        alt=""
                        className='' />
                </div>
                <div className=' w-full px-8 md:px-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col z-10 '>
                    <h2 className='font-bold text-5xl font-palanquin max-sm:text-2xl'>Welcome.</h2>
                    <p className='info-text max-sm:text-[12px] font-semibold mt-6 font-montserrat'>million of movies and tv show available </p>
                    <div className='w-full mt-6 border rounded-full bg-gray-200  flex flex-1'>
                        <input className='input w-full m-1 md:m-3 outline-none bg-inherit px-2 text-black font-semibold font-montserrat' type="text" name="" id="" />
                        <div className='max-w-lg'>
                            <Button label={"Search"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' vignette-left vignette-bottom w-full h-full absolute top-0 left-0 z-5'></div>
            <div className=' vignette-right vignette-bottom w-full h-full absolute top-0 left-0 z-5'></div>
            <div className=' vignette-bottom w-full h-full absolute top-0 left-0 z-5'></div>

        </section>
    )
}

export default Hero

