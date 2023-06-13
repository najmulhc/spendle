"use client";
import {useSelector} from "react-redux"

const Home = async () => {
  const { username, account } = useSelector(state => state.user);

  return (
    <div>
      <h1>
        Hi, I am {username} and I have ${account.balence}
      </h1>
    </div>
  );
};

export default Home;
