import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMoreDataByName, fetchMoviesByName } from './searchResultApi';


// First, create the thunk
export const fetchMoviesByNameAsync = createAsyncThunk(
    'search/fetchMoviesByName',
    async (query) => {
        const response = await fetchMoviesByName(query);
        return response
    }
)

export const fetchMoreDataByNameAsync = createAsyncThunk(
    'search/fetchMoreDataByName',
    async (query) => {
        const response = await fetchMoreDataByName(query);
        return response
    }
)



const initialState = {
    movies: [],
    status: 'idl',

}

const searResultSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoviesByNameAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchMoviesByNameAsync.fulfilled, (state, action) => {

                state.movies = action.payload.results;
                state.status = 'idle'; // Corrected typo to 'idle'
            })

            .addCase(fetchMoreDataByNameAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchMoreDataByNameAsync.fulfilled, (state, action) => {
                state.movies = [...state.movies, ...action.payload.results];
                state.status = 'idle'; // Corrected typo to 'idle'
            })
    }
})

export const { } = searResultSlice.actions

export const selectMovies = (state) => state.searchResult.movies;
export const selectSearchResultStatus = (state) => state.searchResult.status;



export default searResultSlice.reducer;