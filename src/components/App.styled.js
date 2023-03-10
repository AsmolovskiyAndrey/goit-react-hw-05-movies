import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: column;
  align-items: left;
  gap: 12px;
  padding: 8px 0;
  margin-top: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Nav = styled.nav`
  padding: 8px 0;
  border-bottom: 2px solid orangered;
  margin-bottom: 16px;
`;
