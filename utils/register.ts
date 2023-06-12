import { UserInput } from "@/types";

const register = async (userInput: UserInput) => {
  console.log(userInput);
  const response = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     ...userInput
    }),
  });
  return response.json();
};

export default register;
