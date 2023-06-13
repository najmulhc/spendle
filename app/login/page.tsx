'use client';
import loginUser from "@/utils/loginUser";
import { Form, Formik, Field } from "formik";
import {useSelector} from 'react-redux'

const Login = () => {
  const {user} = useSelector(state => state.user);
  console.log(user)
  const iniitialValue = {
    username: "",
    password: "",
  };
  const handleLogin =  async (values: any) => {
    const response = await loginUser({
        ...values
    });
    console.log(response);
  };
  return (
    <main>
      <Formik initialValues={iniitialValue} onSubmit={handleLogin}>
        <Form>
          <Field type="text" placeholder="najmulhc" name="username" id="username" required />
          <Field type="password" placeholder="*******" name="password" id="passord" required />
          <button type="submit"> Log in</button>
        </Form>
      </Formik>
    </main>
  );
};

export default Login;
