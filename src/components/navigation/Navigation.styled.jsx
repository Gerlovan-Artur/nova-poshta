import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavEl = styled.nav`
  display: flex;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
  margin-top: 0px;
  justify-content: center;
  }
`;

export const StyledNavLink = styled(NavLink)`

  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #3c3636;
  padding: 15px;
  border: 1px solid black;
  border-radius: 8px;
  margin-right: 10px;
  width: 320px;
  text-align: center;
  
  transition: all 0.3s linear;

  &:last-of-type {
    margin-right: 0px;
        
  }

  &.active {
    color: #fff;
    background-color: #fa4a3b;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fa4a3b;
    background-color: #c2c2c2;
  }

  @media screen and (min-width: 768px) {
    font-size: 30px;
    padding: 30px;
    margin-right: 20px;
    width: 300px;
    text-align: center;
    
  }
`;