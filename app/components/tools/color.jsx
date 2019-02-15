import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'
import Popover from '../../lib/popover'

class Color extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  open() {
    this.setState({
      isOpen: true
    })
  }

  close() {
    this.setState({
      isOpen: false
    })
  }

  toggle(e) {
    this.setState(preState => ({
      isOpen: !preState.isOpen
    }))
    e.preventDefault()
  }

  handleClick(value, e) {
    this.props.onChange({
      value
    }, e)
  }

  getPopoverContent() {
    const contentStyle = {
      width: '100px',
      height: '80px',
      background: '#fff',
      outline: '1px solid gray'
    }
    return (
      <div style={contentStyle}>
        <span onMouseDown={this.handleClick.bind(this, '#ffff00')}>黄</span>
        <span onMouseDown={this.handleClick.bind(this, '#00ff00')}>绿</span>
      </div>
    )
  }

  render() {
    return (
      <Popover
        content={this.getPopoverContent()}
        isOpen={this.state.isOpen}
      >
        <div
          className="tool-color"
          onMouseDown={this.toggle.bind(this)}
        >
        </div>
      </Popover>
    )
  }
}

Color.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Color)