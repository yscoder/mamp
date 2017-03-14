import React, { Component } from 'react'
import { Input, Select } from 'antd'
import style from 'less/api'
import Param from './param'
import Response from './response'

const InputGroup = Input.Group

const Method = props => (
    <Select defaultValue={props.method} size="large" style={{ width: 80 }}>
        <Select.Option value="GET">GET</Select.Option>
        <Select.Option value="POST">POST</Select.Option>
        <Select.Option value="PUT">PUT</Select.Option>
        <Select.Option value="DELETE">DELETE</Select.Option>
    </Select>
)

export default class Api extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 24214,
            name: '获取所有列表',
            method: 'GET',
            module: 'global',
            path: '/api/list',
            desc: '饭店内恢复的年纪大的太阳每天都有',
            enabled: true
        }
    }

    render() {
        return (
            <div className={style.base}>
                <h2 className={style.title}>{this.state.name}</h2>
                <p className={style.desc}>{this.state.desc}</p>
                <h3>Request</h3>
                <InputGroup compact={true} size="large">
                    <Method method={this.state.method} />
                    <Input style={{ width: 'calc(100% - 80px)' }} defaultValue={this.state.path} />
                </InputGroup>
                <Param />
                <Response />
            </div>
        )
    }
}
