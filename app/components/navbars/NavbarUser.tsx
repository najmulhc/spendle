"use client";
import { useSelector } from "react-redux";
import "@/app/styles/testing.css";
import { NavLink, NavListItem } from "../styled-components/Nav.styled";
const NavbarUser = () => {
  const { username } = useSelector((state: any) => state.user);
  if (!username) {
    return <span>{username}</span>;
  } else {
    return (
      <NavListItem>
        <NavLink href={`/app/user/${username}`}>{username}</NavLink>
      </NavListItem>
    );
  }
};

export default NavbarUser;
