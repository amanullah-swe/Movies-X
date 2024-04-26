import React, { useState } from 'react'
import { movies, relatedVideos } from '../../../app/constaint';
import OfficialVideoCard from '../../../components/OfficialVideoCard';


function OfficialVidoes({ movieReltedVideos }) {
    const [open, setOpen] = useState('');
    const handleClick = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(id);
    };
    return (
        <section id='officail-video' className="flex flex-col">
            <div className="flex flex-row justify-between items-center w-full mb-4">
                <h3 className="text-2xl font-palanquin font-semibold max-sm:text-lg">Official Vidoes</h3>
            </div>

            <div className="scroll-container flex gap-5">
                {movieReltedVideos?.map((video) => (

                    <OfficialVideoCard key={video.id} id={video.id} videoKey={video.key} handleClick={handleClick} open={open} playIcon />
                ))}
            </div>
        </section >
    )
}

export default OfficialVidoes;