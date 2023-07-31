"use client";
import { useState } from "react";
import { Button, HidingButton } from "../styled-components/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import postTransactionType from "@/app/services/postTransactionType";
import {
  setGainingSources,
  setSpendingSource,
} from "@/redux/UserSlice/userSlice";
import deleteTransactionSource from "@/app/services/deleteTransactionSource";
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
  const handleAddToList = async () => {
    const source = {
      username,
      type,
      text,
    };
    const updatedUser = await postTransactionType(source);
    dispatch(
      setGainingSources({
        gainingSources: updatedUser.gainingSources,
      })
    );
    dispatch(
      setSpendingSource({
        spendingSources: updatedUser.spendingSources,
      })
    );

    setText("");
  };
  const handleDeleteItem = async (item: string) => {
    const source = {
      username,
      type,
      text: item,
    };
    const updatedUser = await deleteTransactionSource(source);
    console.log(updatedUser);
    dispatch(
      setGainingSources({
        gainingSources: updatedUser.gainingSources,
      })
    );
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
                <HidingButton onClick={() => handleDeleteItem(item)}>
                  X
                </HidingButton>
              </li>
            ))
          : spendingSources.map((item: string) => (
              <li key={item}>
                <span>{item}</span>
                <HidingButton onClick={() => handleDeleteItem(item)}>
                  X
                </HidingButton>
              </li>
            ))}
        <li>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <Button onClick={handleAddToList}>Add This</Button>
        </li>
      </ul>
    </section>
  );
};

export default TransactionType;
