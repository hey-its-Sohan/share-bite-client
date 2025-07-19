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
import UpdateFoods from "../Pages/UpdateFoods";
import FoodRequests from "../Pages/FoodRequests";
import FoodDetails from "../Pages/FoodDetails";
import axios from "axios";
import MyFoods from "../Pages/MyFoods";

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
        path: "/food-details/:id",
        Component: FoodDetails,
        loader: async ({ params }) => {
          const { data } = await axios.get(`http://localhost:3000/food-details/${params.id}`)
          return data;
        }
      },
      {
        path: "/my-foods",
        Component: MyFoods,
      },
      {
        path: "/requested-food",
        Component: FoodRequests,
      },
      {
        path: "/update-food/:id",
        Component: UpdateFoods,
        loader: async ({ params }) => {
          const { data } = await axios.get(`http://localhost:3000/food-details/${params.id}`)
          return data;
        }
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