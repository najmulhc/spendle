"use client";
import useUser from "@/hooks/useUsers";
import { setUser } from "@/redux/UserSlice/userSlice";
import { useDispatch } from "react-redux";
import { Button } from "../styled-components/Button.styled";
import { NavLink, NavList, NavListItem } from "../styled-components/Nav.styled";

const NavAuth = () => {
  const username = useUser();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(
      setUser({
        username: "",
      })
    );
  };
  return (
    <>
      {" "}
      {username ? (
        <Button onClick={logOut}>Log Out</Button>
      ) : (
        <NavList>
          <NavListItem>
            <NavLink href="/auth/login">
              <button>Log In</button>
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="/auth/register">
              <Button>Register</Button>
            </NavLink>
          </NavListItem>
        </NavList>
      )}
    </>
  );
};

export default NavAuth;
