import { useState, useEffect } from 'react';
import { fetchApi } from 'components/FetchApi';

export const Home = () => {
  const [filmsTrend, setfilmsTrend] = useState([]);

  useEffect(() => {
    fetchApi()
      .then(({ data }) => setfilmsTrend(data.results))
      .catch(error => error);
  }, []);

  return (
    <main>
      <h1>Trending Today</h1>
      {filmsTrend.map(({ title, id }) => {
        return <li key={id}>{title}</li>;
      })}
    </main>
  );
};
