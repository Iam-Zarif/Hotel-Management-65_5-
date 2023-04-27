// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrSDqlL5WOGSWzV3oYhaRk99HCyy43OaM",
  authDomain: "hotel-management-auth-df25c.firebaseapp.com",
  projectId: "hotel-management-auth-df25c",
  storageBucket: "hotel-management-auth-df25c.appspot.com",
  messagingSenderId: "857258011497",
  appId: "1:857258011497:web:5cbbd234551b46b44a6bf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;