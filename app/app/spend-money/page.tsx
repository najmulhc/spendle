"use client";
import AuthTester from "@/app/components/AuthTester";
import TransactionForm from "@/app/components/TransactionForm";
import AppNavbar from "@/app/components/navbars/AppNavbar";
import { useSelector } from "react-redux";

const AddMoney = () => {
  const { spendingSources } = useSelector((state) => state.user);

  const pageProps = {
    title: "Spend Money",
    options: [{ value: "", text: "Select an option" }],
    submitText: "Spend Money",
  };
  for (let item of spendingSources) {
    const option = {
      text: item,
      value: item.replace(/\s/g, "-"),
    };
    pageProps.options.push(option);
  }

  return (
    <AuthTester>
      <AppNavbar/>
      <TransactionForm
        title={pageProps.title}
        options={pageProps.options}
        submitText={pageProps.submitText}
        type="spending"
      />
    </AuthTester>
  );
};

export default AddMoney;
