"use client";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import register from "@/utils/register";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/UserSlice/userSlice";
const Page = () => {
  const initialvalues = {
    username: "",
    password: "",
    name: "",
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const handleRegister = async (values: any) => {
    const { user } = await register(values);

    const { username, account } = user;
    dispatch(
      setUser({
        username,
        account,
      })
    );
    router.push('/add-money')
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

export default Page;
