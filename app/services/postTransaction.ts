const postTransaction = async ({
  user,
  type,
  amount,
  title,
}: {
  user: string;
  type: "gaining" | "spending";
  amount: number;
  title: string;
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
      title,
    }),
  };
  const response = await fetch(
    "http://localhost:3000/api/transactions",
    options
  );
  const data = await response.json();
 
  return data;
};

export default postTransaction;
