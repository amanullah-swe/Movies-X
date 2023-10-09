import React from 'react'
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from './MovieCard'
function MovieGrid({ movies, fetchMoreData, toogle }) {
    const navigate = useNavigate();
    const movieClick = (id, movie_type) => {
        return navigate(`/${toogle || movie_type}/${id}`)
    }
    return (
        <section>
            <div className='min-h-screen grid grid-flow-row xl:grid-cols-6 lg:grid-cols-5 sm:gap-x-10  gap-y-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-3'>
                {movies?.map((movie) => (<MovieCard key={movie.id} {...movie} handleClick={movieClick} />))}
            </div>
            <InfiniteScroll
                dataLength={movies.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4 className=' text-center p-6'>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            ></InfiniteScroll>
        </section>
    )
}

export default MovieGrid;