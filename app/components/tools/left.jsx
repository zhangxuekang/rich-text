import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'

class Left extends React.Component {

  handleClick(e) {
    this.props.onChange({
      value: 'left'
    }, e)
  }

  render() {
    return (
      <div
        className="tool-left"
        onMouseDown={this.handleClick.bind(this)}>
      </div >
    )
  }
}

Left.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Left)