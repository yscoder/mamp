import React, { Component } from 'react'
import { Timeline } from 'antd'
import style from 'less/log'

const TimelineItem = Timeline.Item

export default class Log extends Component {
    render() {
        return (
            // 绿色：创建项目、创建API、修改项目信息
            // 蓝色：修改项目、修改API、启动项目、启动API
            // 黄色：禁用项目、禁用API
            // 红色：删除项目、删除API
            <Timeline className={style.wrap}>
                <TimelineItem>Create a services site 2015-09-01</TimelineItem>
                <TimelineItem color="#FFC107">Solve initial network problems 2015-09-01</TimelineItem>
                <TimelineItem color="red" className={style.item}><a href="">擎天柱</a> 将项目 <a href="">BCMP</a> 状态改为：<a href="">未启用</a> <span className={style.time}>2017-01-22 15:41:12</span></TimelineItem>
                <TimelineItem color="green" className={style.item}><a href="">擎天柱</a> 创建了项目 <a href="">BCMP</a><span className={style.time}>2017-01-22 15:41:12</span></TimelineItem>
            </Timeline>
        )
    }
}
