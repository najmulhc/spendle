'use client';
import { Button } from "@/app/components/styled-components/Button.styled";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  return (
    <main>
      <Button onClick={goHome}>Go To Home</Button>
    </main>
  );
};

export default Dashboard;
