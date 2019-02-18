import React from 'react'
import './tools.less'
import { Tooltip, Overlay } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function(Target) {
  class Base extends React.Component {
    constructor(props) {
      super(props)
      this.attachRef = target => this.setState({ target })
      this.state = { show: false }
      this.showTitle = this.showTitle.bind(this)
      this.closeTitle = this.closeTitle.bind(this)
    }

    showTitle() {
      this.setState({
        show: true
      })
      window.addEventListener('click', this.closeTitle)
    }

    closeTitle() {
      this.setState({
        show: false
      })
      window.removeEventListener('click', this.closeTitle)
    }

    componentWillUnmount() {
      window.removeEventListener('click', this.closeTitle)
    }

    render() {
      const { show, target } = this.state
      return (
        <React.Fragment>
          <div
            className="tool"
            ref={this.attachRef}
            onMouseOver={this.showTitle}
            onMouseLeave={this.closeTitle}
          >
            <Target {...this.props} />
          </div>
          <Overlay target={target} show={show} placement="bottom">
            <Tooltip className='tool-tooltip' id={`tool-tooltip-${this.props.type}`}>
              {this.props.title}
            </Tooltip>
          </Overlay>
        </React.Fragment>
      )
    }
  }

  Base.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string
  }

  return Base
}