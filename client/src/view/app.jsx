import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu } from 'antd'
import style from 'less/layout'

const MenuItem = Menu.Item

const Logo = props => <h1 className={style.logo}>MAMP</h1>

const headerStyle = { lineHeight: style.headerHeiht, border: 'none', float: 'right' }
const Header = props => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Logo />
                <Menu theme="dark" mode="horizontal" style={headerStyle}
                    defaultSelectedKeys={['1']}>
                    <MenuItem key="1"><Link to="/">首页</Link></MenuItem>
                    <MenuItem key="2">导航</MenuItem>
                    <MenuItem key="3">导航</MenuItem>
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
