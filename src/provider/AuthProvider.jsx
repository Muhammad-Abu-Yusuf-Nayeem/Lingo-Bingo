import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // initialize
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // dummy user data
  const dummyUser = {
    name: "John Doe",
    email: "john.doe@example.com",
  };
  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // create new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // auth info
  const authInfo = {
    auth,
    dummyUser,
    user,
    setUser,
    loading,
    setLoading,
    createNewUser,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
