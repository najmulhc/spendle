import store from "@/redux/store";
import { TransactionPageProps } from "@/types";
import { Input, Label } from "./styled-components/Form.styled";
import { Button } from "./styled-components/Button.styled";
import { Formik } from "formik";
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
        <form>
          <label htmlFor="title">
            Title of transaction
            <input
              type="text"
              name="transactionTitle"
              id="transactionTitle"
              required
            />
          </label>
          <Label htmlFor="amount">Amount of Transaction in Taka </Label>
          <input type="number" name="amount" id="amount" required />
          <Label htmlFor="expenses">
            Type
            <Input as="select" name="expenses" id="expenses" required>
              {options.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              ))}
            </Input>
          </Label>
          <Button type="submit">{submitText}</Button>
        </form>
      </Formik>
    </div>
  );
};

export default TransactionForm;
