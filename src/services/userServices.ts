import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

type authData = {
  email: string;
  password: string;
};
export const createUser = async (data: authData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;
    console.log(user);

    return {
      ok: true,
      data: user,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      ok: false,
      data: e.message,
    };
  }
};

export const retrieveLoopyLoyaltyToken = async () => {};
