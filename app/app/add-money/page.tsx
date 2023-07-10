"use client";
import AuthTester from "@/app/components/AuthTester";
import TransactionForm from "@/app/components/TransactionForm";
import { useSelector } from "react-redux";

const AddMoney = () => {
  const { gainingSources } = useSelector((state) => state.user);
  const pageProps = {
    title: "Add Money",
    options: [{ value: "", text: "Select an option" }],
    submitText: "Add Money",
  };
  for (let item of gainingSources) {
    const option = {
      text: item,
      value: item.replace(/\s/g, "-"),
    };
    pageProps.options.push(option);
  }
  return (
    <AuthTester>
      <TransactionForm
        title={pageProps.title}
        options={pageProps.options}
        submitText={pageProps.submitText}
        type="gaining"
      />
    </AuthTester>
  );
};

export default AddMoney;
