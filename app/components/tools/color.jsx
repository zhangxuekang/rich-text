import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'
import Popover from '../../lib/popover'
import ColorPicker from '../../lib/color-picker'

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
    e.stopPropagation()
  }

  handleClick(value, e) {
    this.props.onChange({
      value
    }, e)
    this.close()
  }

  getPopoverContent() {
    const contentStyle = {
      width: '120px',
      height: '48px',
      background: '#fff',
      outline: '1px solid gray'
    }
    return (
      <div style={contentStyle}>
        <ColorPicker
          onChange={this.handleClick.bind(this)}
        />
      </div>
    )
  }

  render() {
    return (
      <Popover
        content={this.getPopoverContent()}
        isOpen={this.state.isOpen}
        position="bottom"
        align="right"
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