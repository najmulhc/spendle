"use client";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import registerUser from "@/app/services/registerUser";
import { setUser } from "@/redux/UserSlice/userSlice";
import LandingNavbar from "@/app/components/navbars/landingNavbar";
import { Button } from "@/app/components/styled-components/Button.styled";
import {
  Input,
  StyledForm,
} from "@/app/components/styled-components/Form.styled";
const Page = () => {
  const initialvalues = {
    username: "",
    password: "",
    name: "",
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const handleRegister = async (values: any) => {
    const user = await registerUser(values);

    const { username, account } = user;
    dispatch(
      setUser({
        username,
        account,
      })
    );
    router.push(`/user/${username}`);
  };
  return (
    <main>
      <LandingNavbar />
      <h2>Create an account</h2>
      <Formik initialValues={initialvalues} onSubmit={handleRegister}>
        <StyledForm>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            required
          />
          <Input type="password" name="password" id="password" />
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Formik>
    </main>
  );
};

export default Page;
