import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMoreData, fetchMoviesByGenres } from './discoverApi';

// First, create the thunk
export const fetchMoviesByGenresAsync = createAsyncThunk(
    'discover/fetchMoviesByGenres',
    async ({ queryGenres, toogle }) => {
        const response = await fetchMoviesByGenres({ queryGenres, toogle });
        return response
    }
)
export const fetchMoreDataAsync = createAsyncThunk(
    'discover/fetchMoreData',
    async ({ queryGenres, toogle }) => {
        const response = await fetchMoreData({ queryGenres, toogle });
        return response
    }
)



const initialState = {
    movies: [],
    status: 'idl',

}

const discoverSlice = createSlice({
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
            .addCase(fetchMoviesByGenresAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchMoviesByGenresAsync.fulfilled, (state, action) => {

                state.movies = action.payload.results;
                state.status = 'idle'; // Corrected typo to 'idle'
            })

            .addCase(fetchMoreDataAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchMoreDataAsync.fulfilled, (state, action) => {

                state.movies = [...state.movies, ...action.payload.results];
                state.status = 'idle'; // Corrected typo to 'idle'
            });
    }
})

export const { setTendingToogle, setTrendingRenderCount } = discoverSlice.actions

export const selectMovies = (state) => state.discover.movies;



export default discoverSlice.reducer;