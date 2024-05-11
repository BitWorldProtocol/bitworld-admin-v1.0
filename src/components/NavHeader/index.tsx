import { MenuFoldOutlined } from "@ant-design/icons"
import { Breadcrumb, Dropdown, Switch } from "antd"
import type { MenuProps } from "antd"
import styles from "./index.module.less"

const NavHeader = () => {
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
      key: '1',
      label: '邮箱： juneqi9@gamil.com'
    },
    {
      key: '2',
      label: '退出'
    }
  ]

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{marginLeft: 10}} />
      </div>
      <div className="right">
        <Switch checkedChildren="Dark" unCheckedChildren="Default" style={{marginRight: 10}} />
        <Dropdown menu={{items}} trigger={['click']}>
          <span className={styles.nickName}>Individual Center</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
