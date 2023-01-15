import { useParams, useLocation } from 'react-router-dom';
import { fetchFilm } from 'components/FetchApi';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FilmBox, FilmInfo } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [film, setFilm] = useState([]);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchFilm(movieId)
      .then(({ data }) => setFilm(data))
      .catch(error => error);
  }, [movieId]);

  const { title, genres, poster_path, overview, vote_average } = film;
  const voteMath = Math.round(vote_average) * 10;

  const genresListFunc = () => {
    if (genres !== undefined) {
      const genresList = genres.map(genre => genre.name).join(' ');
      return genresList;
    }
  };

  return (
    <div>
      <Link to={backLinkHref}>Go Back</Link>
      <FilmBox>
        <img
          src={
            poster_path !== undefined
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
          }
          alt={title}
          width="200"
        />
        <FilmInfo>
          <h3>{title}</h3>
          <p>User Score: {voteMath} %</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresListFunc()}</p>
        </FilmInfo>
      </FilmBox>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
