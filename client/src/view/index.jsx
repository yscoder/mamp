import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { Layout, Card, Col, Row, Button, Menu, Dropdown, Icon } from 'antd'
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
        <a className={style.dropdown_link} href="#">
            <Icon type="setting" />
        </a>
    </Dropdown>
)

const CardItem = props => {
    return (
        <Card title={props.item.name} extra={CardControl} bordered={false}>
            <div className={style.card_cont}>{props.item.desc}</div>
            <div className={style.card_footer}>
                <Link className="ant-btn ant-btn-primary" to={"/project/" + props.item.name}>查看</Link>
            </div>
        </Card>
    )
}

const AddCard = props => {
    return (
        <Card>
            <Row type="flex" justify="center" align="middle" className={style.add_card}>
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
                },
                {
                    id: 223415,
                    name: 'BCMP',
                    desc: '萨发发发撒法立法萨洛夫萨拉姆法拉'
                }
            ]
        }
    }

    render() {
        return (
            <Layout style={{ overflow: 'hidden'}}>
                <Row gutter={16}>
                    {this.state.projects.map(item => {
                        return (
                            <Col sm={8} md={6} lg={4} key={item.id} className={style.col_space}>
                                <CardItem item={item} />
                            </Col>
                        )
                    })}
                    <Col sm={8} md={6} lg={4} key="action" className={style.col_space}>
                        <AddCard />
                    </Col>
                </Row>
            </Layout>
        )
    }
}
