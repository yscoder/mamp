import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { Menu, Button, Icon } from 'antd'
import style from 'less/project'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class SideMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '1'
        }
    }

    handleClick = () => {

    }

    render() {
        return (
            <Menu className={style.side_menu}
                onClick={this.handleClick}
                defaultSelectedKeys={['home']}
                defaultOpenKeys={['api']}
                mode="inline">
                <Menu.Item key="home">
                    <IndexLink to="/project/BCMP"><Icon type="home" />概览</IndexLink>
                </Menu.Item>
                <SubMenu key="api" title={<span><Icon type="folder" />API<Icon type="plus-circle-o" style={{'marginLeft': '1em'}} /></span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="1">
                            <Link to="/project/BCMP/api/111">ssdafasfasf</Link>
                        </Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        )
    }
}
