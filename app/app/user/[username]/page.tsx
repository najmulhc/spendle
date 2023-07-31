"use client";
import AuthTester from "@/app/components/AuthTester";
import TransactionType from "@/app/components/user/TransactionType";
import { useSelector } from "react-redux";

const Profile = async () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <AuthTester>
      <main>
        <h1>Hi, {user.username}</h1>
        <h2> Your Current Balence is ${user.account.balence}</h2>
        <h3>You have spent total ${user.account.spent}</h3>
        <h3>You have gained total ${user.account.gained}</h3>

        <TransactionType type="Gaining" />
        <TransactionType type="Spending" />
      </main>
    </AuthTester>
  );
};

export default Profile;
