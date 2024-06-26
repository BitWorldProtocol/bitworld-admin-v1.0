import React, { useEffect } from 'react';
import { Layout, Watermark } from 'antd';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';
import Menu from '@/components/Menu';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
import api from '@/api';
import { useStore } from '@/store';

const { Sider } = Layout;

const App: React.FC = () => {

  const { collapsed, updateUserInfo } = useStore()

  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async () => {
    const data = await api.getUserInfo()
    updateUserInfo(data)
  }

  return (
    <Watermark content="BitWorldProtocol">
      <Layout>
        <Sider collapsed={collapsed}>
          <Menu />
        </Sider>
        <Layout>
          <NavHeader />
          <div className={styles.wrapper}>
             <Outlet></Outlet>
            </div>
            <NavFooter />
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
