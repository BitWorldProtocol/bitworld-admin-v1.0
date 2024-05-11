import React, { useEffect } from 'react';
import { Layout, Watermark } from 'antd';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';
import Menu from '@/components/Menu';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
import api from '@/api';
import store from '@/store';

const { Content, Sider } = Layout;

const App: React.FC = () => {

  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async () => {
    const data = await api.getUserInfo()
    store.updateUserInfo(data)
  }

  return (
    <Watermark content="BitWorldProtocol">
      <Layout>
        <Sider>
          <Menu />
        </Sider>
        <Layout>
          <NavHeader />
          <Content className={styles.content}>
            <div className={styles.wrapper}>
             <Outlet></Outlet>
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
