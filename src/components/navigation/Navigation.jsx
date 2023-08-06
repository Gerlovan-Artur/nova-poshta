import { StyledNavLink, NavEl } from './Navigation.styled';
import logo from '../../images/Nova_Poshta_2014_logo.svg.png';
import { LogoEl } from '../../components/logo/logo.styled';

export const Nav = () => {
  return (
    <header>
      <LogoEl src={logo} alt="Logo" />
      <NavEl>
        <StyledNavLink to="/">Перевірити ТТН</StyledNavLink>
        <StyledNavLink to="/list">Список відділень</StyledNavLink>
      </NavEl>
    </header>
  );
};