import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FilmBox = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 16px 10px;
  border-bottom: 2px solid orangered;
`;

export const FilmInfo = styled.div`
  padding: 16px 10px;
`;

export const ButLink = styled(Link)`
  color: orangered;
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  background: rgba(144, 143, 143, 0.326);
`;
