import { useState } from "react"
import { cast, imgBaseURL, } from "../../../app/constaint"
import MovieCard from "../../../components/MovieCard"
import ToogleButton from "../../../components/ToogleButton"
import { useNavigate } from "react-router-dom";
import { profileImage } from "../../../assets";




function TopCast({ cast }) {
    return (
        <section id='top-cast' className="flex flex-col ">
            <div className="flex flex-row justify-between items-center w-full mb-6">
                <h3 className="text-2xl font-palanquin font-semibold max-sm:text-lg">Top Cast</h3>
            </div>

            <div className="scroll-container flex gap-2  ">
                {
                    cast?.map((actor) => (
                        <div key={actor.name} className="min-w-[170px] flex justify-center items-center flex-col h-fit ">
                            <div className="w-20 h-20 flex justify-center items-center rounded-full overflow-hidden mb-2">
                                <img
                                    src={actor.profile_path ? imgBaseURL + actor.profile_path : profileImage}
                                    alt="img"
                                    className="w-full object-cover "
                                />
                            </div>
                            <h4 className="text-lg font-palanquin leading-8 font-semibold">{actor.name}</h4>
                            <p className="text-base font-light italic text-gray-300 leading-7 -mt-2">{actor.character}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TopCast;