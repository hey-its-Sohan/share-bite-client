import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Root from "../Pages/Root";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddFood from "../Pages/AddFood";
import AvailableFoods from "../Pages/AvailableFoods";
import ManageFoods from "../Pages/ManageFoods";
import UpdateFoods from "../Pages/UpdateFoods";
import FoodRequests from "../Pages/FoodRequests";

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
        path: "/available-foods",
        Component: AvailableFoods,
      },
      {
        path: "/add-food",
        Component: AddFood,
      },
      {
        path: "/manage-food",
        Component: ManageFoods,
      },
      {
        path: "/requested-food",
        Component: FoodRequests,
      },
      {
        path: "/update-food",
        Component: UpdateFoods,
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