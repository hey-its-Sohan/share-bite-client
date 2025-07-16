import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Root from "../Pages/Root";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: '/sign-up',
        Component: SignUp,
      },
    ]
  },
]);