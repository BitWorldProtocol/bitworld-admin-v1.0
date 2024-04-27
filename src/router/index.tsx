import { createBrowserRouter, Navigate } from "react-router-dom";
import Error404 from "../views/404";
import Error403 from "../views/403";
import Welcome from "../views/Welcome";
import Login from "../views/Login";

const router = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  }

]

export default createBrowserRouter(router);
