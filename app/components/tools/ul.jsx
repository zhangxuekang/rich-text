import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'
// import {ulType} from '../../config/block-style'

class Ul extends React.Component {

  handleClick(e) {
    this.props.onChange({
      value: 'ul_disc'
    }, e)
  }

  render() {
    return (
      <div
        className="tool-ul"
        onMouseDown={this.handleClick.bind(this)}>
      </div >
    )
  }
}

Ul.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Ul)