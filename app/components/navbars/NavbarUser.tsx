"use client";
import { useDispatch, useSelector } from "react-redux";
import "@/app/styles/testing.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
const NavbarUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { username } = useSelector((state: any) => state.user);
  const logOut = () => {
    console.log("Ho bhai, kaam kortase ");
    router.push("/");
  };

  if (!username) {
    return <span>{username}</span>;
  } else {
    return (
      <li>
        <Link href={`/app/user/${username}`}>{username}</Link>
        <button onClick={logOut}>Log Out </button>
      </li>
    );
  }
};

export default NavbarUser;
