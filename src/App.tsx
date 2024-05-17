import "./App.less"
import { RouterProvider } from "react-router-dom";
import { ConfigProvider, App as AntdApp } from "antd";
import AntdGlobal from "./utils/AntdGlobal";
import router from "./router";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        }
      }}>
      <AntdApp>
          <AntdGlobal />
          <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App

