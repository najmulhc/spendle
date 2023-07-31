"use client";
import {
  Logo,
  LogoText,
  NavHeader,
  NavLink,
  NavList,
  NavListItem,
} from "../styled-components/Nav.styled";
import NavbarUser from "./NavbarUser";

const AppNavbar = () => {
  return (
    <NavHeader>
      <Logo>
        <NavLink href="/">
          <LogoText> Spendle</LogoText>
        </NavLink>
      </Logo>
      <NavList>
        <NavListItem>
          <NavLink href="/app/dashboard">Dashboard</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="/app/add-money">Add Money</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="/app/spend-money">Spend Money</NavLink>
        </NavListItem>
        <NavbarUser />
      </NavList>
    </NavHeader>
  );
};

export default AppNavbar;
