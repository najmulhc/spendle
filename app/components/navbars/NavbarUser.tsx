"use client";
import { useSelector } from "react-redux";
import "@/app/styles/testing.css";
const NavbarUser = () => {
  const { username } = useSelector((state: any) => state.user);
 if(username) {
  return (
    <span >{username}</span>
  ) 
 } else {
  return (
    <></>
  )
 }
};

export default NavbarUser;
