const getTransactions = async (slug: string) => {
  const user = await fetch(`http://localhost:3000/api/users/${slug}`);
  const response = await user.json();
  return response.user.transactions;
};

export default getTransactions;
