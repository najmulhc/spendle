"use client";
import { useSelector } from "react-redux";

const Hero = () => {
  const state = useSelector((state) => state.user);
  return (
    <div>
      <h1>my Name is {state.username}</h1>
    </div>
  );
};

export default Hero;
