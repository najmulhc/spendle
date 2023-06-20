"use client";
import Image from "next/image";
import {
  Logo,
  LogoText,
  NavHeader,
  NavLink,
  NavList,
  NavListItem,
} from "../styled-components/Nav.styled";
import logo from "../../asset/logo.svg";
import NavbarUser from "./NavbarUser";

const AppNavbar = () => {
  return (
    <NavHeader>
      <Logo>
        <Image src={logo} width={48} height={48} alt="Logo" />
        <LogoText> Spendle</LogoText>
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
