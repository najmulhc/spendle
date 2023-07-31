"use client";
import useUser from "@/hooks/useUsers";
import Link from "next/link";
import { useDispatch } from "react-redux";


const NavAuth = () => {
  const username = useUser();
  const dispatch = useDispatch();
  const logOut = () => {console.log('somethong');};
  return (
    <>
      {" "}
      {username ? (
        <div>
          <li>
            <button onClick={logOut}>Log Out</button>
          </li>
          <li>
            <Link href="/app/dashboard">
              <p>Dashboard</p>
            </Link>
          </li>
        </div>
      ) : (
        <div>
          <li>
            <Link href="/auth/login">
              <button>Log In</button>
            </Link>
          </li>
          <li>
            <Link href="/auth/register">
              <button>Register</button>
            </Link>
          </li>
        </div>
      )}
    </>
  );
};

export default NavAuth;
