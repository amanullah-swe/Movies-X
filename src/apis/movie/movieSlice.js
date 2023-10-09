import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMovieCredits, fetchMovieDetail, fetchMovieRelatedVideos, fetchRecomendationMovies, fetchSimilarMovies, } from './movieApi';

// First, create the thunk
export const fetchMovieDetailAsync = createAsyncThunk(
    'movie/fetchMovieDetail',
    async ({ toogle, movieId }) => {
        const response = await fetchMovieDetail({ toogle, movieId });
        return response;
    }
)
export const fetchMovieCreditsAsync = createAsyncThunk(
    'movie/fetchMovieCredits',
    async ({ toogle, movieId }) => {
        const response = await fetchMovieCredits({ toogle, movieId });
        return response;
    }
)



export const fetchMovieRelatedVideosAsync = createAsyncThunk(
    'movie/fetchMovieRelatedVideos',
    async ({ toogle, movieId }) => {
        const response = await fetchMovieRelatedVideos({ toogle, movieId });
        return response;
    }
)

export const fetchSimilarMoviesAsync = createAsyncThunk(
    'movie/fetchSimilarMovies',
    async ({ toogle, movieId, genres }) => {
        const response = await fetchSimilarMovies({ toogle, movieId, genres });
        return response;
    }
)

export const fetchRecomendationMoviesAsync = createAsyncThunk(
    'movie/fetchRecomendationMovies',
    async ({ toogle, movieId, genres }) => {
        const response = await fetchRecomendationMovies({ toogle, movieId, genres });
        return response;
    }
)

const initialState = {
    movieDetail: [],
    credits: [],
    movieRelatedVideos: [],
    similarMovies: [],
    recomendationMovies: [],

    status: 'idl',

}

const movie = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setTendingToogle(state, action) {
            state.tendingToogle = action.payload
        },
        setTrendingRenderCount(state, action) {
            state.trendingRenderCount = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieDetailAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchMovieDetailAsync.fulfilled, (state, action) => {
                state.movieDetail = action.payload;
                state.status = 'idle'; // Corrected typo to 'idle'
            })

            .addCase(fetchMovieCreditsAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchMovieCreditsAsync.fulfilled, (state, action) => {
                state.credits = action.payload.cast;
                state.status = 'idle'; // Corrected typo to 'idle'
            })

            .addCase(fetchMovieRelatedVideosAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchMovieRelatedVideosAsync.fulfilled, (state, action) => {
                state.movieRelatedVideos = action.payload.results;
                state.status = 'idle'; // Corrected typo to 'idle'
            })

            .addCase(fetchSimilarMoviesAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchSimilarMoviesAsync.fulfilled, (state, action) => {
                state.similarMovies = action.payload.results;
                state.status = 'idle'; // Corrected typo to 'idle'
            })

            .addCase(fetchRecomendationMoviesAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchRecomendationMoviesAsync.fulfilled, (state, action) => {
                state.recomendationMovies = action.payload.results;
                state.status = 'idle'; // Corrected typo to 'idle'
            });
    }
})

export const { setTendingToogle, setTrendingRenderCount, setPopularToogle, setPopularRenderCount, setTopRatedToogle, setTopRatedRenderCount } = movie.actions

export const selectMovieDetial = (state) => state.movie.movieDetail;
export const selectMovieCredits = (state) => state.movie.credits;
export const selectMovieRelatedVideos = (state) => state.movie.movieRelatedVideos;
export const selectSimilarMovies = (state) => state.movie.similarMovies;
export const selectRecomendationMovies = (state) => state.movie.recomendationMovies;

export default movie.reducer;