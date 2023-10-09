import { useState } from "react"
import { movies } from "../../../app/constaint"
import MovieCard from "../../../components/MovieCard"
import ToogleButton from "../../../components/ToogleButton"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingMoviesAsync, selectTendingToogle, selectTrendingMovies, selectTrendingRenderCount, setTendingToogle, setTrendingRenderCount } from "../../../apis/home/homeSlcie";
import { useEffect } from "react";
import { useRef } from "react";
function TrandingMovies() {
    const leftText = "Day"
    const rightText = "Week"
    // const [toogle, setToogle] = useState("Day");
    const navigate = useNavigate();

    const trendingMovies = useSelector(selectTrendingMovies);
    const render = useSelector(selectTrendingRenderCount);
    const dispatch = useDispatch();

    const toogle = useSelector(selectTendingToogle);

    useEffect(() => {
        const newToogle = toogle.toLowerCase();
        if (render === 1) {
            return;
        }
        dispatch(fetchTrendingMoviesAsync(newToogle));
        dispatch(setTrendingRenderCount(1));
    }, [toogle])




    const toogleClick = () => {
        dispatch(setTrendingRenderCount(0));
        dispatch(setTendingToogle(toogle === "Day" ? "Week" : "Day"));


    }
    const movieClick = (id, media_type) => {
        const newToogle = toogle.toLowerCase();
        return navigate(`/${media_type}/${id}`)

    }
    return (
        <section id='tranding-movies' className="flex flex-col sm:h-96 h-80">
            <div className="flex flex-row justify-between items-center w-full">
                <h3 className="text-4xl font-palanquin font-semibold max-sm:text-lg">Trending</h3>
                <div className=" self-end mb-2 sm:mb-6">
                    <ToogleButton leftText={leftText} rightText={rightText} on={toogle} handleClick={toogleClick} />
                </div>

            </div>

            <div className=" scroll-container flex gap-5">
                {
                    trendingMovies?.map((movie, index) => (
                        <MovieCard key={index} {...movie} handleClick={movieClick} />
                    ))
                }
            </div>
        </section>
    )
}

export default TrandingMovies