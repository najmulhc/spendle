const login = async (user: any) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
    }),
  };
  const response = await fetch(
    "http://localhost:3000/api/users/login",
    options
  );
  const result = await response.json();
 
  return result;
};

export default login;
