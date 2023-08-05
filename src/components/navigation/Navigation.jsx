import { StyledNavLink, NavEl } from './Navigation.styled';
export const Nav = () => {
  return (
    <header>
      <NavEl>
        <StyledNavLink to="/">Перевірити ТТН</StyledNavLink>
        <StyledNavLink to="/list">Список відділень</StyledNavLink>
      </NavEl>
    </header>
  );
};