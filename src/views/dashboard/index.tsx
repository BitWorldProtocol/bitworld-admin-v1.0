import { Descriptions } from 'antd';
import styles from './index.module.less';

export default function DashBoard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img className={styles.userImg} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        <Descriptions title="欢迎新同学，每天都要开心！">
          <Descriptions.Item label="用户ID">100001</Descriptions.Item>
          <Descriptions.Item label="邮箱">test@mars.com</Descriptions.Item>
          <Descriptions.Item label="状态">在职</Descriptions.Item>
          <Descriptions.Item label="手机号">13761566976</Descriptions.Item>
          <Descriptions.Item label="岗位">前端工程师</Descriptions.Item>
          <Descriptions.Item label="部门">大前端</Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className="title">司机数量</div>
          <div className={styles.data}>100个</div>
        </div>
        <div className={styles.card}>
          <div className="title">总流水</div>
          <div className={styles.data}>100000元</div>
        </div>
        <div className={styles.card}>
          <div className="title">总订单</div>
          <div className={styles.data}>2000单</div>
        </div>
        <div className={styles.card}>
          <div className="title">开通城市</div>
          <div className={styles.data}>50座</div>
        </div>
      </div>
    </div>
  )
}
