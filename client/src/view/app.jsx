import React, { Component } from 'react'
import { Menu } from 'antd'
import style from 'less/layout'

const Logo = props => <h1 className={style.logo}>MAMP</h1>

const headerStyle = { lineHeight: style.headerHeiht, border: 'none', float: 'right' }
const Header = props => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Logo />
                <Menu theme="dark" mode="horizontal" style={headerStyle}
                    defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">导航</Menu.Item>
                    <Menu.Item key="3">导航</Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

const App = ({ children }) => {
    return (
        <div className={style.wrap}>
            <Header />
            <div className={style.mainWrap}>{children}</div>
        </div>
    )
}

export default App
