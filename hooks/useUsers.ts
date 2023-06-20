import { useSelector } from "react-redux";

const useUser = () => {
  const { username } = useSelector((state: any) => state.user);
  return username;
};
export default useUser;
