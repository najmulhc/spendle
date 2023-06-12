import { TransactionPageProps } from "@/types";
import postData from "@/utils/postData";
import { Formik, Form, Field } from "formik";

const TransactionForm: React.FC<TransactionPageProps> = ({
  title,
  options,
  submitText,
  type,
}) => {
  const handleFormSubmit = async (values: any) => {
    const result = await postData(values);
    console.log(result);
  };
  const initialvalue = {
    title: "",
    amount: 0,
    expenses: "",
    type,
  };
  return (
    <main>
      <h2>{title}</h2>
      <Formik initialValues={initialvalue} onSubmit={handleFormSubmit}>
        <Form>
          <label htmlFor="title">Title of transaction</label>
          <Field type="text" name="title" id="title" required />
          <label htmlFor="amount">Amount of Transaction in Taka</label>
          <Field
            as="input"
            type="number"
            name="amount"
            id="amount"
            min={1}
            required
          />
          <label htmlFor="expenses">Type</label>
          <Field as="select" name="expenses" id="expenses" required>
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            ))}
          </Field>
          <button type="submit">{submitText}</button>
        </Form>
      </Formik>
    </main>
  );
};

export default TransactionForm;
