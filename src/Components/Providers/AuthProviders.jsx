/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.config';
const auth = getAuth(app);



export  const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOut =() =>{
        signOut()
    }
    useEffect(()=>{
const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
    console.log("currentUser ", currentUser);
    setUser(currentUser);
});
return () =>{
    unsubscribe();
}
    }),[]
    const authInfo = {
      user,
      createUser,
      signIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;