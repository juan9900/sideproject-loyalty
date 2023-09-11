"use client";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useGetUser } from "@/hooks/useGetUser";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState<string | null>(null);
  useEffect(() => {
    // const getuserData = async () => {
    //   try {
    //     const user = await useGetUser();
    //     console.log({ user });
    //     setUserData(user);
    //     console.log("got it");
    //   } catch (e) {
    //     console.error("Error fetching", e);
    //   }
    // };
    // getuserData();
  }, []);
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  return (
    <>
      <Navbar />
      <h1 className="text-black">Usuario: {userData}</h1>
      {children}
    </>
  );
}
