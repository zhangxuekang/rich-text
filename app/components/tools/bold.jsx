import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'

class Bold extends React.Component {

  handleClick(e) {
    this.props.onChange({
      type: 'bold',
      value: null
    }, e)
  }

  render() {
    return (
      <div
        className="tool-bold"
        onMouseDown={this.handleClick.bind(this)} // 研究下为什么onclick时间不能阻止事件冒泡
      >
        bold
      </div>
    )
  }
}

Bold.propTypes = {
  onChange: PropTypes.func.isRequired
}



export default Base(Bold)