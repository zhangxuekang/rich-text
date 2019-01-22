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
      <div className="tool-bold" onClick={this.handleClick.bind(this)}>
        bold
      </div>
    )
  }
}

Bold.propTypes = {
  onChange: PropTypes.func.isRequired
}



export default Base(Bold)