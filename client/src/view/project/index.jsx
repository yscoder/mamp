import React, { Component } from 'react'
import { Layout } from 'antd'
import style from 'less/project'
import SideMenu from './sideMenu'

const { Sider, Content } = Layout

export default class Projects extends Component {
    constructor(props) {
        super(props)
        // this.state = {}
    }

    render() {
        return (
            <Layout className={style.wrap}>
                <Sider>
                    <SideMenu></SideMenu>
                </Sider>
                <Content className={style.content}>
                    {this.props.children}
                </Content>
            </Layout>
        )
    }
}
