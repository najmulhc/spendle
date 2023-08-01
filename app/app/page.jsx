"use client";

import { setToApp } from "@/redux/navbarSlice/navbarSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AppPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToApp());
  }, [dispatch]);
  return (
    <main>
      <h2>This is the app page</h2>
    </main>
  );
}
