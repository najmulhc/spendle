'use client';
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import styled from 'styled-components'

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    position: relative;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const MobileNavToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: #333;
  }
`;

const NavItem = styled.li`
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

  return (
    <Nav>
      <Logo>Logo</Logo>
      <MobileNavToggle onClick={toggleMobileNav}>
        {isMobileNavOpen ? <RiCloseLine /> : <RiMenuLine />}
      </MobileNavToggle>
      <NavMenu isOpen={isMobileNavOpen}>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
