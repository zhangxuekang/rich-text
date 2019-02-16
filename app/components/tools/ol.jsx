import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'
// import {olType} from '../../config/block-style'

class Ol extends React.Component {

  handleClick(e) {
    this.props.onChange({
      value: 'ol_decimal'
    }, e)
  }

  render() {
    return (
      <div
        className="tool-ol"
        onMouseDown={this.handleClick.bind(this)}>
      </div >
    )
  }
}

Ol.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Ol)