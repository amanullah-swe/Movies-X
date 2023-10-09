import { configureStore } from "@reduxjs/toolkit";
import homeReducer from '../apis/home/homeSlcie.js'
import movieReducer from '../apis/movie/movieSlice.js'
import discoverReducer from '../apis/discover/discoverSlice.js'
import searResulReducer from '../apis/searchResult/searchResultSlice.js'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        movie: movieReducer,
        discover: discoverReducer,
        searchResult: searResulReducer
    },
});