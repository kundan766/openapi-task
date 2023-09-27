// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google"



// export const authOptions ={
//     providers: [
//         GoogleProvider({
//         clientId: "process.env.GOOGLE_CLIENT_ID",
//         clientSecret: "process.env.GOOGLE_CLIENT_SECRET",
//     }),
//     ],
//     secret: process.env.SECRET,
// }

// const handler= NextAuth(authOptions);
// export {handler as GET ,handler as POST}

import NextAuth from "next-auth/next";
import  GoogleProvider  from "next-auth/providers/google";

 const handler =NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      httpOptions: {
        timeout: 40000,
      },
    }),
  ],
  // secret: process.env.SECRET,
});

// const { GET, POST } = NextAuth(authOptions);
export {  handler as GET,  handler as POST };
