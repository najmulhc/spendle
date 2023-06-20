"use client";
import AuthTester from "@/app/components/AuthTester";
import TransactionForm from "@/app/components/TransactionForm";

const AddMoney = () => {
  const pageProps = {
    title: "Add Money",
    options: [
      { value: "", text: "Select an option" },
      { value: "tuition", text: "Tuition" },
      { value: "family", text: "Family" },
      { value: "gift", text: "Gift" },
      { value: "loan", text: "Loan" },
      { value: "other", text: "Other" },
    ],
    submitText: "Add Money",
  };
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
