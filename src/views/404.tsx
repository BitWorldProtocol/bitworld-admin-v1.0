import { Button, Result } from "antd"
import { useNavigate } from "react-router"

function NotFound() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Result
      status={404}
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={handleClick}>
          回首页
        </Button>
      }
    />
  )
}

export default NotFound
