'use client';
import TransactionForm from "../components/TransactionForm";

const AddMoney = () => {
  const title = "Spend money";
  const options = [
    { value: "", text: "Select an option" },
    { value: "tuition", text: "Tuition" },
    { value: "family", text: "Family" },
    { value: "gift", text: "Gift" },
    { value: "loan", text: "Loan" },
    { value: "other", text: "Other" },
  ];
  const submitText = "Add Money";
  return (
    <TransactionForm title={title} options={options} submitText={submitText} type="gaining" />
  );
};

export default AddMoney;
