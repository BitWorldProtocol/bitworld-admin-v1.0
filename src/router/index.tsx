import { Navigate, createBrowserRouter } from "react-router-dom";
import Error404 from "@/views/404";
import Error403 from "@/views/403";
import Welcome from "@/views/Welcome";
import Login from "@/views/logo/Login";
import Layout from "@/layout";

export const router = [
  {
    path: '/',
    element: <Navigate to="/welcome" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />
      }
    ]
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
// 组件路由
// export default function Router() {
//   return useRoutes(router);
// }
// api路由
// createBrowserRouter 是一个用于创建浏览器路由器实例的函数
// 它是 React Router 6 中推荐的方式,取代了之前版本中的 BrowserRouter 组件
export default createBrowserRouter(router);
