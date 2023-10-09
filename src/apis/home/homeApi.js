import { moviesAxiosIntance } from "../../utils/axios";

export const fetchTrendingMovies = (toogle) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/trending/all/${toogle}?language=en-US`);
            return resolve(response.data);
        } catch (error) {
            return reject(error);
        }
    })
}
export const fetchPopularMovies = (toogle) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/discover/${toogle}?language=en-US&page=1&sort_by=popularity.desc`);
            return resolve(response.data);
        } catch (error) {
            return reject(error.error);
        }
    })
}

export const fetchTopRatedMovies = (toogle) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/${toogle}/top_rated`);
            return resolve(response.data);
        } catch (error) {
            return reject(error.error);
        }
    })
}