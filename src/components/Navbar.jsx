import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Start-learning</a>
      </li>
      <li>
        <a>Tutorials</a>
      </li>
      <li>
        <a>About-us</a>
      </li>
      <li>
        <a>My-profile</a>
      </li>
    </>
  );
  const authInfo = useContext(AuthContext);
  const { user, logoutUser } = authInfo;
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar px-0 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10 bg-white rounded-xl" src={logo} alt="" />
          <Link to={`/`} className="btn btn-ghost text-xl px-0">
            Lingo Bingo
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <p>{user?.email}</p>
        {user?.email ? (
          <button onClick={handleLogout} className="btn">
            Signout
          </button>
        ) : (
          <Link to="/auth/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
