"use client";
import useUser from "@/hooks/useUsers";
import { setUser } from "@/redux/UserSlice/userSlice";
import { useDispatch } from "react-redux";
import { Button } from "../styled-components/Button.styled";
import { NavAuthContainer, NavLink, NavListItem } from "../styled-components/Nav.styled";

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
        <NavAuthContainer>
          <NavListItem>
            <NavLink href="/auth/login">
              <Button>Log In</Button>
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href="/auth/register">
              <Button>Register</Button>
            </NavLink>
          </NavListItem>
        </NavAuthContainer>
      )}
    </>
  );
};

export default NavAuth;
