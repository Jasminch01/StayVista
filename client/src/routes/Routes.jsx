import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomsDetails from "../pages/RoomsDetails/RoomsDetails";
import PrivateRoute from "./PrivetRoute";
import { getSingleRooms } from "../api/rooms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            {" "}
            <RoomsDetails />{" "}
          </PrivateRoute>
        ),
        loader : ({params}) => getSingleRooms(params.id)
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
