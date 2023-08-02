"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AppPage() {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  return (
    <main>
      <h2>This is the app page</h2>
    </main>
  );
}
