"use client";
import { useRouter } from "next/navigation";
import { H1 } from "./components/styled-components/Typography.styled";

const Home = async () => {
  const router = useRouter();

  return (
    <main>
      <H1>Welcome to your personal Money manager </H1>
    </main>
  );
};

export default Home;
