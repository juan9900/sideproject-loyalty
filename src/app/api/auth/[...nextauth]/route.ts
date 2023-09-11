import { signInWithEmailAndPassword } from "firebase/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { auth } from "@/firebase/config";
import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
const authOptions: AuthOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials): Promise<any> {
        try {
          return await signInWithEmailAndPassword(
            auth,
            (credentials as any).email || "",
            (credentials as any).password || ""
          )
            .then((userCredential) => {
              console.log(userCredential);
              //  TODO: NECESITO ENVIAR LOS DATOS DEL USUARIO AL LAYOUT
              if (userCredential.user) {
                return userCredential.user;
              } else {
                return null;
              }
            })
            .catch((error) => {
              console.log("error aqui");
              console.log(error);
              return null;
            });
        } catch (e) {
          console.log({ e });
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
