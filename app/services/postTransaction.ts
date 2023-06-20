const postTransaction = async ({
  user,
  type,
  amount,
}: {
  user: string;
  type: "gaining" | "spending";
  amount: number;
}) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      type,
      amount,
      title: "somethjing "
    }),
  };
  const response = await fetch(
    "http://localhost:3000/api/transactions",
    options
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export default postTransaction;
