"use client";
import AuthTester from "@/app/components/AuthTester";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getTransactions from "@/app/services/getTransactions";
import { setTransactions } from "@/redux/UserSlice/userSlice";
const Dashboard = async () => {
  const { username, transactions } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getUser() {
      const trans = await getTransactions(username);
      dispatch(
        setTransactions({
          transactions: trans,
        })
      );
    }
    getUser();
  }, []);

  return (
    <AuthTester>
      <h1>Dashboard</h1>
      <p>You have {transactions.length} transactions</p>
    </AuthTester>
  );
};

export default Dashboard;
