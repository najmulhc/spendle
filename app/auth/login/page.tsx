"use client";
import { Form, Formik, Field } from "formik";
import LandingNavbar from "@/app/components/navbars/landingNavbar";
import { useDispatch, useSelector } from "react-redux";
import login from "@/app/services/LoginUser";
import { setUser } from "@/redux/UserSlice/userSlice";
import { useRouter } from "next/navigation";

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
    router.push("/");
  };
  return (
    <main>
      <LandingNavbar />
      <h2>Log In to your account</h2>
      <Formik initialValues={iniitialValue} onSubmit={handleLogin}>
        <Form>
          <Field
            type="text"
            placeholder="najmulhc"
            name="username"
            id="username"
            required
          />
          <Field
            type="password"
            placeholder="*******"
            name="password"
            id="passord"
            required
          />
          <button type="submit"> Log in</button>
        </Form>
      </Formik>
    </main>
  );
};

export default Login;
