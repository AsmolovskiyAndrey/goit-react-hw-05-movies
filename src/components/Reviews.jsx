import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { reviewsFilm } from './FetchApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsFilm(movieId)
      .then(({ data }) => setReviews(data.results))
      .catch(error => error);
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have anu reviews for this movie</p>;
  } else {
    return (
      <ul style={{ listStyle: 'none' }}>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};
