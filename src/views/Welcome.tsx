import request from "@/utils/request";
import { Button } from "antd";
import { useEffect } from "react";

export default function Login() {
  const handleClick = () => {
    request.get("/users", {});
  };

  useEffect(() => {
    request.get("/users", {});
  }, [])

  return (
    <div className="welcome">
      <p>Welcome</p>
      <p>
        <Button onClick={handleClick}>点击事件</Button>
      </p>
    </div>
  );
}
