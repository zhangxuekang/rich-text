import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'

class Unhyperlink extends React.Component {

  handleClick(e) {
    this.props.onChange({
      value: null
    }, e)
  }


  render() {
    return (
      <div
        className="tool-unhyperlink"
        onMouseDown={this.handleClick.bind(this)}>
      </div >
    )
  }
}

Unhyperlink.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Unhyperlink)