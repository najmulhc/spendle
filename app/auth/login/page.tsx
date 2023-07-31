"use client";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setUser } from "@/redux/UserSlice/userSlice";
import login from "@/app/services/LoginUser";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(" ");
  const dispatch = useDispatch();
  const iniitialValue = {
    username: "",
    password: "",
  };
  const router = useRouter();
  const handleLogin = async (values: any) => {
    console.log(values);
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
    <main>
      <h2>Log In to your account</h2>
      <Formik initialValues={iniitialValue} onSubmit={handleLogin}>
        <Form>
          <label htmlFor="username">
            Enter Username
            <Field
              type="text"
              placeholder="najmulhc"
              name="username"
              id="username"
              required
            />
          </label>
          <label htmlFor="password">
            Enter Password
            <Field
              type="password"
              placeholder="*******"
              name="password"
              id="passord"
              required
            />{" "}
          </label>
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </main>
  );
};

export default Login;
