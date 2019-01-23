import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'

class Underline extends React.Component {

  handleClick(e) {
    this.props.onChange({
      value: null
    }, e)
  }

  render() {
    return (
      <div
        className="tool-underline"
        onMouseDown={this.handleClick.bind(this)}
      >
        {this.props.title}
      </div>
    )
  }
}

Underline.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Underline)