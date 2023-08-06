import { StyledNavLink, NavEl } from './Navigation.styled';
import logoM from '../../images/Nova_Poshta_2014_logo.svg.png';
import { LogoElM } from '../../components/logo/logo.styled';
import logoL from '../../images/logo-nova-poshta.jpg';
import { LogoElL } from '../../components/logo/logo.styled';


export const Nav = () => {
  return (
    <header>
      <LogoElM src={logoM} alt="Logo" />
      <LogoElL src={logoL} alt="Logo" />
      <NavEl>
        <StyledNavLink to="/">Перевірити ТТН</StyledNavLink>
        <StyledNavLink to="/list">Список відділень</StyledNavLink>
      </NavEl>
    </header>
  );
};