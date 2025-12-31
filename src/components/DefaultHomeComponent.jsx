import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DefaultHomeComponent = () => {
  const { user } = useContext(AuthContext);
  return <div className="bg-amber-500">{user?.email && <p>Hello, {user.email}!</p>}</div>;
};

export default DefaultHomeComponent;
