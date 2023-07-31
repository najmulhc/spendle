"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postTransactionType from "@/app/services/postTransactionType";
import {
  setGainingSources,
  setSpendingSource,
} from "@/redux/UserSlice/userSlice";
import deleteTransactionSource from "@/app/services/deleteTransactionSource";
import { Input } from "../styled-components/Form.styled";
interface TransactionType {
  type: "Gaining" | "Spending";
  text?: string;
  username?: string;
}

const TransactionType: React.FC<TransactionType> = ({ type }) => {
  const [text, setText] = useState<string>("");
  const { username, spendingSources, gainingSources } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  // this will add the text to the list
  const handleAddToList = async () => {
    const source = {
      username,
      type,
      text,
    };
    // posting data on server that returns updated user
    const updatedUser = await postTransactionType(source);

    // resetting the state in redux store
    dispatch(
      setGainingSources({
        gainingSources: updatedUser.gainingSources,
      })
    );

    // reseting the state in redux store
    dispatch(
      setSpendingSource({
        spendingSources: updatedUser.spendingSources,
      })
    );
    // resetting the text state to the initial value
    setText("");
  };

  // when you click the cross icon
  const handleDeleteItem = async (item: string) => {
    // making ready the options for data fetching
    const source = {
      username,
      type,
      text: item,
    };

    // sending data to the server that returns the updated user object
    const updatedUser = await deleteTransactionSource(source);

    // resetting the state in redux store
    dispatch(
      setGainingSources({
        gainingSources: updatedUser.gainingSources,
      })
    );

    // reseting the state in redux store
    dispatch(
      setSpendingSource({
        spendingSources: updatedUser.spendingSources,
      })
    );
  };
  return (
    <section>
      <h2>YOur {type}s</h2>
      <ul>
        {type === "Gaining"
          ? gainingSources.map((item: string) => (
              <li key={item}>
                <span>{item}</span>
                <button onClick={() => handleDeleteItem(item)}>X</button>
              </li>
            ))
          : spendingSources.map((item: string) => (
              <li key={item}>
                <span>{item}</span>
                <button onClick={() => console.log(item)}>X</button>
              </li>
            ))}
        <li>
          <Input
            type="text"
            value={text}
            onBlur={(e: any) => setText(e.target.value)}
            required
          />
          <button onClick={handleAddToList}>Add This</button>
        </li>
      </ul>
    </section>
  );
};

export default TransactionType;
