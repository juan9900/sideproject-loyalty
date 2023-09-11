"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  if (session.status === "authenticated") {
    redirect("/dashboard");
  }
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
        <h1>{session?.data?.user?.email}</h1>
      </div>
    </main>
  );
}

Home.requireAuth = true;
