import React, { Component } from 'react'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane

export default class Param extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <Tabs defaultActiveKey="1">
                <TabPane tab="Params" key="1">params</TabPane>
                <TabPane tab="Body" disabled key="2">body</TabPane>
                <TabPane tab="Query" key="3">query</TabPane>
            </Tabs>
        )
    }
}
