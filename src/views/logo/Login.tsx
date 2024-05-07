import styles from  "./index.module.less";
import { Button, Form, Input, message } from 'antd';
import api from "@/api";
import { Login } from "@/types/api";
import storage from "@/utils/storage";
import { useState } from "react";

export default function LoginFC() {
  const [loading, setLoading] = useState(false)
  const onFinish = async(values: Login.params) => {
    setLoading(true)
    const data = await api.login(values)
    setLoading(false)
    storage.set('token', data)
    message.success('登陆成功')
    const params = new URLSearchParams(location.search)
    location.href = params.get('callback') || '/welcome'
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登陆</div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="userName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="userPwd"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit" loading={loading}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
