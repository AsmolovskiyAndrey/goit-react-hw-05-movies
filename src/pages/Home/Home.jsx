import { useState, useEffect } from 'react';
import { fetchApi } from 'components/FetchApi';
import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  const [filmsTrend, setfilmsTrend] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchApi()
      .then(({ data }) => setfilmsTrend(data.results))
      .catch(error => error);
  }, []);

  return (
    <main>
      <h1>Trending Today</h1>
      {filmsTrend.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </main>
  );
};
