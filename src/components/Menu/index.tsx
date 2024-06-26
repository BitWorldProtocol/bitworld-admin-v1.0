import { DesktopOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import styles from "./index.module.less"
import { useNavigate } from "react-router"
import { useStore } from "@/store"

const SideMenu = () => {
  const navigate = useNavigate()
  const collapsed = useStore(state => state.collapsed)

  const handleClickLogo = () => {
    navigate("/welcome")
  }

  const items = [
    {
      label: 'WorkBench',
      key: '1',
      icon: <DesktopOutlined />
    },
    {
      label: 'Setting',
      key: '2',
      icon: <SettingOutlined />,
      children: [
        {
          label: '用户管理',
          key: '3',
          icon: <TeamOutlined />
        }
      ]
    }
  ]

  return (
    <div>
      <div className={styles.logo}>
        <img src="/imgs/logo.png" className={styles.img} onClick={handleClickLogo} />
        { collapsed ? '' : <span>BitWorld Protocol</span>}
      </div>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        style={{
          width: collapsed ? 80 : 'auto'
        }}
        items={items} />
    </div>
  )
}

export default SideMenu
