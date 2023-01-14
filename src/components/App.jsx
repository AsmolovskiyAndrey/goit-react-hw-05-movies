import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { NotFound } from 'pages/NotFound';
import { Home } from 'pages/Home/Home';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
