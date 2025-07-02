import React from 'react';

import { Layout } from 'antd';
import Sidebar from './Sidebar';
import HeaderDashboard from './HeaderDashboard';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const MainLayout: React.FC = () => {
      return (
            <Layout hasSider>
                  <Sidebar />

                  <Layout style={{ marginInlineStart: 280 }}>
                        <HeaderDashboard />
                        <Content style={{ margin: '14px 16px 0', overflow: 'initial' }}>
                              <Outlet />
                        </Content>
                  </Layout>
            </Layout>
      );
};

export default MainLayout;
