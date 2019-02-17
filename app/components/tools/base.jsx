import React from 'react'
import './tools.less'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function(Target) {
  class Base extends React.Component {
    render() {
      return (
        <OverlayTrigger
          key='bottom'
          placement='bottom'
          overlay={
            <Tooltip className='tool-tooltip' id={`tool-tooltip-${this.props.type}`}>
              {this.props.title}
            </Tooltip>
          }
        >
          <div className="tool">
            <Target {...this.props} />
          </div>
        </OverlayTrigger>
      )
    }
  }

  Base.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string
  }

  return Base
}