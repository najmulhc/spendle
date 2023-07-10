import TransactionType from "../components/user/TransactionType";

const deleteTransactionSource = async ({
  username,
  type,
  text,
}: TransactionType) => {
  // set the options
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      text,
      type,
    }),
  };

  const response = await fetch(
    "http://localhost:3000/api/users/transaction-type",
    options
  );
  const data = await response.json();
  console.log(data);
  if (data.user) {
    return data.user;
  }
};

export default deleteTransactionSource;
