import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DefaultHomeComponent = () => {
  const { user } = useContext(AuthContext);
  return <div className="relative  py-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden"><h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
          {user?.email && <p>Welcome, {user.email}!</p>}
        </h2></div>;
};

export default DefaultHomeComponent;
