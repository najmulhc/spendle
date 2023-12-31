"use client";
import { useDispatch } from "react-redux";
import styles from "./home.module.css";
import { useEffect } from "react";
import { setToApp, setToLanding } from "../redux/navbarSlice/navbarSlice";
export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToLanding());
  });
  return (
    <>
      <h1 className={styles.title}>we are on a mission</h1>
      <button
        onClick={() => {
          dispatch(setToApp());
        }}
      >
        Go To App
      </button>
      <button
        onClick={() => {
          dispatch(setToLanding());
        }}
      >
        Go To Landing
      </button>
    </>
  );
}
