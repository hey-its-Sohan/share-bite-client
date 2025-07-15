import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Root from "../Pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        Component: Home,
      }
    ]
  },
]);