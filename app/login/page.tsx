'use client';
import loginUser from "@/utils/loginUser";
import { Form, Formik, Field } from "formik";

const Login = () => {
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
