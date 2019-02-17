import React from 'react'
import './tools.less'
import Base from './base.jsx'
import PropTypes from 'prop-types'
import ColorPicker from '../../lib/color-picker'
import { Overlay, Popover } from 'react-bootstrap'

class Color extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.attachRef = target => this.setState({ target })
    this.handleClickOut = this.handleClickOut.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  handleClickOut() {
    this.close()
  }

  open() {
    this.setState({
      isOpen: true
    })
    window.addEventListener('mousedown', this.handleClickOut)
  }

  close() {
    this.setState({
      isOpen: false
    })
    window.removeEventListener('mousedown', this.handleClickOut)
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClickOut)
  }

  toggle(e) {
    if (this.state.isOpen) {
      this.close()
    } else {
      this.open()
    }
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
    return (
      <Popover id='tool-color-popover'>
        <ColorPicker
          onChange={this.handleClick.bind(this)}
        />
      </Popover>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="tool-color"
          onMouseDown={this.toggle.bind(this)}
          ref={this.attachRef}
        />
        <Overlay
          target={this.state.target}
          show={this.state.isOpen}
          placement="bottom"
          rootClose={true}
          rootCloseEvent="mousedown"
          onHide={() => { }}
        >
          {this.getPopoverContent()}
        </Overlay>
      </React.Fragment>
    )
  }
}

Color.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}



export default Base(Color)