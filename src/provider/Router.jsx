import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import LetsLearnPage from "../pages/LetsLearnPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <h2>this is outlet of home</h2>,
      },
      {
        path: "/learning",
        element: <LetsLearnPage></LetsLearnPage>,
      },
      {
        path: "/tutorials",
        element: <h2>this is tutorials page</h2>,
      },
      {
        path: "/about",
        element: <h2>this is about page</h2>,
      },
      // {
      //   path: "profile",
      //   element: <h2>this is profile page</h2>,
      // },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <h2>this is profile page</h2>
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <h2>Something went wrong!</h2>,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);

export default Router;
