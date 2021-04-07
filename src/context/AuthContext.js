import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../util/firebase';
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  async function signUp(email, password) {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function signIn(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function resetPassword(email) {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }
  async function logOut() {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const unSubscriber = auth.onAuthStateChanged((user) =>
      setCurrentUser(user),
    );

    return () => unSubscriber();
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
