import {
  Nav,
  NavHeader,
  NavLink,
  NavList,
  NavListItem,
} from "../styled-components/Nav.styled";
import NavAuth from "./NavAuth";
const LandingNavbar = () => {
  return (
    <NavHeader>
      <h1>Finanzio</h1>
      <Nav>
        <NavList>
          <NavListItem>
            <NavLink href="/">Home</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="/product">Product</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="/blog">Blog</NavLink>
          </NavListItem>
        </NavList>
      </Nav>
      <NavAuth/>
    </NavHeader>
  );
};

export default LandingNavbar;
