import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { Card, Col, Row, Button, Menu, Dropdown, Icon } from 'antd'
import style from 'less/index'

const menuClick = ({key}) => {
    console.log(333)
}

const menu = (
    <Menu onClick={menuClick}>
        <Menu.Item key="edit"><Icon type="edit" /> 修改</Menu.Item>
        <Menu.Item key="delete"><Icon type="delete" /> 删除</Menu.Item>
    </Menu>
)

const CardControl = (
    <Dropdown overlay={menu} trigger={['click']}>
        <a className={style.dropdownlink} href="#">
            <Icon type="setting" />
        </a>
    </Dropdown>
)

const CardItem = props => {
    return (
        <Card title={props.item.name} extra={CardControl} bordered={false}>
            <div className={style.cardcont}>{props.item.desc}</div>
            <div className={style.cardfooter}>
                <Link className="ant-btn ant-btn-primary" to={"/project/" + props.item.name}>查看</Link>
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

    render() {
        return (
            <div>
                <Row gutter={16}>
                    {this.state.projects.map(item => {
                        return (
                            <Col span={6} key={item.id}>
                                <CardItem item={item} />
                            </Col>
                        )
                    })}
                    <Col span={6} key="action"><AddCard /></Col>
                </Row>
            </div>
        )
    }
}
