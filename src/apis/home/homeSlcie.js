import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPopularMovies, fetchTopRatedMovies, fetchTrendingMovies } from './homeApi'

// First, create the thunk
export const fetchTrendingMoviesAsync = createAsyncThunk(
    'home/fetchTrendingMovies',
    async (toogle) => {
        const response = await fetchTrendingMovies(toogle);
        return response
    }
)

export const fetchPopularMoviesAsync = createAsyncThunk(
    'home/fetchPopularMovies',
    async (toogle) => {
        const response = await fetchPopularMovies(toogle);
        return response;
    }
)

export const fetchTopRatedMoviesAsync = createAsyncThunk(
    'home/fetchTopRatedMovies',
    async (toogle) => {
        const response = await fetchTopRatedMovies(toogle);
        return response;
    }
)

const initialState = {
    trendingMovies: [],
    tendingToogle: "Day",
    trendingRenderCount: 0,

    status: 'idl',

    popularMovies: [],
    popularToogle: "Movie",
    popularRenderCount: 0,

    topRatedMovies: [],
    topRatedToogle: "Movie",
    topRatedRenderCount: 0,

}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setTendingToogle(state, action) {
            state.tendingToogle = action.payload
        },
        setTrendingRenderCount(state, action) {
            state.trendingRenderCount = action.payload;
        },

        setPopularToogle(state, action) {
            state.popularToogle = action.payload
        },
        setPopularRenderCount(state, action) {
            state.popularRenderCount = action.payload;
        },

        setTopRatedToogle(state, action) {
            state.topRatedToogle = action.payload
        },
        setTopRatedRenderCount(state, action) {
            state.topRatedRenderCount = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingMoviesAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchTrendingMoviesAsync.fulfilled, (state, action) => {
                state.trendingMovies = action.payload.results;
                state.status = 'idle'; // Corrected typo to 'idle'
            })


            .addCase(fetchPopularMoviesAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchPopularMoviesAsync.fulfilled, (state, action) => {
                state.popularMovies = action.payload.results;
                state.status = 'idle'; // Corrected typo to 'idle'
            })

            .addCase(fetchTopRatedMoviesAsync.pending, (state, action) => {
                state.status = 'loading'; // Corrected typo to 'loading'
            })
            .addCase(fetchTopRatedMoviesAsync.fulfilled, (state, action) => {
                state.topRatedMovies = action.payload.results;
                state.status = 'idle'; // Corrected typo to 'idle'
            });
    }
}
)

export const { setTendingToogle, setTrendingRenderCount, setPopularToogle, setPopularRenderCount, setTopRatedToogle, setTopRatedRenderCount } = homeSlice.actions

export const selectTrendingMovies = (state) => state.home.trendingMovies;
export const selectTendingToogle = (state) => state.home.tendingToogle;
export const selectTrendingRenderCount = (state) => state.home.trendingRenderCount;

export const selectPopularMovies = (state) => state.home.popularMovies;
export const selectPopularToogle = (state) => state.home.popularToogle;
export const selectPopularRenderCount = (state) => state.home.popularRenderCount;

export const selectTopRatedMovies = (state) => state.home.topRatedMovies;
export const selectTopRatedToogle = (state) => state.home.topRatedToogle;
export const selectTopRatedRederCount = (state) => state.home.topRatedRenderCount;

export default homeSlice.reducer;