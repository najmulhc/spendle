"use client";
import Link from "next/link";
import { Logo } from "../styled-components/Nav.styled";
import NavbarUser from "./NavbarUser";

const AppNavbar = () => {
  return (
    <header>
      <Logo>
        <Link href="/">
          <h2> Spendle</h2>
        </Link>
      </Logo>
      <ul>
        <li>
          <Link href="/app/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/app/add-money">Add Money</Link>
        </li>
        <li>
          <Link href="/app/spend-money">Spend Money</Link>
        </li>
        <NavbarUser />
      </ul>
    </header>
  );
};

export default AppNavbar;
