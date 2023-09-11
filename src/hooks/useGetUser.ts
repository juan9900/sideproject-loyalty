"use client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

export const useGetUser = () => {
  console.log("useGetUser");
  return new Promise<string | null>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        resolve(uid);
        // ...
      } else {
        // User is signed out
        console.log("not logged");
        resolve(null);
        // ...
      }
    });
  });
};
