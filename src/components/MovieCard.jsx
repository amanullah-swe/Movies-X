import React from 'react'
import { imgBaseURL } from '../app/constaint'
import { shortenString, intToFloat } from '../helper'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LazyLoadImageComponent from './LazyLoadImageComponent';

function MovieCard({ media_type, id, poster_path, original_title, release_date, vote_average, handleClick }) {
    return (
        <div className=' min-w-min py-2.5 px-2.5' onClick={() => { handleClick(id, media_type) }}>
            <div className=' w-28 sm:w-40 aspect-[2/3] relative'>
                <div className=' object-contain rounded-lg transition duration-200 ease-in hover:scale-110'>
                    <LazyLoadImageComponent
                        url={imgBaseURL + poster_path}
                        alt=""
                        className=' '

                    />
                </div>

                <div className='w-10 absolute bottom-[-10px] left-2 bg-gray-200 opacity-80 rounded-full p-0.5 font-bold'>
                    <CircularProgressbar
                        value={vote_average / 10 * 100}
                        text={`${intToFloat(vote_average)}`}
                        styles={buildStyles({
                            textSize: '35px',
                            pathColor: `rgba(249, 115, 22, ${vote_average / 10 * 100})`,
                            textColor: 'black',
                            trailColor: 'white',
                            backgroundColor: 'black',
                            strokeLinecap: 'round',
                        })}
                    />
                </div>
            </div>
            <div>
                <h4 className='mt-4 font-palanquin font-bold font-xl'>{shortenString(original_title)}</h4>
                <p className='mt-1 opacity-70 text-gray-200 font-montserrat text-xs'>{release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard

// {
//     "adult": false,
//     "backdrop_path": "/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
//     "genre_ids": [
//         28,
//         878,
//         12
//     ],
//     "id": 565770,
//     "original_language": "en",
//     "original_title": "Blue Beetle",
//     "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
//     "popularity": 2706.353,
//     "poster_path": "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
//     "release_date": "2023-08-16",
//     "title": "Blue Beetle",
//     "video": false,
//     "vote_average": 7.1,
//     "vote_count": 1096
// }
