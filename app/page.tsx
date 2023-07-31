"use client";
import { useRouter } from "next/navigation";
import { H1 } from "./components/styled-components/Typography.styled";
import LandingNavbar from "./components/navbars/landingNavbar";

const Home = async () => {
  const router = useRouter();

  return (
    <main>
      <LandingNavbar />
      <H1>Welcome to your personal Money manager </H1>
    </main>
  );
};

export default Home;
