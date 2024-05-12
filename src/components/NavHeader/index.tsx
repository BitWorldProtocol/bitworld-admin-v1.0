import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Breadcrumb, Dropdown, Switch } from "antd"
import type { MenuProps } from "antd"
import styles from "./index.module.less"
import { useStore } from "@/store"
import storage from "@/utils/storage"

const NavHeader = () => {
  // 这么做的目的是只更新 userInfo的值
  // const userInfo = useStore(state => state.userInfo)
  // const collapsed = useStore(state => state.collapsed)

  // 解构赋值
  const { userInfo, collapsed, updateCollapsed} = useStore()

  const breadList = [
    {
      title: '首页',
    },
    {
      title: '工作台'
    }
  ]

  const items: MenuProps['items'] = [
    {
      key: 'email',
      label: '邮箱：' + userInfo.userEmail
    },
    {
      key: 'logout',
      label: '退出'
    }
  ]

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if(key === 'logout') {
      storage.remove('token')
      location.href = '/login?callback=' + encodeURIComponent(location.href)
    }
  }

  const toggleCollapsed = () => {
    updateCollapsed()
  }

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <div onClick={toggleCollapsed}>
          { collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
        </div>
        <Breadcrumb items={breadList} style={{marginLeft: 10}} />
      </div>
      <div className="right">
        <Switch checkedChildren="Dark" unCheckedChildren="Default" style={{marginRight: 10}} />
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={styles.nickName}>{userInfo.userName}</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
