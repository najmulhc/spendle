"use client";
import TransactionForm from "../components/TransactionForm";

const AddMoney = () => {
  const pageProps = {
    title: "Add Money",
    options: [
      { value: "", text: "Select an option" },
      { value: "food", text: "Food" },
      { value: "cloth", text: "Cloth" },
      { value: "transport", text: "Transport" },
      { value: "treating friend", text: "Treating Friend" },
      { value: "personal care", text: "Personal Care" },
      { value: "other expenses", text: "Other Expenses" },
    ],
    submitText: "Add Money",
  };
  return (
    <TransactionForm
      title={pageProps.title}
      options={pageProps.options}
      submitText={pageProps.submitText} 
      type="gaining"
    />
  );
};

export default AddMoney;
