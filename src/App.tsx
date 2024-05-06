import Router from "./router";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, App as AntdApp } from "antd";
import AntdGlobal from "./utils/AntdGlobal";

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
          <BrowserRouter>
            <Router />
          </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App

