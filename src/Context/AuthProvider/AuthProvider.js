import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firbase/Firbase.Config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading , setLoading] = useState(true);

     
  const providerLogin = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider)
  }
  const creatUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email,password);
  }
  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser, profile)
  }
  const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser)
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubsribe = onAuthStateChanged(auth, (currentUser)=>{
        console.log("user inside stateChange",currentUser );
       setUser(currentUser);
        setLoading(false);
    });

    return () =>{
        unsubsribe()
    }
  },[]);

    const authInfo = { 
        user,
        loading,
        setLoading, 
        providerLogin, 
        logOut,
        creatUser,
        signIn,
        updateUserProfile, 
        verifyEmail
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;