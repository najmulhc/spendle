const loginUser = async (data:any) => {
    const response = await fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  });
  const result = await response.json();
  console.log(result);
  return result;
};

export default loginUser;