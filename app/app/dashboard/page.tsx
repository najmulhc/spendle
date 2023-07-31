"use client";
import AppNavbar from "@/app/components/navbars/AppNavbar";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  return (
    <main>
      <AppNavbar/>
      <button onClick={goHome}>Go To Home</button>
    </main>
  );
};

export default Dashboard;
