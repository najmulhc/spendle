"use client";
import { Formik } from "formik";
import LandingNavbar from "@/app/components/navbars/landingNavbar";
import { useDispatch, useSelector } from "react-redux";
import login from "@/app/services/LoginUser";
import { setGainingSources, setSpendingSource, setUser } from "@/redux/UserSlice/userSlice";
import { useRouter } from "next/navigation";
import {
  FormPageContainer,
  FormTitle,
  Input,
  Label,
  StyledForm,
} from "@/app/components/styled-components/Form.styled";
import { Button } from "@/app/components/styled-components/Button.styled";

const Login = () => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  const iniitialValue = {
    username: "",
    password: "",
  };
  const router = useRouter();
  const handleLogin = async (values: any) => {
    console.log(values);
    const { user } = await login({
      username: values.username,
      password: values.password,
    });

    const { username, account } = user;
    dispatch(
      setUser({
        username,
        account,
      })
    );
    dispatch(
      setGainingSources({
        gainingSources: user.gainingSources,
      })
    );
    dispatch(
      setSpendingSource({
        spendingSources: user.spendingSources,
      })
    );
    router.push("/app/add-money");
  };
  return (
    <>
      {" "}
      <LandingNavbar />
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
          </StyledForm>
        </Formik>
      </FormPageContainer>{" "}
    </>
  );
};

export default Login;
