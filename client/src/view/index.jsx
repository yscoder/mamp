import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Card, Col, Row, Button, Menu, Dropdown, Icon } from 'antd'
import style from 'less/index'

const menu = (
    <Menu>
        <Menu.Item key="0"><Icon type="edit" /> 修改</Menu.Item>
        <Menu.Item key="1"><Icon type="delete" /> 删除</Menu.Item>
    </Menu>
)

const CardControl = (
    <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
            <Icon type="setting" />
        </a>
    </Dropdown>
)

const CardItem = props => {
    return (
        <Card title={props.item.name} extra={CardControl} bordered={false}>
            <div className={style.cardcont}>{props.item.desc}</div>
            <div className={style.cardfooter}>
                <Button type="primary" onClick={props.toView.bind(this, props.item.id)}>查看</Button>
            </div>
        </Card>
    )
}

const AddCard = props => {
    return (
        <Card>
            <Row type="flex" justify="center" align="middle" className={style.addcard}>
                <Col span={24}>
                    <Icon type="plus" />
                    <div>添加项目</div>
                </Col>
            </Row>
        </Card>
    )
}


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    id: 12345,
                    name: 'BCMP',
                    desc: '萨发发发撒法立法萨洛夫萨拉姆法拉'
                },
                {
                    id: 321321,
                    name: 'BCMP',
                    desc: '萨发发发撒法立法萨洛夫萨拉姆法拉'
                }
            ]
        }
    }

    toView = id => {
        browserHistory.push('/project/' + id)
    }

    render() {
        return (
            <div>
                <Row gutter={16}>
                    {this.state.projects.map(item => {
                        return (
                            <Col span={6} key={item.id}>
                                <CardItem item={item} toView={this.toView} />
                            </Col>
                        )
                    })}
                    <Col span={6} key="action"><AddCard /></Col>
                </Row>
            </div>
        )
    }
}
