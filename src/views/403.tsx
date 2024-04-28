import { Button, Result } from "antd"
import { useNavigate } from "react-router"

function NotFound() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <Result
      status={403}
      title='403'
      subTitle='报歉，您当前没有权限访问次页面'
      extra={
        <Button type='primary' onClick={handleClick}>
          回首页
        </Button>
      }
    />
  )
}

export default NotFound
