import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { app } from "../../../../firebase.config"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

  ],
  adapter: FirebaseAdapter(app),
}

export default NextAuth(authOptions)