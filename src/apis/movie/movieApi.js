import { moviesAxiosIntance } from "../../utils/axios";


export const fetchMovieDetail = ({ toogle, movieId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/${toogle}/${movieId}`);
            return resolve(response.data);
        } catch (error) {
            return reject(error);
        }
    })
}
export const fetchMovieCredits = ({ toogle, movieId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/${toogle}/${movieId}/credits`);
            return resolve(response.data);
        } catch (error) {
            return reject(error.error);
        }
    })
}

export const fetchMovieRelatedVideos = ({ toogle, movieId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/${toogle}/${movieId}/videos`);
            return resolve(response.data);
        } catch (error) {
            return reject(error.error);
        }
    })
}


export const fetchSimilarMovies = ({ toogle, movieId, genres }) => {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/discover/${toogle}?with_genres=${genres}`);
            return resolve(response.data);
        } catch (error) {
            return reject(error.error);
        }
    })
}

export const fetchRecomendationMovies = ({ toogle, movieId, }) => {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/discover/${toogle}?&sort_by=vote_average.desc`);
            return resolve(response.data);
        } catch (error) {
            return reject(error.error);
        }
    })
}