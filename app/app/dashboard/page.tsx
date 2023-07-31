"use client";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  return (
    <main>
      <button onClick={goHome}>Go To Home</button>
    </main>
  );
};

export default Dashboard;
