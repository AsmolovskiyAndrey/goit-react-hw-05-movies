import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { castFilm } from './FetchApi';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    castFilm(movieId)
      .then(({ data }) => setMovieCast(data.cast))
      .catch(error => error);
  }, [movieId]);

  if (movieCast.length === 0) {
    return <p>Unfortunately, we did not find the actors for this film</p>;
  } else {
    return (
      <ul style={{ listStyle: 'none' }}>
        {movieCast.map(
          ({ profile_path, original_name, character, cast_id }) => {
            return (
              <li key={cast_id}>
                <img
                  src={
                    profile_path !== null
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAMFBMVEXy8vK4uLjV1dW8vLzOzs7R0dG/v7/r6+vDw8Pn5+fg4ODc3NzHx8fu7u7k5OTZ2dnp5bl3AAAEQUlEQVR4nO2dB5bqMAxFCel9/7v9kGHKB1LRuzIc3xXknVhWsSyfTpFIJBKJRCKRSCQSiUQi7045TIznK+3g/TnbqYfLB3cXiuQpWen9hVsYuvT557+XlKFbV3ElHb2/dJE+2yZj+ineH7tAu2FR/VI13t87Q1vtkXGlyGvvj75nyDfaRtha9pjGEy1j7y3gRr97Td2Rtt4SJl7WcSH3FnGy0RHEZpxb6Lhsxt6GMtjo8FbSn610+CppZsLbN1NSHnSCszjtXeOuyGoTHv6kNtl17+nwgKVWyLhCLy+zXfcBeHnphHSfIiRh03mhkDMqpNEJKUgdNiHvDKS5K3UkBReqvJTaroNZSavVkSRQeVjm1X9IkS1Yaug3EK9olNsuAywu/cK6AvwS62xqBvkvke9YN+T1IdMsfYFU7BWFMdYd4kBF7NP/IF5b9gWHOVKpjh7TkSRSIcJ86gGptZNCpJ5kBIVIg3nDmvUq0iiFFCI1ElSI8hweFaKsnqJCqk8RonSJrBDhGQMrROgSo5BDCItCqBBlIM8liIk2RiGj30TZ9ogKUdZNSSHSAx+mzPiF9qAaFKJtQgWFaI8WuHKQtopClbD1QpDDkS+09XiqGC8XAu6/4tZ5Toj4kJqzdrEQztrFQrhAXiykpHTImwYoIfKGFMja1Yeh2B+RH09Trl1+k4w6Z1evLCzXVS8tzrFr22o+JmcH0xFtZgU0z/2iTEhIHdI/QuqQNqOQQqTbFuUOr0ijRq5dS9x5RvaiSK9bYWlVoi7QcUYi7vzlXLv4+tvHdJly5Xj11UpqA9Y2mZ64taXv8oeE6K8nQTmifowNVEbRX05imrHltn6CskTikhWyARNXEZFWJ+ImIlKjA3Qg1s7czgdCeeYCtT6U1x+OTOjrptRsJ3mUQo19KMVJCTf1oZYqIWe89LlMSgEPbX1tEuA8OT+bSrEL079jQuHh4Xk7NwTxPDul5huBO/GZ0yoQ4jPP2F4IkeAiQpzmZ9rvv04DzM2LjuhAqj+YOxK3gd/WRuI2g9246Ki80rqM8dpyHCVvu7Ycp/ubri2/lXVZW5bplesjBZbZleu7EYY+0XNlnSwPeX1SkR/s4i3npwnMumy84qxvzM4YvCfgm7ULOZuI3bG7+1tKVocl7s+QWIVb3jo+R4jVGa+3jijkHndjt9q1Kuf91zCO7xylDLYF+c6nht3vf0psFf5Nq7IVnVGn5AuD9VnaswWtsCbT96LoV1iTUQ3MmXAP41RMVK3kt8AqJuwNv9Y1OqzQGXZulTl5s+qBNDf5LeWI3qF8zsu/pVd5vd2k2QvRcUNecVvn4OuitcMmtUox7jQXZ/NeotqupQ/BvJfYpiUY816kOi/bi4f3Psq87dfhGsYMz7QE4fcO8L+WcPzeEYq8eT/DmCHNGvaqvZCUHUchJAoJjSgkNKKQ0IhCQiMKCY0oJDT+AVvbWAVA2lRPAAAAAElFTkSuQmCC'
                  }
                  alt={original_name}
                  width="100"
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          }
        )}
      </ul>
    );
  }
};
