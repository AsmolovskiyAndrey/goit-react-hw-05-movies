import { useParams } from 'react-router-dom';
import { fetchFilm } from 'components/FetchApi';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetchFilm(movieId)
      .then(({ data }) => setFilm(data))
      .catch(error => error);
  }, [movieId]);

  const { title, genres, poster_path, overview, vote_average } = film;

  console.log(title, overview, vote_average);
  console.log(film);

  const genresListFunc = () => {
    if (genres !== undefined) {
      const genresList = genres.map(genre => genre.name).join(' ');
      return genresList;
    }
  };

  console.log(genresListFunc());

  return (
    <div>
      <img
        src={
          poster_path !== undefined
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
        }
        alt={title}
        width="200"
      />
    </div>
  );
};
