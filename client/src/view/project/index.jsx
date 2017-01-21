import React, { Component } from 'react'
import { Layout } from 'antd'
import style from 'less/project'
import SideMenu from './sideMenu'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 24214,
            name: 'BCMP',
            desc: '饭店内恢复的年纪大的太阳每天都有'
        }
    }

    render() {
        return (
            <Layout className={style.wrap}>
                <SideMenu></SideMenu>
                <div className={style.content}>
                    {this.props.children}
                </div>
            </Layout>
        )
    }
}
