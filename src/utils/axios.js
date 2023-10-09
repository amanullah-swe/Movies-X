import axios from 'axios';

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDA1NDc2ZTcwN2U0ZGFmOWY5MjljMDVkYWRlOTE1ZSIsInN1YiI6IjY0ODk0ZmQyYmYzMWYyNTA1ODgzYTQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.132vqf9VIp17mYwVgRQf1y0R4CkmxIdB77f8ILyp_YQ';

export const moviesAxiosIntance = axios.create({
    headers: {
        Authorization: token,
    },
});
