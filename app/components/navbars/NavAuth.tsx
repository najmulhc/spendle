"use client";
import useUser from "@/hooks/useUsers";
import { useDispatch } from "react-redux";
import { Button } from "../styled-components/Button.styled";
import {
  NavAuthContainer,
  NavLink,
  NavListItem,
} from "../styled-components/Nav.styled";
import { P } from "../styled-components/Typography.styled";
import { resetState } from "@/redux/UserSlice/userSlice";

const NavAuth = () => {
  const username = useUser();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(resetState());
  };
  return (
    <>
      {" "}
      {username ? (
        <NavAuthContainer>
          <NavListItem>
            <Button onClick={logOut}>Log Out</Button>
          </NavListItem>
          <NavListItem>
            <NavLink href="/app/dashboard">
              <P>Dashboard</P>
            </NavLink>
          </NavListItem>
        </NavAuthContainer>
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
