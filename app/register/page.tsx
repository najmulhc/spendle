"use client";
import register from "@/utils/register";
import { Field, Form, Formik } from "formik";

const page = () => {
  const initialvalues = {
    username: "",
    password: "",
    name: "",
  };
  const handleRegister = async (values: any) => {
    const result = await register(values);
    console.log(result);
  };
  return (
    <main>
      <Formik initialValues={initialvalues} onSubmit={handleRegister}>
        <Form>
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            required
          />
          <Field type="password" name="password" id="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </main>
  );
};

export default page;
