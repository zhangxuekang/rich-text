import * as React from 'react'
import PropTypes from 'prop-types'

class Popover extends React.Component {
  constructor(props) {
    super(props)
  }

  packContent(btn, content) {
    if (!this.props.isOpen) {
      return null
    }
    const btnStyle = btn.props.style || { width: '26px', height: '26px' }
    const btnW = parseInt(btnStyle.width) || 28
    const btnH = parseInt(btnStyle.height) || 28
    const pack = React.Children.only(content)
    const packStyle = pack.props.style || { width: '100px', height: '100px' }
    const packW = parseInt(packStyle.width) || 100
    const packH = parseInt(packStyle.height) || 100
    // 上/下b/t      左/中/右l/c/r
    const position = {
      bc: {
        left: -(packW - btnW) / 2 + 'px',
        top: btnH + 'px'
      },
      br: {
        left: 0,
        top: btnH + 'px'
      },
      bl: {
        left: -packW + btnW + 'px',
        top: btnH + 'px'
      },
      tc: {
        left: -(packW - btnW) / 2 + 'px',
        top: -packH + 'px'
      },
      tr: {
        left: 0,
        top: -packH + 'px'
      },
      tl: {
        left: -packW + btnW + 'px',
        top: -packH + 'px'
      }
    }
    return React.cloneElement(pack, {
      ...pack.props,
      style: {
        ...pack.props.style,
        position: 'fixed',
        zIndex: 999,
        ...position.bc
      },
    })
  }

  render() {
    const children = React.Children.only(this.props.children)
    const content = this.packContent(children, this.props.content)
    return React.cloneElement(children, {
      ...children.props,
      style: {
        ...children.props.style,
        transform: 'translate(0px, 0px)'
      },
      children: content
    })
  }
}

Popover.propTypes = {
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Popover

