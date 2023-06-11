'use client';
import { Formik , Field, Form} from "formik";

const AddMoney = () => {
    const handleFormSubmit = (values: any) => {
        console.log(values);
    }
    const initialvalue = {
        title: "", 
        amount: 0, 
        expenses: ""
    }
  const pageProps = {
    title: "Add Money",
    options: [
      { value: "", text: "Select an option" },
      { value: "food", text: "Food" },
      { value: "cloth", text: "Cloth" },
      { value: "transport", text: "Transport" },
      { value: "treating friend", text: "Treating Friend" },
      { value: "personal care", text: "Personal Care" },
      { value: "other expenses", text: "Other Expenses" },
    ],
    submitText: "Add Money"
  };
  return (
    <main>
      <h2>{pageProps.title}</h2>
      <Formik initialValues={initialvalue} onSubmit={handleFormSubmit}>
        <Form >
          <label htmlFor="title">Title of transaction</label>
          <Field type="text" name="title" id="title" required />
          <label htmlFor="amount">Amount of Transaction in Taka</label>
          <Field type="number" name="amount" id="amount" min={1} required />
          <label htmlFor="expenses">Type</label>
          <Field as="select" name="expenses" id="expenses" required>
            {pageProps.options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            ))}
          </Field>
          <button type="submit">{pageProps.submitText}</button>
        </Form>
      </Formik>
    </main>
  );
};

export default AddMoney;
