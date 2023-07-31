"use client";
import AuthTester from "@/app/components/AuthTester";
import {
  H1,
  H2,
  H3,
} from "@/app/components/styled-components/Typography.styled";
import TransactionType from "@/app/components/user/TransactionType";
import { useSelector } from "react-redux";

const Profile = async () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <AuthTester>
      <main>
        <H1>Hi, {user.username}</H1>
        <H2> Your Current Balence is ${user.account.balence}</H2>
        <H3>You have spent total ${user.account.spent}</H3>
        <H3>You have gained total ${user.account.gained}</H3>

        <TransactionType type="Gaining" />
        <TransactionType type="Spending" />
      </main>
    </AuthTester>
  );
};

export default Profile;
