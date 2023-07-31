"use client";
import { useDispatch, useSelector } from "react-redux";
import "@/app/styles/testing.css";
import { NavLink, NavListItem } from "../styled-components/Nav.styled";
import { Button } from "../styled-components/Button.styled";
import { useRouter } from "next/navigation";
const NavbarUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { username } = useSelector((state: any) => state.user);
  const logOut = () => {
    console.log("Ho bhai, kaam kortase ");
    router.push("/");
  };

  if (!username) {
    return <span>{username}</span>;
  } else {
    return (
      <NavListItem>
        <NavLink href={`/app/user/${username}`}>{username}</NavLink>
        <Button onClick={logOut}>Log Out </Button>
      </NavListItem>
    );
  }
};

export default NavbarUser;
