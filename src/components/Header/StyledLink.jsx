import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--primary-color);

  &.active {
    color: #fff;
  }

  &:hover {
    color: white;
    transform: scale(1.2);
  }
`;
