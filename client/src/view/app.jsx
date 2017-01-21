import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { Layout, Menu, Breadcrumb } from 'antd'
import style from 'less/layout'

const MenuItem = Menu.Item
const { Header, Content } = Layout

const Logo = props => <h1 className={style.logo}>MAMP</h1>

const headerStyle = { lineHeight: style.headerHeiht, border: 'none', float: 'right' }
const MyHeader = props => {
    return (
        <Header className={style.header}>
            <Logo />
            <Menu theme="dark" mode="horizontal" style={headerStyle}
                defaultSelectedKeys={['1']}>
                <MenuItem key="1"><IndexLink to="/">首页</IndexLink></MenuItem>
                <MenuItem key="2">导航</MenuItem>
                <MenuItem key="3">导航</MenuItem>
            </Menu>
        </Header>
    )
}

const App = ({ children, routes, params }) => (
    <Layout>
        <MyHeader />
        <Content className={style.content}>
            <Breadcrumb params={params} style={{ margin: '12px 0' }}>
                <Breadcrumb.Item key="0">首页</Breadcrumb.Item>
                {routes.map((item, i) => (
                    <Breadcrumb.Item key={i + 1}>
                        <Link to={item.path}>
                            {params[item.breadcrumbName] || item.breadcrumbName}
                        </Link>
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
            {children}
        </Content>
    </Layout>
)

export default App
