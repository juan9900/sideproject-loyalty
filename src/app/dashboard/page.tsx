"use client";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data } = useSession();
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <h1>Dashboard</h1>
        <p>Bienvenido, {JSON.stringify(data)} </p>
      </div>
    </main>
  );
}
