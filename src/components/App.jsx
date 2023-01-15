import { Route, Routes } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { NotFound } from 'pages/NotFound';
import { Home } from 'pages/Home/Home';
import { Container, Header, Link } from './App.styled';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

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
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
