import React, { Component } from 'react'
import { Button, Collapse } from 'antd'
import style from 'less/project'

const Panel = Collapse.Panel

const ItemHeader = props => {
    return (
        <div className=""></div>
    )
}

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 13414,
                    title: '获取所有用户数据',
                    path: '/a/b',
                    method: 'get',
                    response: 'sdgsga'
                },
                {
                    id: 4363463,
                    title: '增加一个用户',
                    path: '/a/b',
                    method: 'get',
                    response: 'sdgsga'
                }
            ]
        }
    }

    render() {
        return (
            <div className={style.contwrap}>
                <div className={style.listhd}>
                    <Button icon="plus">新增接口</Button>
                </div>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    {this.state.list.map(item => {
                        return (
                            <Panel header={item.title} key={item.id}>
                                <p>{item.response}</p>
                            </Panel>
                        )
                    })}
                </Collapse>
            </div>
        )
    }
}
