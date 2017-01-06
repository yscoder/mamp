import React, { Component } from 'react'
import { Row, Col, Button, Collapse } from 'antd'
import style from 'less/project'

const Panel = Collapse.Panel

const ItemHeader = item => {
    return (
        <Row type="flex">
            <Col span={22}>
                <span className={style.api_method + ' ' + style['api_' + item.method]}>
                    {item.method.toUpperCase()}
                </span>
                <span className={style.api_title}>{item.title}</span>
            </Col>
            <Col span={2}><div className={style.api_date}>2017-01-06</div></Col>
        </Row>
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
                            <Panel header={ItemHeader(item)} key={item.id}>
                                <p>{item.response}</p>
                            </Panel>
                        )
                    })}
                </Collapse>
            </div>
        )
    }
}
