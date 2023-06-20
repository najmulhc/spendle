"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

const Hero = () => {
  const state = useSelector((state) => state.user);
  return (
    <div>
      <h1>my Name is {state.username} and I have ${state.account.balence}</h1>
      <Link href='/'>Home</Link> <br />
      <Link href='/add-money'>Add Money</Link> <br />
      <Link href='/spend-money'>Spend Money</Link> <br />
      <Link href='/register'>Register</Link>
      <br />
      <Link href='/login'>Login</Link>
    </div>
  );
};

export default Hero;
