'use client';
import styled from "styled-components";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Logo href="/">Logo</Logo>
        <Nav>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Content>
      <BottomBar>
        <CopyRight>&copy; {new Date().getFullYear()} Your Company</CopyRight>
        <SocialLinks>
          <SocialLink href="https://twitter.com">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="https://facebook.com">
            <FaFacebook />
          </SocialLink>
          <SocialLink href="https://instagram.com">
            <FaInstagram />
          </SocialLink>
        </SocialLinks>
      </BottomBar>
    </Container>
  );
};

const Container = styled.footer`
  background-color: #000;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

const Logo = styled.a`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const CopyRight = styled.p`
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  color: #fff;
  margin-left: 0.5rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export default Footer;
