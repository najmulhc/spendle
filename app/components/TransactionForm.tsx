import store from "@/redux/store";
import { TransactionPageProps } from "@/types";
import { Label } from "./styled-components/Form.styled";
import { Field, Form, Formik } from "formik";
import postTransaction from "../services/postTransaction";
import { setUser } from "@/redux/UserSlice/userSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const TransactionForm: React.FC<TransactionPageProps> = ({
  title,
  options,
  submitText,
  type,
}) => {
  const { username } = store.getState().user;
  const router = useRouter();
  const dispatch = useDispatch();
  const handleFormSubmit = async (values: any) => {
    const { amount, transactionTitle } = values;
    console.log(values);
    const { user } = await postTransaction({
      user: username,
      type,
      amount,
      title: transactionTitle,
    });
    console.log(user);
    dispatch(
      setUser({
        username,
        account: user.account,
        gainingSources: user.gainingSources,
        spendingSoruces: user.spendingSources,
      })
    );
    router.push("/app/dashboard");
  };

  return (
    <div>
      <h1>{title}</h1>
      <Formik
        initialValues={{
          title: "",
          amount: 0,
          expenses: "",
          type,
        }}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <label htmlFor="title">
            Title of transaction
            <input
              type="text"
              name="transactionTitle"
              id="transactionTitle"
              required
            />
          </label>
          <label htmlFor="amount">Amount of Transaction in Taka </label>
          <Field type="number" name="amount" id="amount" required />
          <Label htmlFor="expenses">
            Type
            <Field as="select" name="expenses" id="expenses" required>
              {options.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              ))}
            </Field>
          </Label>
          <button type="submit">{submitText}</button>
        </Form>
      </Formik>
    </div>
  );
};

export default TransactionForm;
