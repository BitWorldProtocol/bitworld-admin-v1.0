import request from "@/utils/request"
import { useEffect } from "react"

export default function Login() {

  useEffect(() => {
    request.post("/users", {
      id: 12345
    }).then(res => {
      // console.log(error)
    })
  }, [])

  return <div>login</div>
}
