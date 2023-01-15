import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Nav } from './App.styled';

export const SharedLayout = () => {
  return (
    <Header>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Header>
  );
};
