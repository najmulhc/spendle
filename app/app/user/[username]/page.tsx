"use client";
import AuthTester from "@/app/components/AuthTester";
import AppNavbar from "@/app/components/navbars/AppNavbar";
import { useSelector } from "react-redux";

const Profile = async () => {
  const user = useSelector((state) => state.user);
 
  return (
    <AuthTester>
      <AppNavbar />
      <main>
        <h1>Hi, {user.username}</h1>
      </main>
    </AuthTester>
  );
};

export default Profile;
