"use client";
import AuthTester from "@/app/components/AuthTester";
import getTransactions from "@/app/services/getTransactions";
import { useSelector } from "react-redux";

const Profile = async () => {
  const {username, account} = useSelector(state => state.user)
  const transactions = await getTransactions(username)
  return (
    <AuthTester>
      <main>
        <h2>Hi, {username}, you have ${account.balence} in your account </h2>
        <h3>Totla {transactions.length} transactions have beeen completed</h3>
      </main>
    </AuthTester>
  );
};

export default Profile;
