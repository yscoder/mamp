import React, { Component } from 'react'
import { Tabs } from 'antd'
import style from 'less/project'
import List from './list'

const TabPane = Tabs.TabPane

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 24214,
            name: 'BCMP',
            desc: '饭店内恢复的年纪大的太阳每天都有'
        }
    }

    tabsChange = key => {
        console.log(key)
    }

    render() {
        return (
            <div className={style.wrap}>
                <header className={style.header}>
                    <h1 className={style.title}>{this.state.name}</h1>
                    <p>{this.state.desc}</p>
                </header>
                <Tabs defaultActiveKey="1" onChange={this.tabsChange}>
                    <TabPane tab="内容管理" key="1">
                        <List />
                    </TabPane>
                    <TabPane tab="项目动态" key="2">项目动态</TabPane>
                    <TabPane tab="项目设置" key="3">项目设置</TabPane>
                </Tabs>
            </div>
        )
    }
}
