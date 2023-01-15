import { fetchSearchedFilm } from 'components/FetchApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [filmsName, setFilmsName] = useState([]);
  const [valueForm, setValueForm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const search = searchParams.get('query') ?? '';

    if (search !== '' || search === undefined) {
      fetchSearchedFilm(search)
        .then(({ data }) => setFilmsName(data.results))
        .catch(error => error);
    }
  }, [searchParams]);

  const onSubmitForm = evt => {
    evt.preventDefault();
    updateURL(valueForm);
    setValueForm('');

    fetchSearchedFilm(valueForm)
      .then(({ data }) => setFilmsName(data.results))
      .catch(error => error);
  };

  const onInputChange = evt => {
    setValueForm(evt.target.value);
  };

  const updateURL = name => {
    const nextURL = name !== '' ? `query=${name}` : {};
    setSearchParams(nextURL);
  };

  return (
    <main>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="film=name">
          <input
            type="text"
            name="film-name"
            onChange={onInputChange}
            value={valueForm}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {filmsName.length !== 0 ? (
        <ul>
          {filmsName.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Please input something to search</p>
      )}
    </main>
  );
};
