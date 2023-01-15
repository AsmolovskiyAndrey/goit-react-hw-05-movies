import { Route, Routes } from 'react-router-dom';
import { Movies } from '../pages/Movies/Movies';
import { NotFound } from 'pages/NotFound';
import { Home } from 'pages/Home/Home';
import { Container, Header, Link } from './App.styled';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
