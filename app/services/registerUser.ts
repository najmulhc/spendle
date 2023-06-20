import { setUser } from "@/redux/UserSlice/userSlice";
import store from "@/redux/store";
import { UserInput } from "@/types";

const registerUser = async (user: UserInput) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
    }),
  };
  const response = await fetch("http://localhost:3000/api/users", options);
  const result = await response.json();
  const data = result.data;
  const savedUser = data.user;
  store.dispatch(
    setUser({
      username: savedUser.username,
      account: savedUser.account,
    })
  );
  return savedUser;
};

export default registerUser;
