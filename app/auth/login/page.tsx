"use client";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import login from "@/app/services/LoginUser";
import { setUser } from "@/redux/UserSlice/userSlice";
import { useRouter } from "next/navigation";
import {
  FormPageContainer,
  FormTitle,
  Input,
  Label,
  StyledForm,
} from "@/app/components/styled-components/Form.styled";
import { Button } from "@/app/components/styled-components/Button.styled";
import { useState } from "react";
import { P } from "@/app/components/styled-components/Typography.styled";

const Login = () => {
  const { user } = useSelector((state: any) => state.user);
  const [errorMessage, setErrorMessage] = useState(" ");
  const dispatch = useDispatch();
  const iniitialValue = {
    username: "",
    password: "",
  };
  const router = useRouter();
  const handleLogin = async (values: any) => {
    const response = await login({
      username: values.username,
      password: values.password,
    });
    if (response.message) {
      setErrorMessage(response.message);
    }

    const { username, account, gainingSources, spendingSources } =
      response?.user;
    console.log(response.user);
    dispatch(
      setUser({
        username,
        account,
        gainingSources,
        spendingSources,
      })
    );
    router.push("/app/dashboard");
  };
  return (
    <FormPageContainer>
      <FormTitle>Log In to your account</FormTitle>
      <Formik initialValues={iniitialValue} onSubmit={handleLogin}>
        <StyledForm>
          <Label htmlFor="username">
            Enter Username
            <Input
              type="text"
              placeholder="najmulhc"
              name="username"
              id="username"
              required
            />
          </Label>
          <Label htmlFor="password">
            Enter Password
            <Input
              type="password"
              placeholder="*******"
              name="password"
              id="passord"
              required
            />{" "}
          </Label>
          <Button type="submit"> Log in</Button>
          <P color="#8B0000" textAlign="center">
            {errorMessage}
          </P>
        </StyledForm>
      </Formik>
    </FormPageContainer>
  );
};

export default Login;
