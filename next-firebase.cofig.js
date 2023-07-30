// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
// import { FirebaseAdapter } from '@next-auth/firebase-adapter';
// import firebase from 'firebase/app';

// const firebaseConfig = {
//     apiKey: 'YOUR_API_KEY',
//     authDomain: 'YOUR_AUTH_DOMAIN',
//     projectId: 'YOUR_PROJECT_ID',
// };

// const firebaseApp = firebase.apps.length
//     ? firebase.app()
//     : firebase.initializeApp(firebaseConfig);

// export default NextAuth({
//     providers: [
//         Providers.Google({
//             clientId: 'YOUR_GOOGLE_CLIENT_ID',
//             clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
//         }),
//         // Add other providers here (e.g., GitHub)
//     ],
//     adapter: FirebaseAdapter(firebaseApp),
// });
