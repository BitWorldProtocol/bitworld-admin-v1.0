import { Button } from "antd"

export default function UserList() {
  return (
    <div className="user-list">
      <div className="search-form"></div>
      <div className="base-table">
        <div className="header-wrapper">
          <div className="title">用户列表</div>
          <div className="action">
            <Button>新增</Button>
            <Button>批量删除</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
