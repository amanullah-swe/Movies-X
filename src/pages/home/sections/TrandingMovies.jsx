import { useState } from "react"
import { movies } from "../../../app/constaint"
import MovieCard from "../../../components/MovieCard"
import ToogleButton from "../../../components/ToogleButton"
function TrandingMovies() {
    const leftText = "Day"
    const rightText = "Week"
    const [toogle, setToogle] = useState(leftText);

    const handleClick = () => {
        if (toogle === leftText) setToogle(rightText);
        else setToogle(leftText);
    }
    return (
        <section id='tranding-movies' className="flex flex-col">
            <div className="flex flex-row justify-between items-center w-full">
                <h3 className="text-4xl font-palanquin font-semibold max-sm:text-lg">Trending</h3>
                <div className=" self-end mb-2 sm:mb-6">
                    <ToogleButton leftText={leftText} rightText={rightText} on={toogle} handleClick={handleClick} />
                </div>

            </div>

            <div className=" scroll-container flex gap-5">
                {
                    movies.map((movies) => (
                        <MovieCard key={movies.original_title} {...movies} />
                    ))
                }
            </div>
        </section>
    )
}

export default TrandingMovies