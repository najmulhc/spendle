
import Link from "next/link";
import { styled } from "styled-components";

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #4f23e10d;
  color: #18181888;
  border-bottom: 2px solid #4f23e1;

  @media (max-width: 768px) {
    position: relative;
  }
`; 
export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  transition: all 0.3s ease-in;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: white;
    transition: all 0.3s ease-in;
  }
`;
export const NavListItem = styled.li`
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: #181818;
  transition: all .2 ease-in;
  font-weight: 400;
  &:hover, &:active {
    color: #4f23e1;
  }
`;


export const MobileNavToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const LogoText = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  color: #181818;
`;

export const Logo = styled.div`
  display: flex;
  align-items:center;
`


export const NavAuthContainer = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: white;
  }
`;