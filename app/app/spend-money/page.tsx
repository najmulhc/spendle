"use client";
import AuthTester from "@/app/components/AuthTester";
import TransactionForm from "@/app/components/TransactionForm";

const AddMoney = () => {
  const title = "Spend money";
  const options = [
    { value: "", text: "Select an option" },
    { value: "food", text: "Food" },
    { value: "cloth", text: "Cloth" },
    { value: "transport", text: "Transport" },
    { value: "treating friend", text: "Treating Friend" },
    { value: "personal care", text: "Personal Care" },
    { value: "other expenses", text: "Other Expenses" },
  ];
  const submitText = "Add Money";
  return (
    <AuthTester>
       
      <TransactionForm
        title={title}
        options={options}
        submitText={submitText}
        type="spending"
      />
    </AuthTester>
  );
};

export default AddMoney;
