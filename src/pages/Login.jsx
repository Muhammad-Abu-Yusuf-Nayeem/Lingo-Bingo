import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const authInfo = useContext(AuthContext);
  const { setUser, loginUser } = authInfo;

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <header className="bg-cyan-300">
        <Navbar></Navbar>
      </header>
      <main className="bg-blue-400">
        <div className="hero bg-base-200 py-20">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Login Page</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <fieldset className="fieldset text-[1.2em]">
                    {/* Email Input */}
                    <label className="label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Email"
                    />
                    {/* Password Input */}
                    <label className="label">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>

                    <p className="mt-2 ">
                      Don't have an account?{" "}
                      <Link to="/auth/register" className="text-blue-600">
                        Register
                      </Link>
                    </p>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Login;
