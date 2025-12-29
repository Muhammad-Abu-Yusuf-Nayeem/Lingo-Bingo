import { createContext } from "react";

import app from "../firebase/Firebase.config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };
  const authInfo = {
    auth,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
