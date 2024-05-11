import styles from  "./index.module.less";
import { Button, Form, Input, message, ConfigProvider } from 'antd';
import api from "@/api";
import { TinyColor } from '@ctrl/tinycolor';
import { Login } from "@/types/api";
import storage from "@/utils/storage";
import { useState } from "react";

const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
const getHoverColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).lighten(10).toString());
const getActiveColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).darken(10).toString());

export default function LoginFC() {
  const [loading, setLoading] = useState(false)
  const onFinish = async(values: Login.params) => {
    try {
      setLoading(true)
      const data = await api.login(values)
      setLoading(false)
      storage.set('token', data)
      message.success('登陆成功')
      const params = new URLSearchParams(location.search)
      setTimeout(() => {
        location.href = params.get('callback') || '/welcome'
      })
    } catch (error) {
      setLoading(false)
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>BitWorld Management Platform</div>
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
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimary: `linear-gradient(116deg,  ${colors3.join(', ')})`,
                    colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                    colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                    lineWidth: 0,
                  },
                },
              }}
              >
              <Button type="primary" block htmlType="submit" loading={loading}>
                Login
              </Button>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
