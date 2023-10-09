import React from 'react'
import { imgBaseURL } from '../../../app/constaint'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import LazyLoadImageComponent from '../../../components/LazyLoadImageComponent'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieDetailAsync, selectMovieDetial } from '../../../apis/movie/movieSlice'
function Hero({ movieById }) {

    return (
        <section>
            <div className='flex gap-10 flex-row justify-center '>
                <div className='max-md:h-fit'>
                    <div className=' md:max-w-xs rounded-s-xl rounded-e-3xl shadow-2xl max-w-[180px] overflow-hidden p-0'>
                        <LazyLoadImageComponent
                            url={imgBaseURL + movieById?.poster_path}
                            alt=""
                        />
                    </div>

                </div>
                <div className=' max-w-xl sm:max-w-lg'>
                    <h1 className='font-bold font-palanquin text-4xl max-sm:text-2xl leading-normal text-orange-500'>{movieById.original_title}</h1>
                    <p className='text-base font-montserrat font-medium max-sm:text-xs text-gray-500 italic'>{movieById.tagline}</p>
                    <div className='flex  flex-wrap gap-2 mt-2 opacity-90'>{movieById?.genres?.map((genre) => (<p key={genre.id} className='px-1 py-0.5 bg-red-500 rounded-md text-[10px] font-bold font-montserrat'>{genre.name}</p>))}</div>

                    <div className='flex gap-5 my-8'>
                        <div className='bg-inherite opacity-80 rounded-full p-0.5 font-bold w-20 '>
                            <CircularProgressbar
                                value={movieById?.vote_average / 10 * 100 + 1}
                                text={`${movieById?.vote_average}`}
                                styles={buildStyles({
                                    textSize: '28px',
                                    pathColor: `rgba(249, 115, 22, ${(movieById?.vote_average / 10 * 100 + 1)})`,
                                    textColor: 'white',
                                    trailColor: 'black',
                                    backgroundColor: 'black',
                                    strokeLinecap: 'round',
                                })}
                            />
                        </div>
                        <p>play botton</p>
                    </div>
                    <div className=' max-w-xl max-md:hidden mt-2'>
                        <h2 className='font-bold font-palanquin text-2xl leading-normal'>Overview</h2>
                        <p className=' font-montserrat text-base leading-6 text-gray-300 mt-2'>{movieById?.overview}</p>
                        <div className='mt-4'>
                            <div className='flex gap-6'>
                                <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Status:</span> {movieById?.status}</p>
                                <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Release Date:</span> {movieById?.release_date}</p>
                                <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Runtime</span> {movieById?.runtime} hr</p>
                            </div>
                            <div className='border-b-[0.5px] my-2.5 border-gray-500 opacity-25'></div>
                        </div>
                        <div>
                            <div>
                                <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Director:</span> director</p>
                            </div>
                            <div className='border-b-[0.5px] my-2.5 border-gray-500 opacity-25'></div>

                        </div>
                        <div>
                            <div>
                                <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Writer:</span>writer </p>
                            </div>
                            <div className='border-b-[0.5px] my-2.5 border-gray-500 opacity-25'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' max-w-xl md:hidden mt-6'>
                <h2 className='font-bold font-palanquin text-2xl leading-normal'>Overview</h2>
                <p className=' font-montserrat text-base leading-6 text-gray-300 mt-2'>{movieById.overview}</p>
                <div className='mt-4'>
                    <div className='flex gap-6'>
                        <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Status:</span> {movieById?.status}</p>
                        <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Release Date:</span> {movieById?.release_date}</p>
                        <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Runtime</span> {movieById?.runtime} hr</p>
                    </div>
                    <div className='border-b-[0.5px] my-2.5 border-gray-500 opacity-25'></div>
                </div>
                <div>
                    <div>
                        <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Director:</span> director</p>
                    </div>
                    <div className='border-b-[0.5px] my-2.5 border-gray-500 opacity-25'></div>

                </div>
                <div>
                    <div>
                        <p className=' font-montserrat text-base text-gray-300'><span className=' font-bold'>Writer:</span>writer </p>
                    </div>
                    <div className='border-b-[0.5px] my-2.5 border-gray-500 opacity-25'></div>
                </div>
            </div>
        </section>
    )
}

export default Hero