import axios from 'axios';

const API_KEY = 'ab5844295c3d6c611863d202dd8ef218';

export const fetchApi = async () => {
  const apiData = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return apiData;
};

export const fetchFilm = async movie_id => {
  const apiData = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return apiData;
};
