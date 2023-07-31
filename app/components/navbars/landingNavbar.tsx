"use client";
import Image from "next/image";
import logo from "../../asset/logo.svg";
import NavAuth from "./NavAuth";
import Link from "next/link";

const LandingNavbar = () => {
  return (
    <header>
      <div>
        <Image src={logo} width={48} height={48} alt="Logo" />
        <h2> Spendle</h2>
      </div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/product">Product</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>{" "}
      </ul>
      <NavAuth />
    </header>
  );
};

export default LandingNavbar;
