"use client";
import {
  Logo,
  LogoText,
  MobileNavToggle,
  NavHeader,
  NavLink,
  NavList,
  NavListItem,
} from "../styled-components/Nav.styled";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";
import logo from "../../asset/logo.svg";
import NavAuth from "./NavAuth";

const LandingNavbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <NavHeader>
      <Logo>
        <Image src={logo} width={48} height={48} alt="Logo" />
        <LogoText> Spendle</LogoText>
      </Logo>
      <MobileNavToggle onClick={toggleMobileNav}>
        {isMobileNavOpen ? <RiCloseLine /> : <RiMenuLine />}
      </MobileNavToggle>
      <NavList isOpen={isMobileNavOpen}>
        <NavListItem>
          <NavLink href="/">Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="/product">Product</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="/blog">Blog</NavLink>
        </NavListItem>{" "}
      </NavList>
      <NavAuth/>
    </NavHeader>
  );
};

export default LandingNavbar;
