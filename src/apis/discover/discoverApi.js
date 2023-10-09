import { moviesAxiosIntance } from "../../utils/axios";

export const fetchMoviesByGenres = ({ queryGenres, toogle }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/discover/${toogle}?language=en-US&${queryGenres}`);
            return resolve(response.data);
        } catch (error) {
            return reject(error);
        }
    })
}

export const fetchMoreData = ({ queryGenres, toogle }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/discover/${toogle}?language=en-US&${queryGenres}`);
            return resolve(response.data);
        } catch (error) {
            return reject(error);
        }
    })
}
