import React, { Component } from 'react'
import { Switch, Button, Layout, Card, Icon, Tag, Form } from 'antd'
import style from 'less/detail'
import Log from './log'

const { Sider, Content } = Layout
const FormItem = Form.Item

const CardTitle = props => <span><Icon type={props.icon} /> {props.title}</span>
const BasePath = props => (
    <Card title={<CardTitle icon="setting" title="基础路径" />} extra={<a href="#"><Icon type="edit" /></a>}>
        <Button className={style.base_path} type="dashed">{props.basePath}</Button>
    </Card>
)

const Member = props => (
    <Card title={<CardTitle icon="team" title="项目团队" />}>
        <Form horizontal={true}>
            <FormItem label="创建者：" labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}>
                <Tag className={style.member}>擎天柱</Tag>
            </FormItem>
            <FormItem label="团队成员：" labelCol={{ span: 7 }}
          wrapperCol={{ span: 17 }}>
                <Tag className={style.member} closable={true}>大黄蜂</Tag>
                <Tag className={style.member} closable={true}>通天晓</Tag>
                <Button type="dashed" size="small">
                    <i style={{verticalAlign: 1}}>+</i> 新成员
                </Button>
            </FormItem>
        </Form>
    </Card>
)

const Delete = props => (
    <Card className={style.delete}>
        <Button size="large" className={style.delete_btn}>删除项目</Button>
        <p>一旦删除，它将永远消失。</p>
    </Card>
)

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 24214,
            name: 'BCMP',
            basePath: '/api',
            desc: '饭店内恢复的年纪大的太阳每天都有',
            enabled: true
        }
    }

    render() {
        return (
            <div>
                <div className={style.header}>
                    <h1>{this.state.name} <Button type="dashed" shape="circle" icon="edit" /></h1>
                    <Switch defaultChecked={this.state.enabled}
                        checkedChildren={'已启用'}
                        unCheckedChildren={'未启用'}
                        className={style.enabled} />
                </div>
                <p className={style.desc}>{this.state.desc}</p>
                <Layout className={style.main}>
                    <Content>
                        <Log></Log>
                    </Content>
                    <Sider>
                        <BasePath basePath={this.state.basePath}></BasePath>
                        <Member></Member>
                        <Delete></Delete>
                    </Sider>
                </Layout>
            </div>
        )
    }
}
