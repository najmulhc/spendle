"use client";
import { useSelector } from "react-redux";
import styles from "./header.module.css";
import Link from "next/link";
export default function Header() {
  const navbar = useSelector((state) => state.navbar);
  console.log(navbar);
  return (
    <header className={styles.header}>
      <h1>
        This is the simple header {navbar.isLanding && "you are in landing "}
      </h1>
      <Link href='/'> Home</Link>
      <Link href='/app'> App</Link>
    </header>
  );
}
