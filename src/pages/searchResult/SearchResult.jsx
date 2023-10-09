import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import MovieGrid from "../../components/MovieGrid";
import { movies } from "../../app/constaint";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreDataByNameAsync, fetchMoviesByNameAsync, selectMovies, selectSearchResultStatus } from "../../apis/searchResult/searchResultSlice";
function SearchResult() {
    const location = useLocation();
    const searchValue = new URLSearchParams(location.search).get("searchValue");

    const movies = useSelector(selectMovies);
    const status = useSelector(selectSearchResultStatus);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(searchValue);
    const [page, setPage] = useState(1);



    useEffect(() => {
        const newInputValue = inputValue + `&page=${page}`;
        dispatch(fetchMoviesByNameAsync(newInputValue));
        setPage(page + 1);
    }, [])

    const navigate = useNavigate();

    const HandleOnchange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const value = e.target.value
        setInputValue(value);
    }

    const handleClick = () => {
        const newInputValue = inputValue + `&page=${page}`;
        dispatch(fetchMoviesByNameAsync(newInputValue));
        setPage(page + 1);
    }
    const fetchMoreData = () => {

        const newInputValue = inputValue + `&page=${page}`;
        dispatch(fetchMoreDataByNameAsync(newInputValue));
        setPage(page + 1);

    }
    return (
        <main className="text-white">
            <section id="nav-bar" className=" z-50 padding-x padding-b">  <Navbar></Navbar></section>
            <section id='hero' className='flex items-center justify-center w-full mb-8 '>
                <div className=' w-full px-8 md:px-48  flex items-center justify-center flex-col z-10 '>
                    <div className='w-full mt-6 border rounded-full bg-gray-200  flex flex-1'>
                        <input
                            className='input w-full m-1 md:m-3 outline-none bg-inherit px-2 text-black font-semibold font-montserrat'
                            type="text"
                            name="search"
                            id="search"
                            onChange={HandleOnchange}
                            value={inputValue} />
                        <div className='max-w-lg'>
                            <Button
                                label={"Search"} handleClick={handleClick} />
                        </div>
                    </div>
                </div>

            </section>
            <section id="search-result">
                {movies.length === 0 && status === 'idle' &&
                    <p>
                        not found
                    </p>

                }
                <MovieGrid movies={movies} fetchMoreData={fetchMoreData}>
                </MovieGrid>
            </section>
        </main>

    )
}
export default SearchResult;