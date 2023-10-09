import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './sections/Hero'
import TopCast from './sections/TopCast'
import SimilarMovies from './sections/SimilarMovies'
import Recomendation from './sections/Recomendation'
import OfficialVidoes from './sections/OfficialVidoes'
import { imgBaseURL, } from '../../app/constaint'
import LazyLoadImageComponent from '../../components/LazyLoadImageComponent'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieCreditsAsync, fetchMovieDetailAsync, fetchMovieRelatedVideosAsync, fetchRecomendationMoviesAsync, fetchSimilarMoviesAsync, selectMovieCredits, selectMovieDetial, selectMovieRelatedVideos, selectRecomendationMovies, selectSimilarMovies } from '../../apis/movie/movieSlice'
import { useEffect } from 'react'
import { fetchRecomendationMovies } from '../../apis/movie/movieApi'

function MoviePage() {

    const { toogle, movieId } = useParams();
    const dispatch = useDispatch();
    const movieById = useSelector(selectMovieDetial);
    const cast = useSelector(selectMovieCredits)
    const movieReltedVideos = useSelector(selectMovieRelatedVideos);
    const similarMovies = useSelector(selectSimilarMovies);
    const recomendation = useSelector(selectRecomendationMovies);

    useEffect(() => {
        let genres = 'genres='
        if (movieById.genres) {
            for (const genre of movieById?.genres) {
                genres = genres + (genre.id.toString() + ' , ');
            }
        }

        dispatch(fetchMovieDetailAsync({ toogle, movieId }));
        dispatch(fetchMovieCreditsAsync({ toogle, movieId }))
        dispatch(fetchMovieRelatedVideosAsync({ toogle, movieId }));
        dispatch(fetchSimilarMoviesAsync({ toogle, movieId, genres }))
        dispatch(fetchRecomendationMoviesAsync({ toogle, movieId }));
    }, [dispatch, movieId])

    return (
        <main className='max-container min-h-screen  bg-black text-white relative'>

            <section id='hero' className='min-h-min  flex items-center justify-center absolute top-0 left-0 opacity-30 '>
                <div>
                    <div className='w-full h-full'>
                        <LazyLoadImageComponent
                            url={imgBaseURL + movieById.backdrop_path}
                            alt=""
                            className='w-full h-full' />
                    </div>
                </div>
                <div className=' vignette-left vignette-bottom w-full h-full absolute top-0 left-0'></div>
                <div className=' vignette-right vignette-bottom w-full h-full absolute top-0 left-0 '></div>
                <div className=' vignette-bottom w-full h-full absolute top-0 left-0 '></div>
            </section>

            <section className="w-full padding-x absolute top-0 left-0 z-50"> <Navbar /></section>
            <section className='padding-x padding-t pb-4 relative top-0 left-0 z-10'  ><Hero movieById={movieById} /></section>
            <section className='padding-x relative top-0 left-0 z-10'><TopCast cast={cast} /></section>
            <section className='padding-x'><OfficialVidoes movieReltedVideos={movieReltedVideos} /></section>
            <section className='padding-x mt-8'><SimilarMovies similarMovies={similarMovies} toogle={toogle} /></section>
            <section className='padding-x mt-8'><Recomendation recomendation={recomendation} toogle={toogle} /></section>
        </main >
    )
}

export default MoviePage


/*
"adult": false,
"backdrop_path": "/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg",
"belongs_to_collection": null,
"budget": 60000000,
"genres": [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 12,
        "name": "Adventure"
    }
],
"homepage": "https://www.granturismo.movie",
"id": 980489,
"imdb_id": "tt4495098",
"original_language": "en",
"original_title": "Gran Turismo",
"overview": "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
"popularity": 3389.624,
"poster_path": "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
"production_companies": [
    {
        "id": 125281,
        "logo_path": "/3hV8pyxzAJgEjiSYVv1WZ0ZYayp.png",
        "name": "PlayStation Productions",
        "origin_country": "US"
    },
    {
        "id": 84792,
        "logo_path": "/7Rfr3Zu6QnHpXW2VdSEzUminAQd.png",
        "name": "2.0 Entertainment",
        "origin_country": "US"
    },
    {
        "id": 5,
        "logo_path": "/wrweLpBqRYcAM7kCSaHDJRxKGOP.png",
        "name": "Columbia Pictures",
        "origin_country": "US"
    }
],
"production_countries": [
    {
        "iso_3166_1": "US",
        "name": "United States of America"
    }
],
"release_date": "2023-08-09",
"revenue": 114800000,
"runtime": 135,
"spoken_languages": [
    {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
    },
    {
        "english_name": "German",
        "iso_639_1": "de",
        "name": "Deutsch"
    },
    {
        "english_name": "Japanese",
        "iso_639_1": "ja",
        "name": "日本語"
    }
],
"status": "Released",
"tagline": "From gamer to racer.",
"title": "Gran Turismo",
"video": false,
"vote_average": 8.046,
"vote_count": 766 */