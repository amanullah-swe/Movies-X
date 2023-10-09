import { moviesAxiosIntance } from "../../utils/axios";

export const fetchMoviesByName = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await moviesAxiosIntance.get(`https://api.themoviedb.org/3/search/multi?query=${query}`);
            return resolve(response.data);
        } catch (error) {
            return reject(error);
        }
    })
}
