import React from 'react';

import { Link, useHistory } from 'umi';

import style from './index.scss';

import { Layout, Menu } from 'antd';
const { Header, Content, Sider, Footer } = Layout;

const Index = (props: { children: React.ReactNode }) => {
  // console.log(props)
  const { location } = useHistory();
  // console.log(location)
  return (
    <Layout className={style.layout}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="title">老根儿demo</div>
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
          <Menu.Item key="/course">
            <Link to="/course">课程记录</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于我们</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: '24px',
            minHeight: 'max-content',
          }}
        >
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Umi3-demo creat by laogener
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Index;
