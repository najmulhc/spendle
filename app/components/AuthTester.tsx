"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const AuthTester = ({ children }: { children: React.ReactNode }) => {
  const { username, account } = useSelector((state: any) => state.user);
  const router = useRouter();
  if (username) {
    return <>{children}</>;
  } else {
    router.push("/auth/register");
  }
};

export default AuthTester;
