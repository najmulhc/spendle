import { UserInput } from "@/types";

const register = async (userInput: UserInput) => {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...userInput,
    }),
  });
  const result = await response.json(); 
  return result.data;
};

export default register;
