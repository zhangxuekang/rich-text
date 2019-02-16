import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'

class Right extends React.Component {

  handleClick(e) {
    this.props.onChange({
      value: 'right'
    }, e)
  }

  render() {
    return (
      <div
        className="tool-right"
        onMouseDown={this.handleClick.bind(this)}>
      </div >
    )
  }
}

Right.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Right)