import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'

class Center extends React.Component {

  handleClick(e) {
    this.props.onChange({
      value: 'center'
    }, e)
  }

  render() {
    return (
      <div
        className="tool-center"
        onMouseDown={this.handleClick.bind(this)}>
      </div >
    )
  }
}

Center.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Center)