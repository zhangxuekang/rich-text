import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'
import { Menu, Dropdown } from 'antd'

class Color extends React.Component {

  handleClick(e) {
    this.props.onChange({
      value: '#00ff00'
    }, e)
  }

  render() {
    return (
      // <div
      //   className="tool-color"
      //   onMouseDown={this.handleClick.bind(this)}
      // >
      <Dropdown overlay={<Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">第一个菜单项</a>
        </Menu.Item >
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">第二个菜单项</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">第三个菜单项</Menu.Item>
      </Menu >} trigger="click">
        <button className="ant-btn ant-btn-primary ant-btn-menu">
          点击触发
        </button>
      </Dropdown>
      // </div>
    )
  }
}

Color.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Color)