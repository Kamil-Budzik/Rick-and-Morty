import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.header`
  background: url('https://i.imgur.com/easQdbn.png') white center;
  background-size: cover;
  padding: 200px 0;
  text-align: center;

  .active {
    color: rgba(255, 152, 0, 0.6);
  }
`;

export const Title = styled(NavLink)`
  font-weight: 900;
  font-size: clamp(2rem, 8vw, 5.5rem);
  text-decoration: none;
  color: black;
  transition: ease 0.1s;

  &:hover {
    color: rgb(255, 152, 0);
  }
`;
