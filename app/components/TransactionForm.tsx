import { setUser } from "@/redux/UserSlice/userSlice";
import store from "@/redux/store";
import { TransactionPageProps } from "@/types";
import postTransaction from "../services/postTransaction";
import { FormTitle, Input, Label, StyledForm } from "./styled-components/Form.styled";
import { Button } from "./styled-components/Button.styled";
import { Formik } from "formik";
const TransactionForm: React.FC<TransactionPageProps> = ({
  title,
  options,
  submitText,
  type,
}) => {
  const { username } = store.getState().user;

  const handleFormSubmit = async (values: any) => {
    const { amount } = values;
    const { user } = await postTransaction({
      user: username,
      type,
      amount,
    });

    store.dispatch(
      setUser({
        username,
        account: user.account,
      })
    );
  };
  const initialvalue = {
    title: "",
    amount: 0,
    expenses: "",
    type,
  };
  return (
    <main>
      <FormTitle>{title}</FormTitle>
      <Formik initialValues={initialvalue} onSubmit={handleFormSubmit}>
        <StyledForm>
          <Label htmlFor="title">Title of transaction</Label>
          <Input type="text" name="title" id="title" required />
          <label htmlFor="amount">Amount of Transaction in Taka</label>
          <Input
            as="input"
            type="number"
            name="amount"
            id="amount"
            min={1}
            required
          />
          <label htmlFor="expenses">Type</label>
          <Input as="select" name="expenses" id="expenses" required>
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            ))}
          </Input>
          <Button type="submit">{submitText}</Button>
        </StyledForm>
      </Formik>
    </main>
  );
};

export default TransactionForm;
